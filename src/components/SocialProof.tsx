import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Eye, Star, ShieldCheck, Clock, Check, ChevronRight } from 'lucide-react';

interface AnimatedNumberProps {
  value: number;
  prefix?: string;
  suffix?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, prefix = '', suffix = '' }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 25,
    stiffness: 90,
  });
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        const formatted = Intl.NumberFormat("pt-BR").format(Math.floor(latest));
        ref.current.textContent = `${prefix}${formatted}${suffix}`;
      }
    });
  }, [springValue, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
};

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({ children, className = '' }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-2xl border border-brand-sand/80 bg-white/90 backdrop-blur-xl p-6 transition-all duration-300 hover:border-brand-gold hover:shadow-luxury-hover transform hover:-translate-y-1.5 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-2xl z-0"
        style={{
          opacity,
          background: `radial-gradient(280px circle at ${position.x}px ${position.y}px, rgba(197, 168, 128, 0.22), rgba(223, 196, 162, 0.08), transparent 70%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export const SocialProof: React.FC = () => {
  return (
    <section className="py-14 sm:py-16 bg-brand-surface/70 border-y border-brand-sand/70 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute -top-28 -left-28 w-72 h-72 bg-brand-goldLight/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-28 -right-28 w-72 h-72 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-5 border-b border-brand-sand/80 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-goldDark mb-1">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              Excelência & Autoridade Comprovada
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-espresso">
              Resultados de Alto Padrão em Caieiras
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-brand-goldLight/60 text-xs font-semibold text-brand-espresso shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Studio Aberto • Atendimento Exclusivo
            </span>
          </div>
        </div>

        {/* Bento Grid 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          
          {/* Card 1: +2.000 Olhares */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.5 }}
          >
            <SpotlightCard className="group h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-brand-surface border border-brand-sand flex items-center justify-center text-brand-goldDark group-hover:scale-110 group-hover:bg-brand-espresso group-hover:text-brand-goldLight transition-all duration-300 shadow-sm">
                    <Eye className="w-5 h-5" />
                  </div>
                  
                  {/* Real Avatars Stack */}
                  <div className="flex -space-x-2 group-hover:space-x-1 transition-all duration-300">
                    <div className="w-7 h-7 rounded-full ring-2 ring-white bg-brand-gold flex items-center justify-center text-[10px] font-bold text-white shadow-sm overflow-hidden">
                      <span className="font-serif">KT</span>
                    </div>
                    <div className="w-7 h-7 rounded-full ring-2 ring-white bg-brand-goldLight flex items-center justify-center text-[10px] font-bold text-brand-espresso shadow-sm">
                      CR
                    </div>
                    <div className="w-7 h-7 rounded-full ring-2 ring-white bg-brand-espresso flex items-center justify-center text-[9px] font-bold text-brand-goldLight shadow-sm">
                      +2k
                    </div>
                  </div>
                </div>

                <div className="font-serif text-4xl sm:text-5xl font-bold text-brand-espresso mb-1 flex items-baseline tracking-tight">
                  <span className="text-brand-gold mr-0.5">+</span>
                  <AnimatedNumber value={2000} />
                </div>
                
                <div className="text-sm font-bold text-brand-espresso mb-1 group-hover:text-brand-goldDark transition-colors">
                  Olhares Transformados
                </div>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Mapeamento visagista exclusivo respeitando cada traço facial.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-brand-sand/80 flex items-center text-[11px] font-medium text-brand-goldDark gap-1 group-hover:translate-x-1 transition-transform">
                <span>Atendimento 100% personalizado</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 2: 5.0 Google */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <SpotlightCard className="group h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-brand-surface border border-brand-sand flex items-center justify-center text-brand-gold group-hover:scale-110 group-hover:bg-brand-espresso group-hover:text-brand-goldLight transition-all duration-300 shadow-sm">
                    <Star className="w-5 h-5 fill-brand-gold" />
                  </div>

                  {/* Google Verified Pill */}
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    <Check className="w-3 h-3 text-emerald-600" />
                    Google 5.0
                  </span>
                </div>

                <div className="font-serif text-4xl sm:text-5xl font-bold text-brand-espresso mb-1 flex items-baseline tracking-tight">
                  <span>5.0</span>
                  <div className="flex text-brand-gold text-sm ml-2.5 tracking-tight group-hover:scale-110 transition-transform origin-left">
                    ★★★★★
                  </div>
                </div>
                
                <div className="text-sm font-bold text-brand-espresso mb-1 group-hover:text-brand-goldDark transition-colors">
                  Avaliação Máxima
                </div>
                <p className="text-xs text-brand-muted leading-relaxed">
                  198 avaliações reais e espontâneas com satisfação unânime.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-brand-sand/80 flex items-center text-[11px] font-medium text-emerald-700 gap-1">
                <span>100% de recomendação no Google</span>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 3: 100% Biossegurança */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            <SpotlightCard className="group h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-brand-surface border border-brand-sand flex items-center justify-center text-brand-goldDark group-hover:scale-110 group-hover:bg-brand-espresso group-hover:text-brand-goldLight transition-all duration-300 shadow-sm">
                    <ShieldCheck className="w-5 h-5" />
                  </div>

                  {/* Autoclave Badge */}
                  <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-brand-goldDark bg-brand-surface px-2.5 py-1 rounded-full border border-brand-sand">
                    Autoclave
                  </span>
                </div>

                <div className="font-serif text-4xl sm:text-5xl font-bold text-brand-espresso mb-1 flex items-baseline tracking-tight">
                  <AnimatedNumber value={100} />
                  <span className="text-brand-gold text-3xl font-sans ml-0.5">%</span>
                </div>
                
                <div className="text-sm font-bold text-brand-espresso mb-1 group-hover:text-brand-goldDark transition-colors">
                  Protocolo Estéril
                </div>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Envelopes cirúrgicos individuais abertos na sua presença.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-brand-sand/80 flex items-center text-[11px] font-medium text-brand-goldDark gap-1">
                <span>Normas ANVISA rigorosas</span>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 4: +30 Dias Retenção */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            <SpotlightCard className="group h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-brand-surface border border-brand-sand flex items-center justify-center text-brand-goldDark group-hover:scale-110 group-hover:bg-brand-espresso group-hover:text-brand-goldLight transition-all duration-300 shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>

                  {/* Gauge Bar */}
                  <div className="w-16 bg-brand-sand h-2 rounded-full overflow-hidden p-0.5" title="Retenção estendida">
                    <div className="bg-gradient-to-r from-brand-gold to-brand-goldDark h-full rounded-full w-full" />
                  </div>
                </div>

                <div className="font-serif text-4xl sm:text-5xl font-bold text-brand-espresso mb-1 flex items-baseline tracking-tight">
                  <span className="text-brand-gold mr-0.5">+</span>
                  <AnimatedNumber value={30} />
                  <span className="text-xl font-sans ml-1 text-brand-goldDark">dias</span>
                </div>
                
                <div className="text-sm font-bold text-brand-espresso mb-1 group-hover:text-brand-goldDark transition-colors">
                  Alta Retenção
                </div>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Adesivos de nanotecnologia com isolamento milimétrico e leveza.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-brand-sand/80 flex items-center text-[11px] font-medium text-brand-goldDark gap-1">
                <span>Linha Mega & Tradicional</span>
              </div>
            </SpotlightCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
