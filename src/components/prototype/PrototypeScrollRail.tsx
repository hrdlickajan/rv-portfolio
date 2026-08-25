// PROTOTYPE — throwaway scroll rail for layout V3 only, wipe me before shipping.
// Pure navigation chrome — reuses existing section ids, adds no new copy.
import { useEffect, useState } from 'react';

const SECTIONS = [
  'home',
  'manifesto',
  'stuck-in-circle',
  'foundations',
  'why-strength',
  'your-journey',
  'how-i-can-help',
  'choose-your-path',
  'why-i-do-this',
  'movement-shared',
  'faq',
  'contact',
];

export default function PrototypeScrollRail() {
  const [active, setActive] = useState(SECTIONS[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-[998] hidden lg:flex flex-col gap-3 pointer-events-none">
      {SECTIONS.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={id}
          className="pointer-events-auto block rounded-full transition-all"
          style={{
            width: active === id ? '10px' : '6px',
            height: active === id ? '10px' : '6px',
            backgroundColor: active === id ? 'var(--c-orange)' : 'rgba(31,27,24,0.22)',
          }}
        />
      ))}
    </div>
  );
}
