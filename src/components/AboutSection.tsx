import { CheckCircle2, Clock3, Droplets, ShieldCheck } from 'lucide-react';
import { MotionReveal } from './MotionReveal';
import { SectionHeading } from './SectionHeading';

const aboutItems = [
  {
    title: 'Устанавливаем сами',
    description:
      'Подбираем формат монтажа под помещение и аккуратно настраиваем прибор на месте.',
    icon: CheckCircle2,
  },
  {
    title: 'Сервис',
    description:
      'Приезжаем в фиксированный день, чтобы поддерживать стабильную подачу аромата.',
    icon: Clock3,
  },
  {
    title: 'Чистка и долив включены',
    description:
      'В стоимость уже входят уход за оборудованием и пополнение ароматической жидкости.',
    icon: Droplets,
  },
  {
    title: 'Помогаем выбрать аромат',
    description:
      'Если нужного варианта временно нет, покажем доступные альтернативы и сориентируем по поступлению.',
    icon: ShieldCheck,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28 py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <MotionReveal>
            <SectionHeading
              eyebrow="О сервисе"
              title="Свежая атмосфера без покупки оборудования и сложного обслуживания"
              description="Virenscent — это сервис аренды аромаприборов для коммерческих и частных пространств. Мы берем на себя установку, еженедельный уход и поддержку выбора аромата, чтобы помещение всегда ощущалось ухоженным, чистым и комфортным."
            />
          </MotionReveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {aboutItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <MotionReveal key={item.title} delay={index * 0.08}>
                  <article className="surface-panel h-full p-6 transition duration-300 hover:-translate-y-1 hover:shadow-glow">
                    <span className="inline-flex rounded-2xl bg-brand-soft/80 p-3 text-brand dark:bg-brand-soft/40">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
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
