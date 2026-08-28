import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Clock, ArrowRight, Eye } from 'lucide-react';
import { servicesData, siteConfig } from '../data/content';
import { Service } from '../types';
import { ServiceModal } from './ServiceModal';

type CategoryFilter = 'todos' | 'cilios-aplicacao' | 'cilios-manutencao' | 'cilios-mega' | 'sobrancelhas' | 'tratamentos';

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
    <section id="servicos" className="py-20 lg:py-32 bg-brand-surface/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-sand/70 text-brand-goldDark text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Menu de Serviços & Procedimentos</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-espresso">
            Escolha o procedimento ideal para realçar seu olhar
          </h2>

          <p className="text-brand-muted text-base sm:text-lg font-light leading-relaxed">
            Todos os valores e durações são sincronizados com o catálogo oficial. Procedimentos realizados com materiais premium e biossegurança.
          </p>
        </div>

        {/* Category Pills Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'text-white gold-gradient-bg shadow-md scale-105'
                    : 'text-brand-espresso/80 bg-white/80 border border-brand-sand hover:border-brand-gold hover:text-brand-goldDark'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredServices.map((service) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={service.id}
                className="group relative bg-white rounded-3xl overflow-hidden border border-brand-sand/80 shadow-luxury hover:shadow-luxury-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
              >
                {/* Service Image / Header Preview */}
                <div className="relative h-52 bg-brand-sand/40 overflow-hidden">
                  {service.imageUrl ? (
                    <img
                      src={service.imageUrl}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full gold-gradient-subtle flex flex-col items-center justify-center p-4 text-center">
                      <Sparkles className="w-10 h-10 text-brand-gold/60 mb-2" />
                      <span className="text-xs text-brand-goldDark font-semibold uppercase tracking-wider">
                        {siteConfig.name}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Popular or Category Tag */}
                  {service.tag && (
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-gold text-brand-espresso shadow">
                      {service.tag}
                    </div>
                  )}

                  {/* Duration Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/50 text-white backdrop-blur-md flex items-center gap-1">
                    <Clock className="w-3 h-3 text-brand-goldLight" />
                    <span>{service.duration} min</span>
                  </div>

                  {/* Title on Image */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="font-serif text-lg font-bold text-white leading-tight drop-shadow-md">
                      {service.name}
                    </h3>
                  </div>
                </div>

                {/* Service Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  {service.description ? (
                    <p className="text-xs sm:text-sm text-brand-muted line-clamp-2 font-light leading-relaxed">
                      {service.description}
                    </p>
                  ) : (
                    <p className="text-xs sm:text-sm text-brand-muted font-light italic">
                      Procedimento realizado com protocolo personalizado de visagismo e máxima retenção.
                    </p>
                  )}

                  {/* Price & Action Buttons */}
                  <div className="pt-3 border-t border-brand-sand flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-brand-muted tracking-wider block">
                        Valor
                      </span>
                      <span className="font-serif text-xl font-bold text-brand-espresso">
                        R$ {service.price.toFixed(2).replace('.', ',')}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setSelectedService(service)}
                        className="p-2.5 rounded-full bg-brand-surface text-brand-espresso hover:bg-brand-sand transition-colors"
                        title="Ver detalhes"
                      >
                        <Eye className="w-4 h-4" />
                      </button>

                      <a
                        href={siteConfig.maappBookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white gold-gradient-bg shadow-sm hover:shadow-gold-glow transition-all active:scale-95"
                      >
                        <span>Agendar</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Global Catalog Banner Callout */}
        <div className="mt-16 p-8 rounded-3xl glass-panel border border-brand-gold/30 text-center space-y-4 max-w-2xl mx-auto shadow-luxury">
          <h3 className="font-serif text-xl font-bold text-brand-espresso">
            Dúvidas sobre qual o melhor procedimento para o seu olhar?
          </h3>
          <p className="text-sm text-brand-muted font-light">
            Realizamos uma avaliação de visagismo personalizada antes de iniciar a aplicação para garantir harmonia total.
          </p>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-brand-espresso bg-white border border-brand-gold shadow-sm hover:scale-105 transition-transform"
          >
            <Sparkles className="w-4 h-4 text-brand-goldDark" />
            <span>Fazer Avaliação Gratuita no WhatsApp</span>
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
