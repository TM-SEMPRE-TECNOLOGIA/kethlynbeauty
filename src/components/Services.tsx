import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ArrowRight, Eye, MessageCircle } from 'lucide-react';
import { servicesData, siteConfig } from '../data/content';
import { Service } from '../types';
import { ServiceModal } from './ServiceModal';

type CategoryFilter = 'todos' | 'cilios-aplicacao' | 'cilios-mega' | 'cilios-manutencao' | 'sobrancelhas' | 'tratamentos';

export const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('todos');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const categories: { key: CategoryFilter; label: string }[] = [
    { key: 'todos', label: 'Todos os Procedimentos' },
    { key: 'cilios-aplicacao', label: 'Cílios (Aplicações)' },
    { key: 'cilios-mega', label: 'Linha Mega (>30 dias)' },
    { key: 'cilios-manutencao', label: 'Manutenções' },
    { key: 'sobrancelhas', label: 'Sobrancelhas & Nanopig.' },
    { key: 'tratamentos', label: 'Lifting & Cuidados' },
  ];

  const filteredServices = servicesData.filter((service) => {
    if (activeCategory === 'todos') return true;
    return service.category === activeCategory;
  });

  return (
    <section id="servicos" className="py-24 lg:py-32 bg-[#FAF7F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#A6845B]">
              Menu de Procedimentos & Valores
            </p>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1B1514] tracking-tight">
            Escolha o tratamento ideal para <span className="font-serif italic text-[#A6845B]">o seu olhar</span>
          </h2>

          <p className="text-[#6E6764] text-base sm:text-lg font-light leading-relaxed">
            Procedimentos realizados com materiais certificados, visagismo personalizado e máxima retenção.
          </p>
        </div>

        {/* Category Filter Tabs (Sleek Minimal Luxury) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-[#1B1514] text-white shadow-md'
                    : 'bg-white text-[#1B1514]/70 border border-[#EFE8E2] hover:border-[#C5A880] hover:text-[#1B1514]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Services Grid (Editorial High Fashion Catalog) */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredServices.map((service) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                key={service.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#EFE8E2] hover:border-[#C5A880]/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Service Visual Preview */}
                  <div className="relative h-56 bg-[#EFE8E2] overflow-hidden">
                    {service.imageUrl ? (
                      <img
                        src={service.imageUrl}
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#1B1514] flex items-center justify-center p-4 text-center">
                        <span className="text-xs text-[#DFC4A2] font-serif uppercase tracking-widest">
                          {siteConfig.name}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#140F0E]/80 via-transparent to-transparent" />

                    {/* Tag / Category Badge */}
                    {service.tag && (
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#1B1514] text-[#DFC4A2] border border-[#C5A880]/30 shadow">
                        {service.tag}
                      </div>
                    )}

                    {/* Duration Badge */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/60 text-white backdrop-blur-sm flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#DFC4A2]" />
                      <span>{service.duration} min</span>
                    </div>

                    {/* Title on Image */}
                    <div className="absolute bottom-3 left-4 right-4">
                      <h3 className="font-serif text-xl font-bold text-white leading-tight">
                        {service.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body description */}
                  <div className="p-6">
                    <p className="text-xs sm:text-sm text-[#6E6764] line-clamp-2 font-light leading-relaxed">
                      {service.description || "Procedimento com protocolo personalizado de visagismo e máxima retenção."}
                    </p>
                  </div>
                </div>

                {/* Price & Action Strip */}
                <div className="px-6 pb-6 pt-4 border-t border-[#EFE8E2] flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-[#A39994] block">
                      Investimento
                    </span>
                    <span className="font-serif text-2xl font-bold text-[#1B1514]">
                      R$ {service.price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="p-2.5 rounded-full bg-[#FAF7F4] text-[#1B1514] hover:bg-[#EFE8E2] transition-colors"
                      title="Ver detalhes do procedimento"
                    >
                      <Eye className="w-4 h-4" />
                    </button>

                    <a
                      href={siteConfig.maappBookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#1B1514] hover:bg-[#A6845B] transition-colors shadow-sm active:scale-95"
                    >
                      <span>Agendar</span>
                      <ArrowRight className="w-3 h-3 text-[#DFC4A2]" />
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Editorial Assistance Callout Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-white border border-[#C5A880]/40 shadow-sm text-center space-y-4 max-w-2xl mx-auto">
          <h3 className="font-serif text-xl font-bold text-[#1B1514]">
            Dúvidas sobre qual o melhor procedimento para o seu olhar?
          </h3>
          <p className="text-xs sm:text-sm text-[#6E6764] font-light max-w-lg mx-auto">
            Realizamos uma avaliação de visagismo personalizada antes de iniciar a aplicação para garantir naturalidade e harmonia.
          </p>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#1B1514] bg-[#FAF7F4] hover:bg-[#EFE8E2] border border-[#C5A880]/50 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#A6845B]" />
            <span>Fazer Avaliação no WhatsApp</span>
          </a>
        </div>

      </div>

      {/* Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};

