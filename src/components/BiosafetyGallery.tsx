import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { biosafetyContent } from '../data/content';

export const BiosafetyGallery: React.FC = () => {
  return (
    <section id="biosseguranca" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute -top-24 right-10 w-96 h-96 bg-brand-sand/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-sand/80 text-brand-goldDark text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{biosafetyContent.badge}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-espresso">
            {biosafetyContent.title}
          </h2>

          <p className="text-brand-muted text-base sm:text-lg font-light leading-relaxed">
            {biosafetyContent.subtitle}
          </p>
        </div>

        {/* Real Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {biosafetyContent.items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group bg-brand-surface rounded-3xl overflow-hidden border border-brand-sand shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Real Photo with Tag */}
                  <div className="relative aspect-square overflow-hidden bg-brand-sand">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-gold text-brand-espresso shadow">
                      {item.tag}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <p className="text-xs text-brand-goldLight font-medium">{item.subtitle}</p>
                      <h3 className="font-serif text-base font-bold leading-tight">{item.title}</h3>
                    </div>
                  </div>

                  {/* Body description */}
                  <div className="p-5 space-y-2">
                    <p className="text-xs text-brand-muted font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Footer Badge */}
                <div className="p-4 pt-0">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Conformidade com Normas Sanitárias</span>
                  </div>
                </div>

              </motion.div>
            ))}
        </div>

        {/* Highlight Trust Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl glass-panel border border-brand-gold/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-luxury">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl gold-gradient-bg text-white flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-brand-espresso">
                Seu kit é aberto exclusivamente na sua frente
              </h4>
              <p className="text-xs text-brand-muted font-light">
                Transparência total desde a primeira consulta. Você acompanha cada etapa da nossa biossegurança.
              </p>
            </div>
          </div>

          <a
            href="https://online.maapp.com.br/KethlynBeauty"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-full text-xs font-semibold text-white gold-gradient-bg shadow hover:shadow-gold-glow transition-all"
          >
            Agendar com Segurança
          </a>
        </div>

      </div>
    </section>
  );
};
