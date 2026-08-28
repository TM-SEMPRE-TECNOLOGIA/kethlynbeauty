import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Feather, Sparkles, Clock, Smile, Sparkle, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/content';

export const MethodDifferentials: React.FC = () => {
  const differentials = [
    {
      number: "01",
      icon: Feather,
      title: "Leveza & Conforto Absoluto",
      desc: "Fios sintéticos de seda ultrafinos que não pesam na pálpebra e não causam desconforto no seu dia a dia.",
    },
    {
      number: "02",
      icon: ShieldCheck,
      title: "Isolamento Cirúrgico",
      desc: "Respeito rigoroso ao ciclo biológico de crescimento dos seus fios naturais, garantindo saúde e integridade total.",
    },
    {
      number: "03",
      icon: Sparkles,
      title: "Visagismo Personalizado",
      desc: "Mapeamento exclusivo para valorizar a simetria dos seus olhos e a harmonia do seu rosto.",
    },
    {
      number: "04",
      icon: Clock,
      title: "Retenção Superior (>30 Dias)",
      desc: "Adesivos de padrão internacional e protocolo de acoplagem que mantém os cílios intactos por muito mais tempo.",
    },
    {
      number: "05",
      icon: Smile,
      title: "Experiência de Conforto",
      desc: "Maca ultra acolchoada com travesseiro anatômico e ambiente acolhedor para você relaxar durante todo o procedimento.",
    },
    {
      number: "06",
      icon: Sparkle,
      title: "Praticidade na Rotina",
      desc: "Acorde todos os dias pronta com um olhar renovado, economizando tempo precioso na sua rotina diária.",
    },
  ];

  return (
    <section id="diferenciais" className="py-24 lg:py-32 bg-[#140F0E] text-white relative overflow-hidden border-y border-[#C5A880]/30">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#DFC4A2]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#DFC4A2]">
              Nosso Padrão de Excelência
            </p>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-tight">
            Por que confiar seu olhar na <span className="font-serif italic text-[#DFC4A2]">Kethlyn Beauty</span>?
          </h2>

          <p className="text-white/60 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Aqui o seu olhar é tratado como uma obra de arte única. Conheça os pilares que tornam o nosso método referência em Caieiras.
          </p>
        </div>

        {/* Editorial Numbered Grid with Hairline Dividers (Fabulux / High-End Magazine Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                className="group relative p-8 rounded-2xl bg-[#1B1514] border border-white/10 hover:border-[#C5A880]/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header: Number & Icon */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[#C5A880] tracking-wider">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/5 text-[#DFC4A2] flex items-center justify-center group-hover:bg-[#C5A880] group-hover:text-[#140F0E] transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-white mb-3 group-hover:text-[#DFC4A2] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-white/60 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-[11px] font-semibold tracking-wider text-[#C5A880] uppercase">
                  <span>Padrão Kethlyn Beauty</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Editorial Quote & Booking CTA */}
        <div className="mt-16 lg:mt-20 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-xl">
            <p className="font-serif text-lg sm:text-xl text-white/90 italic">
              "A beleza que você vê nos olhos é resultado de um processo meticuloso, seguro e feito sob medida para você."
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-semibold mt-2">
              Kethlyn Torris • Fundadora & Especialista Master
            </p>
          </div>

          <a
            href={siteConfig.maappBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-[#140F0E] bg-[#DFC4A2] hover:bg-white shadow-lg transition-all duration-300 active:scale-95 shrink-0"
          >
            <span>Garantir Meu Horário</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

