import { Reveal } from './Reveal';
import './KumuEmbed.css';

interface KumuEmbedProps {
  title: string;
  src: string;
}

export function KumuEmbed({ title, src }: KumuEmbedProps) {
  return (
    <Reveal>
      <div className="kumu-embed panel">
        <header className="kumu-embed__header">
          <div className="kumu-embed__title-group">
            <span className="kumu-embed__status-dot" />
            <span className="kumu-embed__title">{title}</span>
          </div>
          <span className="kumu-embed__telemetry">KUMU SYSTEM MAP v2.6 // LIVE_STREAM</span>
        </header>
        <div className="kumu-embed__frame">
          <iframe src={src} title={title} loading="lazy" frameBorder={0} />
        </div>
      </div>
    </Reveal>
  );
}
