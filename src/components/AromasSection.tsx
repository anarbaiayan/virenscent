import { motion } from 'framer-motion';
import { Sparkles, Tag, WandSparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import {
  aromaCards,
  aromaCategories,
  availableNow,
  topAromas,
} from '../data/content';
import { MotionReveal } from './MotionReveal';
import { PlaceholderMedia } from './PlaceholderMedia';
import { SectionHeading } from './SectionHeading';

export function AromasSection() {
  const [activeCategory, setActiveCategory] = useState(aromaCategories[0].id);

  const currentCategory = useMemo(
    () =>
      aromaCategories.find((category) => category.id === activeCategory) ??
      aromaCategories[0],
    [activeCategory],
  );

  return (
    <section
      id="aromas"
      className="scroll-mt-28 overflow-hidden py-20 sm:py-24"
    >
      <div className="section-shell">
        <div className="glass-panel relative overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="absolute -left-16 top-12 h-64 w-64 rounded-full bg-brand/12 blur-3xl dark:bg-brand/20" />
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-brand/10 blur-3xl dark:bg-brand/18" />

          <div className="relative">
            <SectionHeading
              eyebrow="Ароматы"
              title="Каталог ароматов, который помогает пространству запоминаться"
              description="Мы предлагаем выразительные, свежие, мягкие и статусные композиции под разные сценарии. Ниже — ароматы, которые можно выделить как актуальные и особенно заметные для презентации бренда."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {topAromas.map((name, index) => {
                const aroma = aromaCards.find((item) => item.name === name);

                if (!aroma) {
                  return null;
                }

                return (
                  <MotionReveal key={aroma.name} delay={index * 0.08}>
                    <article className="surface-panel h-full overflow-hidden p-4 sm:p-5">
                      {/* <PlaceholderMedia
                        label={`Визуал аромата ${aroma.name}`}
                        className="h-48 w-full"
                      /> */}
                      <div className="mt-5">
                        <span className="rounded-full bg-brand-soft/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-deep dark:bg-brand-soft/40">
                          Топ аромат
                        </span>
                        <h3 className="mt-4 text-2xl font-semibold text-foreground">
                          {aroma.name}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">
                          {aroma.description}
                        </p>
                      </div>
                    </article>
                  </MotionReveal>
                );
              })}
            </div>

            <MotionReveal className="mt-8">
              <div className="rounded-[2rem] border border-line bg-panel-strong/80 p-6">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
                      В наличии сейчас
                    </p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      Актуальные позиции, которые можно быстро включить в подборку
                      под ваш объект.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {availableNow.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-brand/15 bg-white/70 px-4 py-2 text-sm font-medium text-foreground dark:bg-white/5"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </MotionReveal>

            <div className="mt-10 grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="flex flex-wrap gap-3">
                  {aromaCategories.map((category) => {
                    const active = category.id === activeCategory;

                    return (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => setActiveCategory(category.id)}
                        className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                          active
                            ? 'bg-brand text-white shadow-glow'
                            : 'border border-line bg-white/70 text-muted-foreground hover:border-brand/30 hover:text-foreground dark:bg-white/5'
                        }`}
                      >
                        {category.label}
                      </button>
                    );
                  })}
                </div>

                <MotionReveal className="mt-6">
                  <div className="surface-panel p-6">
                    <div className="flex items-center gap-3">
                      <span className="rounded-2xl bg-brand-soft/80 p-3 text-brand dark:bg-brand-soft/40">
                        <Tag className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {currentCategory.label}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Примеры ароматов из расширенного каталога
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {currentCategory.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-line bg-white/75 px-4 py-2 text-sm text-foreground dark:bg-white/5"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <p className="mt-6 rounded-3xl border border-brand/15 bg-brand-soft/50 px-4 py-4 text-sm leading-7 text-muted-foreground dark:bg-brand-soft/20">
                      Всего доступно около 50 ароматов. Если нужного варианта нет
                      в наличии, мы предложим доступные альтернативы и сообщим о
                      ближайшем поступлении.
                    </p>
                  </div>
                </MotionReveal>
              </div>

              <MotionReveal>
                <div className="surface-panel p-6">
                  <div className="flex items-center gap-3">
                    <span className="rounded-2xl bg-brand-soft/80 p-3 text-brand dark:bg-brand-soft/40">
                      <Sparkles className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        Ароматы в презентации
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Подбираем композиции под впечатление, а не просто по
                        названию.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl border border-line bg-white/65 p-4 dark:bg-white/5">
                      <p className="text-sm font-semibold text-foreground">
                        Для деловых и статусных пространств
                      </p>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">
                        Часто рекомендуем свежие, чистые или древесные композиции
                        для офисов, ресепшн и бутиков.
                      </p>
                    </div>
                    <div className="rounded-3xl border border-line bg-white/65 p-4 dark:bg-white/5">
                      <p className="text-sm font-semibold text-foreground">
                        Для теплой и уютной атмосферы
                      </p>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">
                        Подбираем мягкие фруктовые и гурманские оттенки для студий,
                        салонов и небольших клиентских зон.
                      </p>
                    </div>
                  </div>
                </div>
              </MotionReveal>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
              className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-3"
            >
              {aromaCards.map((aroma) => (
                <motion.article
                  key={aroma.name}
                  variants={{
                    hidden: { opacity: 0, y: 22 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.55 }}
                  className="surface-panel overflow-hidden p-4 transition duration-300 hover:-translate-y-1 hover:shadow-glow"
                >
                  {/* <PlaceholderMedia
                    label={`Визуал ${aroma.name}`}
                    className="h-44 w-full"
                  /> */}

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <h3 className="text-2xl font-semibold text-foreground">
                      {aroma.name}
                    </h3>
                    <span className="rounded-full bg-brand-soft/80 px-3 py-1 text-xs font-semibold text-brand-deep dark:bg-brand-soft/40">
                      {aroma.accent}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {aroma.description}
                  </p>

                  <div className="mt-5 rounded-3xl border border-line bg-white/70 p-4 dark:bg-white/5">
                    <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <WandSparkles className="h-4 w-4 text-brand" />
                      Лучше подходит для
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {aroma.bestFor.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-line px-3 py-1 text-xs text-muted-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
