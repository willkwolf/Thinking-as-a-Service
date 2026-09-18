import os
import socket
import subprocess
import sys
import time
from typing import Generator, Optional
import pytest

DEFAULT_BASE_URL = os.environ.get("BASE_URL", "http://localhost:4173/Thinking-as-a-Service/")


def is_port_open(host: str, port: int, timeout: float = 0.5) -> bool:
    """Check if a TCP port is open and accepting connections (IPv4 and IPv6)."""
    for h in (host, "127.0.0.1", "localhost", "::1"):
        try:
            for res in socket.getaddrinfo(h, port, socket.AF_UNSPEC, socket.SOCK_STREAM):
                af, socktype, proto, _, sa = res
                sock = socket.socket(af, socktype, proto)
                sock.settimeout(timeout)
                result = sock.connect_ex(sa)
                sock.close()
                if result == 0:
                    return True
        except Exception:
            continue
    return False


def wait_for_server(host: str, port: int, timeout: float = 10.0) -> bool:
    """Poll until the server port is responsive or timeout expires."""
    start_time = time.time()
    while time.time() - start_time < timeout:
        if is_port_open(host, port):
            return True
        time.sleep(0.2)
    return False


@pytest.fixture(scope="session")
def preview_server() -> Generator[str, None, None]:
    """
    Session fixture ensuring preview/dev web server is accessible.
    If port 4173 is already active, uses it.
    If port 5173 is active, falls back to it.
    Otherwise attempts to start `npm run preview` on port 4173.
    """
    custom_url = os.environ.get("BASE_URL")
    if custom_url:
        yield custom_url
        return

    # Check if preview server (4173) is already running
    if is_port_open("127.0.0.1", 4173):
        yield "http://localhost:4173/Thinking-as-a-Service/"
        return

    # Check if dev server (5173) is running
    if is_port_open("127.0.0.1", 5173):
        yield "http://localhost:5173/Thinking-as-a-Service/"
        return

    # Attempt to start preview server bound to 127.0.0.1
    proc: Optional[subprocess.Popen] = None
    try:
        npm_cmd = "npm.cmd" if sys.platform == "win32" else "npm"
        proc = subprocess.Popen(
            [npm_cmd, "run", "preview", "--", "--port", "4173", "--host", "127.0.0.1"],
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
        if wait_for_server("127.0.0.1", 4173, timeout=12.0):
            yield "http://localhost:4173/Thinking-as-a-Service/"
        else:
            yield DEFAULT_BASE_URL
    finally:
        if proc:
            try:
                proc.terminate()
                proc.wait(timeout=3)
            except Exception:
                try:
                    proc.kill()
                except Exception:
                    pass


@pytest.fixture(scope="session")
def base_url(preview_server: str) -> str:
    """Canonical base URL for landing page test suites."""
    return preview_server


@pytest.fixture(scope="session")
def browser_context_args(browser_context_args):
    """Ensure desktop viewport (1280x800) for Playwright fallback tests."""
    return {
        **browser_context_args,
        "viewport": {"width": 1280, "height": 800},
    }


@pytest.fixture
def vibe() -> Generator:
    """
    Primary Vibium browser automation session fixture.
    Connects via W3C WebDriver BiDi protocol using Chrome for Testing.
    Headless mode is enabled by default, controllable via HEADLESS env var.
    """
    try:
        from vibium import browser_sync as browser
    except ImportError as err:
        pytest.skip(
            f"Vibium library is not installed in the environment: {err}. "
            "Please run 'uv add vibium' or 'pip install vibium'."
        )

    headless_env = os.environ.get("HEADLESS", "true").strip().lower()
    is_headless = headless_env not in ("0", "false", "no")

    session = browser.launch(headless=is_headless)
    try:
        yield session
    finally:
        try:
            session.quit()
        except Exception:
            pass
