import { Check, LayoutPanelTop, MapPinned, Ruler } from 'lucide-react';
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
          description="Мы предлагаем аккуратные, современные устройства под малые и большие пространства. Каждый прибор устанавливается с учетом площади, сценария использования и желаемой интенсивности аромата."
        />

        <div className="mt-14 grid gap-6 xl:grid-cols-2">
          {devices.map((device, index) => (
            <MotionReveal key={device.name} delay={index * 0.08}>
              <article className="surface-panel overflow-hidden p-5 sm:p-6">
                <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                  <PlaceholderMedia
                    label={`Фото устройства ${device.name}`}
                    className="h-[320px] w-full"
                  />

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-brand-soft/80 px-4 py-2 text-sm font-semibold text-brand-deep dark:bg-brand-soft/40">
                        {device.coverage}
                      </span>
                      <span className="rounded-full border border-line px-4 py-2 text-sm text-muted-foreground">
                        {device.name}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-4xl text-foreground">
                      {device.name}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      {device.description}
                    </p>
{/* 
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-3xl border border-line bg-white/65 p-4 dark:bg-white/5">
                        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                          <Ruler className="h-4 w-4 text-brand" />
                          Варианты размещения
                        </div>
                        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                          {device.placements.map((placement) => (
                            <li key={placement} className="flex gap-2">
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                              <span>{placement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-3xl border border-line bg-white/65 p-4 dark:bg-white/5">
                        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                          <MapPinned className="h-4 w-4 text-brand" />
                          Где особенно уместен
                        </div>
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
                      </div>
                    </div> */}

                    <div className="mt-6 rounded-3xl border border-line bg-panel-strong/80 p-4">
                      <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        <LayoutPanelTop className="h-4 w-4 text-brand" />
                        Преимущества решения
                      </div>
                      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                        {device.benefits.map((benefit) => (
                          <li key={benefit} className="flex gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
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
