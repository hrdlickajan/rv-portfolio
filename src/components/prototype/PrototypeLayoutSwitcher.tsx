// PROTOTYPE — throwaway layout switcher, wipe me before shipping.
// Lets you flip between the shipped layout and 6 alternative section layouts
// via a `?ui=` query param, without touching any section's copy or colors.
import { useEffect, useState } from 'react';

export type UIVariant =
  | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10'
  | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20'
  | '21' | '22' | '23' | '24' | '25';
const VALID_VARIANTS: UIVariant[] = [
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
  '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
  '21', '22', '23', '24', '25',
];

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
  { id: '11', label: 'V11 · Terracotta Botanical' },
  { id: '12', label: 'V12 · Neon Dusk Arcade' },
  { id: '13', label: 'V13 · Sunlit Citrus Paper' },
  { id: '14', label: 'V14 · Midnight Jade Glass' },
  { id: '15', label: 'V15 · Retro Varsity Score' },
  { id: '16', label: 'V16 · Botanical Ink Wash' },
  { id: '17', label: 'V17 · Sunset Adobe Dusk' },
  { id: '18', label: 'V18 · Deep Ocean Bioluminescence' },
  { id: '19', label: 'V19 · Vintage Letterpress' },
  { id: '20', label: 'V20 · Golden Hour Studio' },
  { id: '21', label: 'V21 · Warm Editorial Hearth' },
  { id: '22', label: 'V22 · Sunlit Terracotta Grotesk' },
  { id: '23', label: 'V23 · Golden Slab Warmth' },
  { id: '24', label: 'V24 · Classic Refined' },
  { id: '25', label: 'V25 · Boutique Warm Script' },
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
