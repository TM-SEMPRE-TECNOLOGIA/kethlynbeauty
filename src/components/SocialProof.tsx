import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { Eye, Star, ShieldCheck, Clock } from 'lucide-react';

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

export const SocialProof: React.FC = () => {
  return (
    <section className="bg-[#140F0E] text-white py-12 lg:py-16 border-y border-[#C5A880]/30 relative overflow-hidden">
      {/* Subtle luxury ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Eyebrow Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 mb-8 border-b border-white/10 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#DFC4A2]">
              Autoridade & Excelência Comprovada
            </p>
          </div>
          <p className="text-xs text-white/60 font-light tracking-wide">
            Studio Especializado em Extensões & Sobrancelhas • Caieiras - SP
          </p>
        </div>

        {/* 4 Metrics Strip with Hairline Dividers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
          
          {/* Metric 1 */}
          <div className="flex flex-col items-center lg:items-start lg:px-8 first:pl-0">
            <div className="flex items-center gap-2 mb-2 text-[#C5A880]">
              <Eye className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-white/70">Atendimentos</span>
            </div>
            <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight flex items-baseline">
              <span className="text-[#C5A880] mr-0.5">+</span>
              <AnimatedNumber value={2000} />
            </div>
            <p className="text-xs text-white/80 font-medium mt-1">Olhares Transformados</p>
            <p className="text-[11px] text-white/50 font-light mt-0.5">Visagismo e design sob medida</p>
          </div>

          {/* Metric 2 */}
          <div className="flex flex-col items-center lg:items-start lg:px-8">
            <div className="flex items-center gap-2 mb-2 text-[#C5A880]">
              <Star className="w-4 h-4 fill-[#C5A880]" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-white/70">Google Reviews</span>
            </div>
            <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight flex items-baseline">
              <span>5.0</span>
              <span className="text-[#C5A880] text-xl font-sans ml-1.5">★★★★★</span>
            </div>
            <p className="text-xs text-white/80 font-medium mt-1">Avaliação Máxima</p>
            <p className="text-[11px] text-white/50 font-light mt-0.5">45 avaliações 5 estrelas</p>
          </div>


          {/* Metric 3 */}
          <div className="flex flex-col items-center lg:items-start lg:px-8">
            <div className="flex items-center gap-2 mb-2 text-[#C5A880]">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-white/70">Biossegurança</span>
            </div>
            <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight flex items-baseline">
              <AnimatedNumber value={100} />
              <span className="text-[#C5A880] text-3xl font-sans ml-0.5">%</span>
            </div>
            <p className="text-xs text-white/80 font-medium mt-1">Instrumental Esterilizado</p>
            <p className="text-[11px] text-white/50 font-light mt-0.5">Autoclave e kits cirúrgicos</p>
          </div>

          {/* Metric 4 */}
          <div className="flex flex-col items-center lg:items-start lg:px-8 last:pr-0">
            <div className="flex items-center gap-2 mb-2 text-[#C5A880]">
              <Clock className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-white/70">Fixação</span>
            </div>
            <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight flex items-baseline">
              <span className="text-[#C5A880] mr-0.5">+</span>
              <AnimatedNumber value={30} />
              <span className="text-lg font-sans ml-1 text-[#DFC4A2]">dias</span>
            </div>
            <p className="text-xs text-white/80 font-medium mt-1">Retenção Prolongada</p>
            <p className="text-[11px] text-white/50 font-light mt-0.5">Linha Tradicional & Mega</p>
          </div>

        </div>

      </div>
    </section>
  );
};

