import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award, CheckCircle } from 'lucide-react';
import { trajectoryContent } from '../data/content';

export const Trajectory: React.FC = () => {
  return (
    <section id="trajetoria" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-goldLight/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Showcase Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-brand-sand">
                <img
                  src={trajectoryContent.image}
                  alt="Kethlyn Torris no estúdio"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Quote Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 glass-panel p-4 rounded-2xl shadow-luxury border border-brand-gold/40 max-w-[240px]">
                <div className="flex items-center gap-2 text-brand-goldDark mb-1">
                  <Award className="w-4 h-4" />
                  <span className="text-[11px] font-bold uppercase tracking-wider">Especialização</span>
                </div>
                <p className="text-xs text-brand-espresso italic">
                  "O olhar perfeito é aquele que valoriza quem você é, sem perder sua naturalidade."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Storytelling Text & Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-sand/60 text-brand-goldDark text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{trajectoryContent.badge}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-espresso leading-tight">
              {trajectoryContent.title}
            </h2>

            <div className="space-y-4 text-brand-muted text-base sm:text-lg leading-relaxed font-light">
              <p>{trajectoryContent.p1}</p>
              <p>{trajectoryContent.p2}</p>
              <p>{trajectoryContent.p3}</p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {trajectoryContent.highlights.map((h) => (
                <div
                  key={h.title}
                  className="glass-panel p-4 rounded-2xl border border-brand-sand hover:border-brand-gold/40 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-brand-gold/15 text-brand-goldDark flex items-center justify-center mb-3">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif font-bold text-sm text-brand-espresso mb-1">
                    {h.title}
                  </h3>
                  <p className="text-xs text-brand-muted font-light leading-relaxed">
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
