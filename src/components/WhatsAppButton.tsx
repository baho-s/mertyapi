import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geçin"
      className="fixed bottom-5 right-5 z-20 inline-flex items-center gap-2 rounded bg-black px-3 py-2 text-xs font-semibold uppercase tracking-wider text-white no-underline shadow-lg transition-all duration-200 hover:shadow-2xl hover:-translate-y-1"
    >
      <MessageCircle className="h-4 w-4 text-[#25D366]" />
      <span className="text-[#25D366]">WhatsApp</span>
    </a>
  );
};
