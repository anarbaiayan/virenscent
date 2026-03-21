import { ArrowRight, Check } from 'lucide-react';
import { pricingPlans } from '../data/content';
import { MotionReveal } from './MotionReveal';
import { SectionHeading } from './SectionHeading';

export function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-28 py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Тарифы"
          title="Премиальный сервис с прозрачной ежемесячной стоимостью"
          description="В тариф уже включены аренда оборудования, установка и регулярное обслуживание. Вы выбираете нужный формат покрытия, а мы поддерживаем качество и стабильность аромата."
          align="center"
        />

        <div className="mt-14 grid gap-6 xl:grid-cols-2">
          {pricingPlans.map((plan, index) => (
            <MotionReveal key={plan.name} delay={index * 0.08}>
              <article
                className={`surface-panel h-full p-6 sm:p-8 ${
                  index === 1 ? 'ring-1 ring-brand/25 shadow-glow' : ''
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
                      {plan.name}
                    </p>
                    <h3 className="mt-3 font-display text-5xl text-foreground">
                      {plan.price}
                    </h3>
                    <p className="mt-3 text-sm font-medium text-foreground">
                      в месяц
                    </p>
                    <p className="mt-5 text-sm leading-7 text-muted-foreground">
                      {plan.description}
                    </p>
                  </div>
                  <span className="rounded-full border border-line bg-white/70 px-4 py-2 text-sm text-muted-foreground dark:bg-white/5">
                    {plan.coverage}
                  </span>
                </div>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-0.5 rounded-full bg-brand-soft/80 p-1 text-brand dark:bg-brand-soft/40">
                        <Check className="h-4 w-4" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href="#contact" className="button-primary mt-8 w-full">
                  Оставить заявку
                  <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            </MotionReveal>
          ))}
        </div>

        <MotionReveal className="mt-8">
          <div className="rounded-[2rem] border border-brand/15 bg-brand-soft/55 px-6 py-5 text-center text-sm text-muted-foreground dark:bg-brand-soft/20">
            Возможны специальные условия при долгосрочном сотрудничестве.
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
