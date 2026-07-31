import { cn } from '@/lib/cn';

interface EyebrowProps {
  children: string;
  tone?: 'plum' | 'gold' | 'muted';
  className?: string;
}

const tones = {
  plum: 'text-plum-600',
  gold: 'text-gold-500',
  muted: 'text-ink-muted',
} as const;

/** The small tracked-out label that opens every section. Includes its own rule. */
export function Eyebrow({ children, tone = 'plum', className }: EyebrowProps) {
  return (
    <p
      className={cn(
        'flex items-center gap-3 text-eyebrow font-semibold tracking-(--text-eyebrow--letter-spacing) uppercase',
        tones[tone],
        className,
      )}
    >
      <span aria-hidden className="h-px w-6 shrink-0 bg-current opacity-45" />
      {children}
    </p>
  );
}
