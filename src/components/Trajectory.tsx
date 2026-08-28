import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';
import { trajectoryContent } from '../data/content';

export const Trajectory: React.FC = () => {
  return (
    <section id="trajetoria" className="py-24 lg:py-32 bg-[#FDFBF9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Showcase: Editorial Passe-Partout Frame */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Outer hairline border offset */}
              <div className="absolute -inset-3 rounded-[32px] border border-[#C5A880]/30 transform rotate-1 -z-10" />

              {/* Main Photo Card */}
              <div className="rounded-[28px] overflow-hidden shadow-xl border border-[#EFE8E2] bg-white p-3">
                <div className="rounded-[20px] overflow-hidden aspect-[4/5] bg-[#EFE8E2]">
                  <img
                    src={trajectoryContent.image}
                    alt="Kethlyn Torris no estúdio"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Authoritative Quote Badge */}
              <div className="absolute -bottom-6 -right-2 sm:-right-4 bg-[#140F0E] text-white p-5 rounded-2xl shadow-2xl border border-[#C5A880]/40 max-w-[260px]">
                <div className="flex items-center gap-2 text-[#DFC4A2] mb-1.5">
                  <Award className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Filosofia</span>
                </div>
                <p className="text-xs text-white/90 font-serif italic leading-relaxed">
                  "O olhar perfeito valoriza a sua essência com naturalidade e elegância."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Storytelling Text & Values */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#A6845B]">
                Sobre a Especialista
              </p>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1B1514] tracking-tight leading-tight">
              {trajectoryContent.title}
            </h2>

            <div className="space-y-4 text-[#6E6764] text-base leading-relaxed font-light">
              <p>{trajectoryContent.p1}</p>
              <p>{trajectoryContent.p2}</p>
              <p>{trajectoryContent.p3}</p>
            </div>

            {/* Highlights Grid (Clean Editorial Strip) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {trajectoryContent.highlights.map((h) => (
                <div
                  key={h.title}
                  className="p-5 rounded-xl bg-white border border-[#EFE8E2] hover:border-[#C5A880]/60 transition-colors shadow-sm"
                >
                  <div className="flex items-center gap-2 text-[#A6845B] mb-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <h3 className="font-serif font-bold text-sm text-[#1B1514]">
                      {h.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#6E6764] font-light leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

