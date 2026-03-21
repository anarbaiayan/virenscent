import {
  Building2,
  FolderOpenDot,
  ImageIcon,
  MessageSquareQuote,
  Shapes,
} from 'lucide-react';
import { trustPlaceholders } from '../data/content';
import { MotionReveal } from './MotionReveal';
import { SectionHeading } from './SectionHeading';

const trustIcons = [
  MessageSquareQuote,
  Building2,
  FolderOpenDot,
  Shapes,
  ImageIcon,
];

export function TrustSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="glass-panel p-6 sm:p-8 lg:p-10">
          <SectionHeading
            eyebrow="Доверие и кейсы"
            title="Блок для будущих отзывов, объектов и примеров работ"
            description="Этот раздел можно позже наполнить отзывами клиентов, фотографиями реальных установок, кейсами и логотипами партнеров. Сейчас он подготовлен как аккуратный premium-placeholder для дальнейшего наполнения."
            align="center"
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {trustPlaceholders.map((item, index) => {
              const Icon = trustIcons[index];

              return (
                <MotionReveal key={item} delay={index * 0.05}>
                  <article className="placeholder-card flex h-full min-h-[220px] flex-col items-center justify-center gap-4 px-5 py-8">
                    <span className="rounded-full bg-white/80 p-4 text-brand shadow-soft dark:bg-white/10">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div className="space-y-2 text-center">
                      <p className="text-sm font-semibold text-foreground">{item}</p>
                      <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                        Photo placeholder
                      </p>
                    </div>
                  </article>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
