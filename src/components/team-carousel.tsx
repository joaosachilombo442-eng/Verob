import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { TeamMember } from '@/lib/verob';

export function TeamCarousel({ members }: { members: readonly TeamMember[] }) {
  const track = useRef<HTMLDivElement>(null);

  const scroll = (direction: -1 | 1) => {
    const container = track.current;
    const card = container?.querySelector<HTMLElement>('.team-profile-card');
    if (!container || !card) return;

    container.scrollBy({ left: direction * (card.offsetWidth + 16), behavior: 'smooth' });
  };

  return (
    <section className="team-profiles" aria-labelledby="team-profiles-title">
      <div className="site-container">
        <div className="team-carousel-heading">
          <div>
            <p className="eyebrow">Equipa VEROB</p>
            <h2 className="section-title" id="team-profiles-title">Conheça a nossa equipa</h2>
          </div>
          <div className="team-carousel-controls" aria-label="Navegação dos perfis">
            <Button variant="outline" size="icon" aria-label="Perfis anteriores" onClick={() => scroll(-1)}>
              <ArrowRight className="rotate-180" />
            </Button>
            <Button variant="outline" size="icon" aria-label="Perfis seguintes" onClick={() => scroll(1)}>
              <ArrowRight />
            </Button>
          </div>
        </div>
        <div
          ref={track}
          className="team-carousel-track"
          role="region"
          aria-label="Perfis da equipa VEROB"
          aria-roledescription="carrossel"
          tabIndex={0}
        >
          {members.map((member) => (
            <article className="team-profile-card" key={member.name}>
              <img src={member.image} alt={member.imageAlt} loading="lazy" />
              <div className="team-profile-copy">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}