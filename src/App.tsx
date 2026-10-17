import { useState } from 'react';
import { useD3Background } from './hooks/useD3Background';
import { useIcebergDepth } from './hooks/useIcebergDepth';
import { useThemeMode } from './hooks/useThemeMode';
import { useI18n } from './hooks/useI18n';
import { DesktopNavbar } from './components/layout/DesktopNavbar';
import { IcebergProgressMobile } from './components/layout/IcebergProgressMobile';
import { FloatingCta } from './components/layout/FloatingCta';
import { DiagnosticIntakeModal } from './components/ui/DiagnosticIntakeModal';
import { DiagnosisLayer } from './components/sections/DiagnosisLayer';
import { FormulaLayer } from './components/sections/FormulaLayer';
import { CemstwoLayer } from './components/sections/CemstwoLayer';
import { DepthLayer } from './components/sections/DepthLayer';
import { EvidenceLayer } from './components/sections/EvidenceLayer';
import { AuthorityBar } from './components/ui/AuthorityBar';
import { AudienceFilter } from './components/ui/AudienceFilter';
import { FaqAccordion } from './components/ui/FaqAccordion';
import { FinalCtaBanner } from './components/ui/FinalCtaBanner';
import { HeroSurface } from './components/sections/HeroSurface';
import { SignalLayer } from './components/sections/SignalLayer';
import { ProposalLayer } from './components/sections/ProposalLayer';
import './components/sections/sections.css';
import './components/sections/DepthLayer.css';

export default function App() {
  const { mode } = useThemeMode();
  const { activeLayer } = useIcebergDepth();
  const [isIntakeOpen, setIsIntakeOpen] = useState(false);
  const { locale } = useI18n();
  const d3Ref = useD3Background(mode);

  const handleOpenIntake = () => setIsIntakeOpen(true);
  const handleCloseIntake = () => setIsIntakeOpen(false);

  return (
    <>
      <a href="#iceberg-surface" className="skip-link">
        {locale === 'es' ? 'Saltar al contenido principal' : 'Skip to main content'}
      </a>
      <div id="d3-canvas-container" ref={d3Ref} />
      <DesktopNavbar activeLayer={activeLayer} onOpenIntake={handleOpenIntake} />
      <IcebergProgressMobile activeLayer={activeLayer} />
      <FloatingCta />
      <DiagnosticIntakeModal isOpen={isIntakeOpen} onClose={handleCloseIntake} />
      <main className="scroll-container">
        <HeroSurface onOpenIntake={handleOpenIntake} />
        <AuthorityBar />
        <DiagnosisLayer onOpenIntake={handleOpenIntake} />
        <AudienceFilter />
        <EvidenceLayer />
        <FormulaLayer />
        <CemstwoLayer />
        <SignalLayer />
        <ProposalLayer />
        <FaqAccordion />
        <FinalCtaBanner onOpenIntake={handleOpenIntake} />
        <DepthLayer />
      </main>
    </>
  );
}
