// PROTOTYPE — throwaway layout switcher, wipe me before shipping.
// Lets you flip between the shipped layout and 6 alternative section layouts
// via a `?ui=` query param, without touching any section's copy or colors.
import { useEffect, useState } from 'react';

export type UIVariant = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';
const VALID_VARIANTS: UIVariant[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const OPTIONS: { id: UIVariant; label: string }[] = [
  { id: '0', label: 'Original' },
  { id: '1', label: 'V1 · Breathing Room' },
  { id: '2', label: 'V2 · Card Journey' },
  { id: '3', label: 'V3 · Vertical Rhythm' },
  { id: '4', label: 'V4 · Split Diagonal' },
  { id: '5', label: 'V5 · Bento Overlap' },
  { id: '6', label: 'V6 · Scrapbook Tilt' },
  { id: '7', label: 'V7 · Magazine Pull-Quote' },
  { id: '8', label: 'V8 · Floating Glass' },
  { id: '9', label: 'V9 · Zigzag Timeline' },
  { id: '10', label: 'V10 · Minimal Zen' },
];

export function useUIVariant(): [UIVariant, (v: UIVariant) => void] {
  const [variant, setVariantState] = useState<UIVariant>(() => {
    const param = new URLSearchParams(window.location.search).get('ui');
    return VALID_VARIANTS.includes(param as UIVariant) ? (param as UIVariant) : '0';
  });

  useEffect(() => {
    const onPopState = () => {
      const param = new URLSearchParams(window.location.search).get('ui');
      setVariantState(VALID_VARIANTS.includes(param as UIVariant) ? (param as UIVariant) : '0');
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const setVariant = (v: UIVariant) => {
    const url = new URL(window.location.href);
    if (v === '0') {
      url.searchParams.delete('ui');
    } else {
      url.searchParams.set('ui', v);
    }
    window.history.pushState({}, '', url);
    setVariantState(v);
  };

  return [variant, setVariant];
}

export default function PrototypeLayoutSwitcher({
  variant,
  onChange,
}: {
  variant: UIVariant;
  onChange: (v: UIVariant) => void;
}) {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[999] flex flex-wrap justify-center gap-1 rounded-full border border-orange-200 bg-white/95 backdrop-blur-md px-2 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.14)]">
      {OPTIONS.map((opt) => (
        <button
          key={opt.id}
          onClick={() => onChange(opt.id)}
          className="rounded-full px-3 py-1.5 text-xs font-semibold transition-colors"
          style={
            variant === opt.id
              ? { backgroundColor: 'var(--c-orange)', color: '#fff' }
              : { color: '#57534e' }
          }
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
