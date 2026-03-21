import { FormEvent, useState } from 'react';
import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { cities, email, phones, whatsappLinks } from '../data/content';
import { MotionReveal } from './MotionReveal';
import { SectionHeading } from './SectionHeading';

type FormState = {
  name: string;
  city: string;
  phone: string;
};

const initialFormState: FormState = {
  name: '',
  city: '',
  phone: '',
};

export function ContactSection() {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = encodeURIComponent(
      `Здравствуйте! Оставляю заявку на ароматизацию помещений Virenscent.\nИмя: ${formState.name}\nГород: ${formState.city}\nТелефон: ${formState.phone}`,
    );

    window.open(
      `https://wa.me/77075347519?text=${message}`,
      '_blank',
      'noopener,noreferrer',
    );
    setSubmitted(true);
    setFormState(initialFormState);
  };

  return (
    <section id="contact" className="scroll-mt-28 py-20 sm:py-24">
      <div className="section-shell">
        <div className="glass-panel overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <MotionReveal>
              <SectionHeading
                eyebrow="Контакты"
                title="Свяжитесь с нами, и мы подберем подходящий прибор и аромат под ваше пространство"
                description="Оставьте заявку, и мы поможем подобрать решение по площади, формату помещения и желаемой атмосфере. Также можно быстро написать нам в WhatsApp."
              />

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {phones.map((phone, index) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="surface-panel p-5 transition duration-300 hover:-translate-y-1 hover:border-brand/30"
                  >
                    <div className="flex items-center gap-3">
                      <span className="rounded-2xl bg-brand-soft/80 p-3 text-brand dark:bg-brand-soft/40">
                        <Phone className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{phone}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                          Телефон {index + 1}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}

                <a
                  href={`mailto:${email}`}
                  className="surface-panel p-5 transition duration-300 hover:-translate-y-1 hover:border-brand/30"
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded-2xl bg-brand-soft/80 p-3 text-brand dark:bg-brand-soft/40">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{email}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                        Email
                      </p>
                    </div>
                  </div>
                </a>

                <div className="surface-panel p-5">
                  <div className="flex items-center gap-3">
                    <span className="rounded-2xl bg-brand-soft/80 p-3 text-brand dark:bg-brand-soft/40">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {cities.join(' • ')}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                        Города обслуживания
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-[2rem] border border-line bg-panel-strong/80 p-5">
                <div className="flex items-center gap-3">
                  <span className="rounded-2xl bg-brand-soft/80 p-3 text-brand dark:bg-brand-soft/40">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Быстрый контакт в WhatsApp
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Напишите на удобный номер, и мы поможем с подбором.
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={whatsappLinks[0]}
                    target="_blank"
                    rel="noreferrer"
                    className="button-secondary flex-1"
                  >
                    WhatsApp 1
                  </a>
                  <a
                    href={whatsappLinks[1]}
                    target="_blank"
                    rel="noreferrer"
                    className="button-secondary flex-1"
                  >
                    WhatsApp 2
                  </a>
                </div>
              </div>
            </MotionReveal>

            <MotionReveal delay={0.08}>
              <div className="surface-panel p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">
                  Оставить заявку
                </p>
                <h3 className="mt-4 font-display text-4xl text-foreground">
                  Заполните форму, и мы свяжемся с вами
                </h3>

                <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Имя
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={(event) =>
                        setFormState((prev) => ({ ...prev, name: event.target.value }))
                      }
                      className="input-field"
                      placeholder="Ваше имя"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="city"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Город
                    </label>
                    <input
                      id="city"
                      name="city"
                      required
                      value={formState.city}
                      onChange={(event) =>
                        setFormState((prev) => ({ ...prev, city: event.target.value }))
                      }
                      className="input-field"
                      placeholder="Астана, Алматы или Шымкент"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Номер телефона
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      required
                      value={formState.phone}
                      onChange={(event) =>
                        setFormState((prev) => ({ ...prev, phone: event.target.value }))
                      }
                      className="input-field"
                      placeholder="+7 ___ ___ __ __"
                    />
                  </div>

                  <button type="submit" className="button-primary w-full">
                    Оставить заявку
                    <Send className="h-4 w-4" />
                  </button>
                </form>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  После отправки откроется WhatsApp с готовым сообщением для
                  быстрой связи.
                </p>

                {submitted ? (
                  <div className="mt-4 rounded-3xl border border-brand/20 bg-brand-soft/60 px-4 py-4 text-sm text-brand-deep dark:bg-brand-soft/20 dark:text-brand-deep">
                    Заявка подготовлена. Откройте WhatsApp и отправьте сообщение —
                    мы свяжемся с вами для уточнения деталей.
                  </div>
                ) : null}
              </div>
            </MotionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
