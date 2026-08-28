import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { biosafetyContent, siteConfig } from '../data/content';

export const BiosafetyGallery: React.FC = () => {
  return (
    <section id="biosseguranca" className="py-24 lg:py-32 bg-white relative overflow-hidden border-t border-[#EFE8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#A6845B]">
              Biossegurança Hospitalar
            </p>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1B1514] tracking-tight">
            A sua saúde e segurança em <span className="font-serif italic text-[#A6845B]">primeiro lugar</span>
          </h2>

          <p className="text-[#6E6764] text-base sm:text-lg font-light leading-relaxed">
            {biosafetyContent.subtitle}
          </p>
        </div>

        {/* Real Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {biosafetyContent.items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="bg-[#FAF7F4] rounded-2xl overflow-hidden border border-[#EFE8E2] hover:border-[#C5A880]/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo with Tag */}
                <div className="relative aspect-square overflow-hidden bg-[#EFE8E2]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#140F0E]/70 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#1B1514] text-[#DFC4A2] border border-[#C5A880]/30 shadow">
                    {item.tag}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-[10px] text-[#DFC4A2] font-semibold uppercase tracking-wider">{item.subtitle}</p>
                    <h3 className="font-serif text-base font-bold leading-tight">{item.title}</h3>
                  </div>
                </div>

                {/* Body description */}
                <div className="p-5">
                  <p className="text-xs text-[#6E6764] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Footer Badge */}
              <div className="p-5 pt-0">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#1B1514] bg-white px-3 py-2 rounded-xl border border-[#EFE8E2]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Protocolo Rigoroso ANVISA</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Highlight Trust Bar (High-End Dark Strip) */}
        <div className="mt-14 p-8 rounded-2xl bg-[#140F0E] text-white border border-[#C5A880]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-white/10 text-[#DFC4A2] flex items-center justify-center shrink-0 border border-[#C5A880]/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-white">
                Seu kit é aberto exclusivamente na sua presença
              </h4>
              <p className="text-xs text-white/60 font-light mt-0.5">
                Transparência total desde o primeiro momento. Você acompanha cada etapa da nossa biossegurança.
              </p>
            </div>
          </div>

          <a
            href={siteConfig.maappBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#140F0E] bg-[#DFC4A2] hover:bg-white transition-all shadow active:scale-95"
          >
            <span>Agendar com Segurança</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

