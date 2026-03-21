import { MessageCircle } from 'lucide-react';
import { whatsappLinks } from '../data/content';

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLinks[0]}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full border border-white/55 bg-brand px-5 py-3 text-sm font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:bg-brand/90 dark:border-white/10"
      aria-label="Связаться в WhatsApp"
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
        <MessageCircle className="h-5 w-5" />
      </span>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
