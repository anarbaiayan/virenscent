import { MessageCircle } from 'lucide-react';
import { whatsappLinks } from '../data/content';

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLinks[0]}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/55 bg-brand text-sm font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:bg-brand/90 sm:bottom-5 sm:right-5 sm:h-auto sm:w-auto sm:gap-3 sm:px-5 sm:py-3 dark:border-white/10"
      aria-label="Связаться в WhatsApp"
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
        <MessageCircle className="h-5 w-5" />
      </span>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
