import { Check, ChevronDown, LayoutPanelTop, MapPinned, Ruler } from 'lucide-react';
import { devices } from '../data/content';
import { MotionReveal } from './MotionReveal';
import { PlaceholderMedia } from './PlaceholderMedia';
import { SectionHeading } from './SectionHeading';

export function DevicesSection() {
  return (
    <section id="devices" className="scroll-mt-28 py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Оборудование"
          title="Два формата оборудования под разные типы помещений"
          description="Подбираем формат под площадь и сценарий использования, а на мобильном показываем только главное без перегруза длинными списками."
        />

        <div className="mt-10 grid gap-5 xl:grid-cols-2 sm:mt-14 sm:gap-6">
          {devices.map((device, index) => (
            <MotionReveal key={device.name} delay={index * 0.08}>
              <article className="surface-panel overflow-hidden p-4 sm:p-6">
                <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-6">
                  <PlaceholderMedia
                    label={`Фото устройства ${device.name}`}
                    className="h-[220px] w-full rounded-[1.35rem] sm:h-[320px]"
                  />

                  <div>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <span className="rounded-full bg-brand-soft/80 px-3 py-1.5 text-sm font-semibold text-brand-deep dark:bg-brand-soft/40">
                        {device.coverage}
                      </span>
                      <span className="rounded-full border border-line px-3 py-1.5 text-sm text-muted-foreground">
                        {device.name}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-3xl text-foreground sm:mt-5 sm:text-4xl">
                      {device.name}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground sm:mt-4 sm:leading-7">
                      {device.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2 sm:hidden">
                      {device.spaces.slice(0, 3).map((space) => (
                        <span
                          key={space}
                          className="rounded-full bg-brand-soft/60 px-3 py-1 text-xs font-medium text-brand-deep dark:bg-brand-soft/30"
                        >
                          {space}
                        </span>
                      ))}
                      {device.spaces.length > 3 ? (
                        <span className="rounded-full border border-line px-3 py-1 text-xs text-muted-foreground">
                          +{device.spaces.length - 3}
                        </span>
                      ) : null}
                    </div>

                    <div className="mt-5 rounded-3xl border border-line bg-panel-strong/80 p-4 sm:mt-6">
                      <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        <LayoutPanelTop className="h-4 w-4 text-brand" />
                        Преимущества решения
                      </div>

                      <ul className="mt-3 hidden space-y-2 text-sm text-muted-foreground sm:block">
                        {device.benefits.map((benefit) => (
                          <li key={benefit} className="flex gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>

                      <ul className="mt-3 space-y-2 text-sm text-muted-foreground sm:hidden">
                        {device.benefits.slice(0, 2).map((benefit) => (
                          <li key={benefit} className="flex gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>

                      {device.benefits.length > 2 ? (
                        <details className="details-reset mt-3 sm:hidden">
                          <summary className="flex cursor-pointer list-none items-center justify-between rounded-2xl border border-line px-4 py-3 text-sm font-semibold text-foreground">
                            Показать ещё преимущества
                            <ChevronDown className="h-4 w-4 text-muted-foreground" />
                          </summary>
                          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                            {device.benefits.slice(2).map((benefit) => (
                              <li key={benefit} className="flex gap-2">
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </details>
                      ) : null}
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <details className="details-reset rounded-3xl border border-line bg-white/65 p-4 dark:bg-white/5">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-foreground">
                          <span className="flex items-center gap-2">
                            <Ruler className="h-4 w-4 text-brand" />
                            Варианты размещения
                          </span>
                          <ChevronDown className="h-4 w-4 text-muted-foreground" />
                        </summary>
                        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                          {device.placements.map((placement) => (
                            <li key={placement} className="flex gap-2">
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                              <span>{placement}</span>
                            </li>
                          ))}
                        </ul>
                      </details>

                      <details className="details-reset rounded-3xl border border-line bg-white/65 p-4 dark:bg-white/5">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-foreground">
                          <span className="flex items-center gap-2">
                            <MapPinned className="h-4 w-4 text-brand" />
                            Где особенно уместен
                          </span>
                          <ChevronDown className="h-4 w-4 text-muted-foreground" />
                        </summary>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {device.spaces.map((space) => (
                            <span
                              key={space}
                              className="rounded-full bg-brand-soft/60 px-3 py-1 text-xs font-medium text-brand-deep dark:bg-brand-soft/30"
                            >
                              {space}
                            </span>
                          ))}
                        </div>
                      </details>
                    </div>
                  </div>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
