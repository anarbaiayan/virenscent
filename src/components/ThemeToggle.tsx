import { MoonStar, SunMedium } from 'lucide-react';

type ThemeToggleProps = {
  theme: 'light' | 'dark';
  onToggle: () => void;
};

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/75 text-foreground shadow-soft transition hover:-translate-y-0.5 hover:border-brand/30 hover:text-brand dark:bg-white/5"
      aria-label={
        isDark ? 'Переключить на светлую тему' : 'Переключить на темную тему'
      }
    >
      {isDark ? <SunMedium className="h-5 w-5" /> : <MoonStar className="h-5 w-5" />}
    </button>
  );
}
