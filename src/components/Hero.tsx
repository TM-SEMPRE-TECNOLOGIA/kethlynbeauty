import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { siteConfig } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 bg-[#FDFBF9] overflow-hidden">
      {/* Editorial ambient radial glows */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#E2C7B8]/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#DFC4A2]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Clean CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-7 text-center lg:text-left"
          >
            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#1B1514] leading-[1.12]">
              Realce a beleza <span className="font-serif italic font-semibold text-[#A6845B]">única do seu olhar</span> com sofisticação
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#6E6764] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Especialista em Extensões de Cílios com retenção superior a 30 dias, Nanopigmentação e Visagismo Facial. Desperte impecável e pronta todos os dias.
            </p>

            {/* Clean Direct Luxury CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={siteConfig.maappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#1B1514] hover:bg-[#A6845B] shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 group"
              >
                <Calendar className="w-4 h-4 text-[#DFC4A2] group-hover:rotate-12 transition-transform" />
                <span>Agendar Horário</span>
                <ArrowRight className="w-4 h-4 text-[#DFC4A2] group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-[#1B1514] bg-white border border-[#C5A880]/60 hover:bg-[#FAF7F4] hover:border-[#1B1514] transition-all duration-300 shadow-sm active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>

            {/* Refined Trust Strip */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#6E6764]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                <span className="font-medium text-[#1B1514]">Isolamento Cirúrgico</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                <span className="font-medium text-[#1B1514]">Retenção até 30 Dias</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                <span className="font-medium text-[#1B1514]">Visagismo Facial</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Campaign Portrait Object */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative flex flex-col items-center lg:items-start"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[470px]">
              
              {/* Google Social Proof Badge (Top Right Offset) */}
              <div className="absolute -top-4 right-2 sm:right-4 z-20 inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#140F0E] text-white shadow-xl border border-[#C5A880]/40">
                <span className="text-[#DFC4A2] text-xs font-bold">★ 5.0</span>
                <span className="text-white/40 text-xs">·</span>
                <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-white/90">
                  Google
                </span>
              </div>

              {/* Photo Container: Pure Editorial Object (+15-20% size, subtle shadow, rounded-3xl) */}
              <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-2xl bg-[#FAF7F4] border border-[#EFE8E2] group aspect-[4/5]">
                <img
                  src="/assets/dona.jpg"
                  alt="Kethlyn Torris - Master Lash Designer"
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-700"
                />
              </div>

              {/* Identification Signature Plate (Below Photo, Aligned Left) */}
              <div className="mt-4 sm:mt-5 text-center lg:text-left space-y-1">
                <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-[#1B1514]">
                  Kethlyn Torris
                </h3>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-semibold text-[#A6845B]">
                  Master Lash Designer & Especialista Facial
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};


