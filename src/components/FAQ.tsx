import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { faqData, siteConfig } from '../data/content';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-sand/70 text-brand-goldDark text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Dúvidas Frequentes</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-espresso">
            Tudo o que você precisa saber antes de agendar
          </h2>

          <p className="text-brand-muted text-base font-light">
            Transparência e clareza para que você tenha a melhor experiência possível.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="bg-white rounded-2xl border border-brand-sand/80 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-brand-surface/50 transition-colors"
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-brand-espresso">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center bg-brand-surface text-brand-goldDark transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-brand-gold text-white' : ''
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
                      <div className="px-5 sm:px-6 pb-6 pt-2 text-sm text-brand-muted font-light leading-relaxed border-t border-brand-sand/40">
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
        <div className="mt-12 text-center p-6 rounded-3xl glass-panel border border-brand-gold/30">
          <p className="text-sm text-brand-espresso font-medium mb-3">
            Ainda tem alguma dúvida específica sobre o seu tipo de fio ou olhar?
          </p>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-brand-goldDark hover:text-brand-espresso underline underline-offset-4 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fale diretamente com a Kethlyn no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
