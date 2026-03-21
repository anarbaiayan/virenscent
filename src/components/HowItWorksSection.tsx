import { motion } from 'framer-motion';
import { CalendarSync, ScanSearch, SendHorizontal, Settings2 } from 'lucide-react';
import { steps } from '../data/content';
import { SectionHeading } from './SectionHeading';

const stepIcons = [SendHorizontal, ScanSearch, Settings2, CalendarSync];

export function HowItWorksSection() {
  return (
    <section id="process" className="scroll-mt-28 py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Как это работает"
          title="Простой процесс с акцентом на сервис и стабильный результат"
          description="Мы выстраиваем понятный цикл обслуживания: от первого обращения до регулярных визитов специалиста. Всё организовано так, чтобы ароматизация работала спокойно и без лишней нагрузки на клиента."
          align="center"
        />

        <div className="relative mt-14">
          <div className="absolute left-6 right-6 top-10 hidden h-px bg-gradient-to-r from-brand/0 via-brand/30 to-brand/0 lg:block" />
          <div className="grid gap-5 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = stepIcons[index];

              return (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.65, delay: index * 0.08 }}
                  className="surface-panel relative p-6"
                >
                  <span className="absolute right-6 top-6 text-sm font-semibold text-brand/45">
                    0{index + 1}
                  </span>
                  <span className="inline-flex rounded-2xl bg-brand-soft/80 p-3 text-brand dark:bg-brand-soft/40">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {step.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
