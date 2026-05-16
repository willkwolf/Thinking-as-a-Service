import { playbook, signalLead, teamMembers } from '../../content/playbook';
import { PlaybookCards } from '../ui/PlaybookCards';
import { Reveal } from '../ui/Reveal';
import './SignalLayer.css';

export function SignalLayer() {
  return (
    <section id="iceberg-signal" className="layer layer--signal" aria-labelledby="signal-title">
      <div className="content-wrapper">
        <Reveal>
          <p className="eyebrow">{signalLead.eyebrow}</p>
          <h2 id="signal-title">{signalLead.title}</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <article className="signal-lead panel" id="equipo">
            <img src={signalLead.photo} alt={signalLead.name} loading="lazy" decoding="async" />
            <div className="signal-lead__body">
              <span className="signal-lead__role">{signalLead.role}</span>
              <h3>{signalLead.name}</h3>
              <p>{signalLead.quote}</p>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="eyebrow eyebrow--muted" style={{ marginTop: '2.5rem' }}>
            {playbook.eyebrow}
          </p>
          <h2>{playbook.title}</h2>
          <p className="lead">{playbook.lead}</p>
        </Reveal>
        <PlaybookCards />

        <Reveal delay={0.15}>
          <p className="eyebrow eyebrow--muted" style={{ marginTop: '3rem' }}>
            Equipo
          </p>
          <h2>Tres funciones para convertir complejidad en control ejecutivo</h2>
        </Reveal>
        <div className="team-grid">
          {teamMembers.map((member, i) => (
            <Reveal key={member.nombre} delay={i * 0.08}>
              <article className={`team-member panel${member.featured ? ' team-member--featured' : ''}`}>
                <img src={member.foto} alt={member.nombre} loading="lazy" decoding="async" />
                <div className="team-member__body">
                  <span className="team-member__role">{member.rol}</span>
                  <h3>{member.nombre}</h3>
                  <p>{member.descripcion}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
