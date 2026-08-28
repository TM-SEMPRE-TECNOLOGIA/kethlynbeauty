import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle, Quote, CheckCircle } from 'lucide-react';
import { testimonialsData, siteConfig } from '../data/content';

export const Testimonials: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-20 lg:py-28 bg-brand-surface/80 relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-rosegold/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-sand/70 text-brand-goldDark text-xs font-semibold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-brand-goldDark" />
            <span>Depoimentos & Avaliações</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-espresso">
            O que nossas clientes dizem sobre a experiência
          </h2>

          <div className="inline-flex items-center gap-2.5 p-2 px-5 rounded-full bg-white shadow-sm border border-brand-sand">
            {/* Google G logo & stars */}
            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center font-bold text-xs text-blue-600 shadow-sm border border-gray-100">
              G
            </div>
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-brand-espresso">
              Nota 5.0 no Google • 100% de satisfação
            </span>
          </div>
        </div>

        {/* Testimonials Grid with Client Avatars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white p-6 rounded-3xl border border-brand-sand/80 shadow-luxury hover:shadow-luxury-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-[11px] font-bold text-amber-600 ml-1">5.0</span>
                  </div>
                  <Quote className="w-5 h-5 text-brand-sand" />
                </div>

                <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed mb-6 italic">
                  "{t.comment}"
                </p>
              </div>

              {/* Client Profile Card */}
              <div className="pt-4 border-t border-brand-sand/60">
                <div className="flex items-center gap-3">
                  {/* Photo Avatar */}
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-brand-gold shrink-0 shadow-sm">
                    {t.avatarUrl ? (
                      <img
                        src={t.avatarUrl}
                        alt={t.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full gold-gradient-bg text-white font-serif font-bold text-xs flex items-center justify-center">
                        {t.name[0]}
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-1">
                      <p className="text-xs font-bold text-brand-espresso">{t.name}</p>
                      <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0" />
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-[10px] text-brand-goldDark font-medium">{t.service}</p>
                      <span className="text-[9px] text-brand-muted">• Google</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram Social Callout */}
        <div className="mt-16 text-center">
          <p className="text-sm text-brand-muted mb-4 font-light">
            Quer acompanhar mais antes e depois e feedbacks em tempo real?
          </p>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-brand-espresso bg-white border border-brand-sand hover:border-brand-gold shadow-sm hover:scale-105 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-pink-600" />
            <span>Siga {siteConfig.instagramHandle} no Instagram</span>
          </a>
        </div>

      </div>
    </section>
  );
};
