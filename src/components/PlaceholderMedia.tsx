import { ImageIcon } from 'lucide-react';

type PlaceholderMediaProps = {
  label: string;
  className?: string;
};

export function PlaceholderMedia({
  label,
  className = 'h-64 w-full',
}: PlaceholderMediaProps) {
  return (
    <div className={`placeholder-card ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(120,236,159,0.22),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(16,148,87,0.16),_transparent_40%)]" />
      <div className="relative flex h-full flex-col items-center justify-center gap-4 px-6 py-8">
        <span className="rounded-full bg-white/70 p-4 text-brand shadow-soft dark:bg-white/10">
          <ImageIcon className="h-7 w-7" />
        </span>
        <div className="space-y-1">
          <p className="text-sm font-semibold text-foreground">{label}</p>
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Photo placeholder
          </p>
        </div>
      </div>
    </div>
  );
}
