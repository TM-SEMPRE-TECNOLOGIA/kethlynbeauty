import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Feather, Sparkles, Clock, Smile, Sparkle } from 'lucide-react';

export const MethodDifferentials: React.FC = () => {
  const differentials = [
    {
      icon: Feather,
      title: "Leveza Incomparável",
      desc: "Fios sintéticos de seda ultrafinos que não pesam na pálpebra e não causam desconforto no dia a dia.",
    },
    {
      icon: ShieldCheck,
      title: "Isolamento Cirúrgico",
      desc: "Respeito absoluto ao ciclo de crescimento dos seus fios naturais, garantindo zero danos e saúde total.",
    },
    {
      icon: Sparkles,
      title: "Visagismo Personalizado",
      desc: "Estudo da simetria dos seus olhos para escolher a curvatura, tamanho e mapeamento (mapping) perfeitos.",
    },
    {
      icon: Clock,
      title: "Retenção Máxima",
      desc: "Adesivos de padrão internacional e protocolo de acoplagem que mantém os cílios intactos por muito mais tempo.",
    },
    {
      icon: Smile,
      title: "Conforto & Bem-Estar",
      desc: "Maca ultra acolchoada com travesseiro anatômico para você relaxar durante todo o procedimento.",
    },
    {
      icon: Sparkle,
      title: "Praticidade Diária",
      desc: "Acorde todos os dias com olhar renovado e maquiagem pronta, economizando tempo na sua rotina.",
    },
  ];

  return (
    <section id="diferenciais" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-sand/70 text-brand-goldDark text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Nosso Padrão de Excelência</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-espresso">
            Por que confiar seu olhar na Kethlyn Beauty?
          </h2>

          <p className="text-brand-muted text-base sm:text-lg font-light leading-relaxed">
            Aqui o seu olhar é tratado como uma obra de arte única. Conheça os pilares que tornam o nosso método referência em Caieiras.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-panel p-8 rounded-3xl border border-brand-sand hover:border-brand-gold/50 shadow-luxury hover:shadow-luxury-hover hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-gold/15 text-brand-goldDark flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-espresso mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-muted font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
