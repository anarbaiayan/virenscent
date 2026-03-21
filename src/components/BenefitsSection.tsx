import {
  CheckCircle2,
  CircleDollarSign,
  Droplets,
  Layers3,
  RefreshCw,
  Ruler,
  Sparkles,
  Building2,
} from 'lucide-react';
import { benefits } from '../data/content';
import { MotionReveal } from './MotionReveal';
import { SectionHeading } from './SectionHeading';

const benefitIcons = [
  CheckCircle2,
  RefreshCw,
  Droplets,
  Sparkles,
  Ruler,
  Layers3,
  CircleDollarSign,
  Building2,
];

export function BenefitsSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Преимущества"
          title="Решение, в котором сервис так же важен, как и сам аромат"
          description="Мы делаем ароматизацию удобной: без покупки оборудования, без самостоятельного ухода и без сложных процессов. Пространство получает атмосферу, а вы — понятный и регулярный сервис."
          align="center"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {benefits.map((item, index) => {
            const Icon = benefitIcons[index];

            return (
              <MotionReveal key={item} delay={index * 0.05}>
                <article className="surface-panel h-full p-6 transition duration-300 hover:-translate-y-1 hover:shadow-glow">
                  <span className="inline-flex rounded-2xl bg-brand-soft/80 p-3 text-brand dark:bg-brand-soft/40">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-5 text-base font-semibold leading-7 text-foreground">
                    {item}
                  </p>
                </article>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
