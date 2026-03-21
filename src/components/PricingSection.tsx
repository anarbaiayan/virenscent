import { ArrowRight, Check, ChevronDown } from 'lucide-react';
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
          description="На мобильных сначала показываем ключевое: цену, покрытие и основные пункты тарифа. Остальное раскрывается по запросу."
          align="center"
        />

        <div className="mt-10 grid gap-5 xl:grid-cols-2 sm:mt-14 sm:gap-6">
          {pricingPlans.map((plan, index) => {
            const previewFeatures = plan.features.slice(0, 3);
            const extraFeatures = plan.features.slice(3);

            return (
              <MotionReveal key={plan.name} delay={index * 0.08}>
                <article
                  className={`surface-panel h-full p-5 sm:p-8 ${
                    index === 1 ? 'ring-1 ring-brand/25 shadow-glow' : ''
                  }`}
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
                        {plan.name}
                      </p>
                      <h3 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">
                        {plan.price}
                      </h3>
                      <p className="mt-2 text-sm font-medium text-foreground">в месяц</p>
                    </div>
                    <span className="w-fit rounded-full border border-line bg-white/70 px-4 py-2 text-sm text-muted-foreground dark:bg-white/5">
                      {plan.coverage}
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-6 text-muted-foreground sm:leading-7">
                    {plan.description}
                  </p>

                  <ul className="mt-6 hidden space-y-3 sm:mt-8 sm:block">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="mt-0.5 rounded-full bg-brand-soft/80 p-1 text-brand dark:bg-brand-soft/40">
                          <Check className="h-4 w-4" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 space-y-3 sm:hidden">
                    <ul className="space-y-3">
                      {previewFeatures.map((feature) => (
                        <li key={feature} className="flex gap-3 text-sm text-muted-foreground">
                          <span className="mt-0.5 rounded-full bg-brand-soft/80 p-1 text-brand dark:bg-brand-soft/40">
                            <Check className="h-4 w-4" />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {extraFeatures.length > 0 ? (
                      <details className="details-reset">
                        <summary className="flex cursor-pointer list-none items-center justify-between rounded-2xl border border-line px-4 py-3 text-sm font-semibold text-foreground">
                          Что входит ещё
                          <ChevronDown className="h-4 w-4 text-muted-foreground" />
                        </summary>
                        <ul className="mt-3 space-y-3">
                          {extraFeatures.map((feature) => (
                            <li
                              key={feature}
                              className="flex gap-3 text-sm text-muted-foreground"
                            >
                              <span className="mt-0.5 rounded-full bg-brand-soft/80 p-1 text-brand dark:bg-brand-soft/40">
                                <Check className="h-4 w-4" />
                              </span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </details>
                    ) : null}
                  </div>

                  <a href="#contact" className="button-primary mt-8 w-full">
                    Оставить заявку
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </article>
              </MotionReveal>
            );
          })}
        </div>

        <MotionReveal className="mt-6 sm:mt-8">
          <div className="rounded-[2rem] border border-brand/15 bg-brand-soft/55 px-5 py-4 text-center text-sm leading-6 text-muted-foreground sm:px-6 sm:py-5 dark:bg-brand-soft/20">
            Возможны специальные условия при долгосрочном сотрудничестве.
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
