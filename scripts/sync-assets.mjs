import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { basename } from 'node:path';

if (!existsSync('Assets')) {
  console.log('sync-assets: no Assets/ folder, skipping');
  process.exit(0);
}

// Heavy media files kept safe in root Assets/ but excluded from deployment bundles
const EXCLUDED_ASSETS = new Set([
  'El_Colapso_de_la_Incertidumbre.mp4',
]);

// Clean public/Assets before sync to prevent stale or excluded assets from persisting
if (existsSync('public/Assets')) {
  rmSync('public/Assets', { recursive: true, force: true });
}
mkdirSync('public/Assets', { recursive: true });

// Also prune from dist/Assets if present from legacy builds
for (const excludedFile of EXCLUDED_ASSETS) {
  const distFile = `dist/Assets/${excludedFile}`;
  if (existsSync(distFile)) {
    rmSync(distFile, { force: true });
    console.log(`sync-assets: purged stale ${distFile}`);
  }
}

let skippedCount = 0;

cpSync('Assets', 'public/Assets', {
  recursive: true,
  filter: (source) => {
    const filename = basename(source);
    if (EXCLUDED_ASSETS.has(filename)) {
      console.log(`sync-assets: excluding unreferenced heavy media '${filename}'`);
      skippedCount++;
      return false;
    }
    return true;
  },
});

console.log(`sync-assets: successfully mirrored Assets/ → public/Assets/ (${skippedCount} heavy unreferenced media excluded, raw source intact in Assets/)`);

