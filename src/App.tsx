import { useD3Background } from './hooks/useD3Background';
import { useIcebergDepth } from './hooks/useIcebergDepth';
import { useThemeMode } from './hooks/useThemeMode';
import { FloatingCta } from './components/layout/FloatingCta';
import { IcebergProgress } from './components/layout/IcebergProgress';
import { IcebergProgressMobile } from './components/layout/IcebergProgressMobile';
import { ModeSwitch } from './components/layout/ModeSwitch';
import { ComplexityLayer } from './components/sections/ComplexityLayer';
import { DepthLayer } from './components/sections/DepthLayer';
import { EvidenceLayer } from './components/sections/EvidenceLayer';
import { HeroSurface } from './components/sections/HeroSurface';
import { SignalLayer } from './components/sections/SignalLayer';
import './components/sections/sections.css';
import './components/sections/DepthLayer.css';

export default function App() {
  const { mode, setMode } = useThemeMode();
  const { activeLayer } = useIcebergDepth();
  const d3Ref = useD3Background(mode);

  return (
    <>
      <div id="d3-canvas-container" ref={d3Ref} />
      <ModeSwitch mode={mode} onModeChange={setMode} />
      <IcebergProgress activeLayer={activeLayer} />
      <IcebergProgressMobile activeLayer={activeLayer} />
      <main className="scroll-container">
        <HeroSurface />
        <ComplexityLayer />
        <EvidenceLayer />
        <SignalLayer />
        <DepthLayer />
      </main>
      <FloatingCta />
    </>
  );
}
