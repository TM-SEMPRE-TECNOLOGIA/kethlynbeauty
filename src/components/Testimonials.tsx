import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle, Quote } from 'lucide-react';
import { testimonialsData, siteConfig } from '../data/content';

export const Testimonials: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-24 lg:py-32 bg-white relative overflow-hidden border-t border-[#EFE8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#A6845B]">
              Avaliações & Experiências
            </p>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1B1514] tracking-tight">
            O que nossas clientes dizem sobre a <span className="font-serif italic text-[#A6845B]">experiência</span>
          </h2>

          <div className="inline-flex items-center gap-2.5 p-2 px-5 rounded-full bg-[#1B1514] text-white shadow-sm">
            <div className="flex text-[#DFC4A2] text-sm">
              ★★★★★
            </div>
            <span className="text-xs font-semibold text-white/90">
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
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="bg-[#FAF7F4] p-6 rounded-2xl border border-[#EFE8E2] hover:border-[#C5A880]/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#EFE8E2]">
                  <div className="flex items-center gap-1 text-[#A6845B]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#A6845B] text-[#A6845B]" />
                    ))}
                  </div>
                  <Quote className="w-4 h-4 text-[#A6845B]/40" />
                </div>

                <p className="text-xs sm:text-sm text-[#6E6764] font-light leading-relaxed mb-6 italic">
                  "{t.comment}"
                </p>
              </div>

              {/* Client Profile */}
              <div className="pt-4 border-t border-[#EFE8E2] flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#C5A880] shrink-0">
                  {t.avatarUrl ? (
                    <img
                      src={t.avatarUrl}
                      alt={t.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#1B1514] text-[#DFC4A2] font-serif font-bold text-xs flex items-center justify-center">
                      {t.name[0]}
                    </div>
                  )}
                </div>

                <div>
                  <p className="text-xs font-bold text-[#1B1514]">{t.name}</p>
                  <p className="text-[10px] text-[#A6845B] font-medium">{t.service}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram Callout */}
        <div className="mt-16 text-center">
          <p className="text-xs sm:text-sm text-[#6E6764] mb-4 font-light">
            Acompanhe transformações diárias e feedbacks em tempo real no nosso perfil oficial:
          </p>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#1B1514] bg-[#FAF7F4] hover:bg-[#EFE8E2] border border-[#EFE8E2] transition-all"
          >
            <MessageCircle className="w-4 h-4 text-[#A6845B]" />
            <span>Siga {siteConfig.instagramHandle} no Instagram</span>
          </a>
        </div>

      </div>
    </section>
  );
};

