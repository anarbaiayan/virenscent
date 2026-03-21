import {
  Armchair,
  Building,
  Building2,
  Coffee,
  HeartPulse,
  House,
  MonitorSmartphone,
  ShoppingBag,
  Sparkles,
  Store,
  Tv2,
} from 'lucide-react';
import { spaces } from '../data/content';
import { MotionReveal } from './MotionReveal';
import { SectionHeading } from './SectionHeading';

const spaceIcons = [
  Armchair,
  House,
  Building2,
  Sparkles,
  ShoppingBag,
  Store,
  HeartPulse,
  MonitorSmartphone,
  Coffee,
  Building,
  Tv2,
];

export function SpacesSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Подходит для"
          title="Сервис можно адаптировать почти под любое пространство"
          description="Интенсивность аромата и выбор композиции зависят от площади, назначения помещения и того впечатления, которое вы хотите создать для гостей, клиентов или жильцов."
          align="center"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {spaces.map((space, index) => {
            const Icon = spaceIcons[index];

            return (
              <MotionReveal key={space} delay={index * 0.04}>
                <article className="surface-panel flex items-center gap-4 p-5 transition duration-300 hover:-translate-y-1 hover:border-brand/30">
                  <span className="inline-flex rounded-2xl bg-brand-soft/80 p-3 text-brand dark:bg-brand-soft/40">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-foreground">{space}</span>
                </article>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
