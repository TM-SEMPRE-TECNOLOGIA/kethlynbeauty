import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { faqData, siteConfig } from '../data/content';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 lg:py-32 bg-[#FAF7F4] relative border-t border-[#EFE8E2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#A6845B]">
              Dúvidas & Esclarecimentos
            </p>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1B1514] tracking-tight">
            Perguntas <span className="font-serif italic text-[#A6845B]">Frequentes</span>
          </h2>

          <p className="text-[#6E6764] text-base font-light">
            Transparência e clareza para que você tenha a melhor experiência possível.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="bg-white rounded-xl border border-[#EFE8E2] overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-[#FAF7F4] transition-colors"
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-[#1B1514]">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center bg-[#FAF7F4] text-[#A6845B] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#1B1514] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-2 text-sm text-[#6E6764] font-light leading-relaxed border-t border-[#EFE8E2]/60">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Custom Question Box */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-[#C5A880]/30 shadow-sm">
          <p className="text-xs sm:text-sm text-[#1B1514] font-medium mb-2">
            Ainda tem alguma dúvida específica sobre o seu tipo de fio ou procedimento?
          </p>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#A6845B] hover:text-[#1B1514] transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Fale diretamente no WhatsApp →</span>
          </a>
        </div>

      </div>
    </section>
  );
};

