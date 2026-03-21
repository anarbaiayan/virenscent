import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { faqItems } from '../data/content';
import { MotionReveal } from './MotionReveal';
import { SectionHeading } from './SectionHeading';

export function FaqSection() {
  const [openItem, setOpenItem] = useState<number>(0);

  return (
    <section id="faq" className="scroll-mt-28 py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <MotionReveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Частые вопросы о подключении, сервисе и подборе аромата"
              description="Ниже собрали ответы на ключевые вопросы о сроках, регулярном обслуживании, смене аромата и размещении оборудования. Это помогает заранее понять формат работы Virenscent."
            />
          </MotionReveal>

          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const opened = openItem === index;

              return (
                <MotionReveal key={item.question} delay={index * 0.04}>
                  <article className="surface-panel overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenItem(opened ? -1 : index)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="text-base font-semibold text-foreground">
                        {item.question}
                      </span>
                      <span
                        className={`rounded-full border border-line p-2 transition ${
                          opened ? 'rotate-180 text-brand' : 'text-muted-foreground'
                        }`}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {opened ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 text-sm leading-7 text-muted-foreground">
                            {item.answer}
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
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
