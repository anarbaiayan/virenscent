import { motion } from 'framer-motion';
import { ArrowRight, CalendarRange, MapPin, Sparkles, Wind } from 'lucide-react';
import { cities, heroStats } from '../data/content';
import { BrandLogo } from './BrandLogo';
import { PlaceholderMedia } from './PlaceholderMedia';

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden scroll-mt-28 pt-8 sm:pt-12">
      <div className="absolute inset-0 bg-hero-mesh opacity-100" />
      <div className="absolute -left-12 top-24 h-64 w-64 rounded-full bg-brand/12 blur-3xl dark:bg-brand/18" />
      <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-brand/10 blur-3xl dark:bg-brand/20" />

      <div className="section-shell relative">
        <div className="grid gap-10 pb-24 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:pb-28">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <div className="mb-6 inline-flex rounded-full border border-white/50 bg-white/75 px-4 py-3 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
              <BrandLogo
                size="md"
                caption="Signature aroma service"
                nameClassName="text-3xl font-semibold"
              />
            </div>

            <h1 className="text-balance font-display text-5xl leading-[0.95] text-foreground sm:text-6xl xl:text-7xl">
              Ароматизация помещений с установкой и обслуживанием
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Virenscent — аренда аромаприборов для бизнеса и частных пространств
              в Астане, Алматы и Шымкенте.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="button-primary">
                Оставить заявку
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#aromas" className="button-secondary">
                Выбрать аромат
                <Sparkles className="h-4 w-4 text-brand" />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-4 py-2 dark:bg-white/5">
                <MapPin className="h-4 w-4 text-brand" />
                {cities.join(' • ')}
              </span>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.2 + index * 0.1 }}
                  className="glass-panel p-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded-2xl bg-brand-soft/80 p-3 text-brand dark:bg-brand-soft/40">
                      {index === 0 ? (
                        <Wind className="h-5 w-5" />
                      ) : index === 1 ? (
                        <Sparkles className="h-5 w-5" />
                      ) : (
                        <CalendarRange className="h-5 w-5" />
                      )}
                    </span>
                    <p className="text-sm font-semibold text-foreground">{stat}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative"
          >
            <div className="glass-panel premium-ring relative overflow-hidden p-4 sm:p-6">
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-brand/10 to-transparent" />
              <PlaceholderMedia
                label="Фото прибора / интерьера"
                className="h-[420px] w-full rounded-[1.9rem]"
              />
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-4 top-10 hidden max-w-[220px] rounded-3xl border border-white/55 bg-white/85 p-4 shadow-soft backdrop-blur-xl md:block dark:border-white/10 dark:bg-panel/90"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Сервис Virenscent
              </p>
              <p className="mt-2 text-sm font-semibold text-foreground">
                Установка, чистка и долив входят в регулярный сервис.
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-4 bottom-12 hidden max-w-[220px] rounded-3xl border border-white/55 bg-white/85 p-4 shadow-soft backdrop-blur-xl md:block dark:border-white/10 dark:bg-panel/90"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Премиальная атмосфера
              </p>
              <p className="mt-2 text-sm font-semibold text-foreground">
                Подбираем аромат под формат пространства и впечатление от него.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
