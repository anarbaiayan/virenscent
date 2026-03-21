import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navItems } from '../data/content';
import { BrandLogo } from './BrandLogo';
import { ThemeToggle } from './ThemeToggle';

type HeaderProps = {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
};

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-background/75 backdrop-blur-xl dark:border-white/10">
      <div className="section-shell">
        <div className="flex min-h-[84px] items-center justify-between gap-4">
          <a href="#hero" className="group flex items-center gap-3">
            <BrandLogo
              size="sm"
              caption="Aroma identity"
              nameClassName="text-2xl font-semibold transition group-hover:text-brand"
            />
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <a href="#contact" className="button-primary">
              Оставить заявку
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/75 text-foreground shadow-soft dark:bg-white/5"
              aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="border-t border-line bg-background/95 lg:hidden"
          >
            <div className="section-shell py-5">
              <div className="glass-panel space-y-3 p-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-foreground transition hover:bg-brand-soft/50 dark:hover:bg-white/5"
                  >
                    {item.label}
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="button-primary mt-2 w-full"
                >
                  Оставить заявку
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
