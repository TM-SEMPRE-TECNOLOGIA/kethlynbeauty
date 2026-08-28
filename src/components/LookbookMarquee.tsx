import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { lookbookGallery, siteConfig } from '../data/content';

type FilterType = 'todos' | 'cilios' | 'sobrancelhas' | 'tratamentos';

export const LookbookMarquee: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('todos');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filters: { key: FilterType; label: string }[] = [
    { key: 'todos', label: 'Todos os Olhares' },
    { key: 'cilios', label: 'Extensões de Cílios' },
    { key: 'sobrancelhas', label: 'Sobrancelhas & Nanopig.' },
    { key: 'tratamentos', label: 'Lifting & Cuidados' },
  ];

  const filteredItems = lookbookGallery.filter((item) => {
    if (activeFilter === 'todos') return true;
    if (activeFilter === 'cilios') return item.category.toLowerCase().includes('extensão') || item.category.toLowerCase().includes('delineado') || item.category.toLowerCase().includes('w') || item.category.toLowerCase().includes('curvatura') || item.category.toLowerCase().includes('densidade');
    if (activeFilter === 'sobrancelhas') return item.category.toLowerCase().includes('fios') || item.category.toLowerCase().includes('alinhamento') || item.category.toLowerCase().includes('degradê') || item.category.toLowerCase().includes('terapia');
    if (activeFilter === 'tratamentos') return item.category.toLowerCase().includes('sem extensão') || item.category.toLowerCase().includes('tratamento') || item.category.toLowerCase().includes('terapia');
    return true;
  });

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 bg-brand-surface relative border-y border-brand-sand/70 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-brand-goldLight/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-rosegold/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title and Slider Controls */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-sand/80 text-brand-goldDark text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Galeria de Olhares em Alta Definição</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-espresso">
              A excelência de cada técnica em detalhes reais
            </h2>

            <p className="text-brand-muted text-sm sm:text-base font-light max-w-2xl">
              Navegue pelos resultados das nossas técnicas exclusivas de extensão de cílios, visagismo e micropigmentação.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleScroll('left')}
              className="w-11 h-11 rounded-full bg-white border border-brand-sand hover:border-brand-gold text-brand-espresso hover:text-brand-goldDark flex items-center justify-center shadow-sm hover:shadow transition-all active:scale-95"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-11 h-11 rounded-full gold-gradient-bg text-white flex items-center justify-center shadow-md hover:shadow-gold-glow transition-all active:scale-95"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {filters.map((f) => {
            const isActive = activeFilter === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? 'text-white gold-gradient-bg shadow-sm'
                    : 'text-brand-espresso/70 bg-white border border-brand-sand hover:border-brand-gold'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Smooth Scrollable Slider Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="w-72 sm:w-80 shrink-0 snap-start bg-white rounded-3xl overflow-hidden border border-brand-sand/80 shadow-luxury hover:shadow-luxury-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image Container with Fixed Proportions */}
                <div className="relative aspect-[4/3] bg-brand-sand overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-gold text-brand-espresso shadow">
                    {item.tag}
                  </div>

                  {/* Caption Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <p className="text-[11px] text-brand-goldLight font-medium tracking-wide">
                      {item.category}
                    </p>
                    <h3 className="font-serif text-lg font-bold leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-4 bg-white flex items-center justify-between border-t border-brand-sand/60">
                  <span className="text-xs text-brand-muted font-light">
                    Resultado real e exclusivo
                  </span>

                  <a
                    href={siteConfig.maappBookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white gold-gradient-bg shadow hover:shadow-gold-glow transition-all active:scale-95"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Agendar</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-brand-muted sm:hidden">
          <ChevronLeft className="w-3.5 h-3.5 text-brand-gold" />
          <span>Deslize para ver todos os procedimentos</span>
          <ChevronRight className="w-3.5 h-3.5 text-brand-gold" />
        </div>

      </div>
    </section>
  );
};
