import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
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
    <section className="py-24 bg-[#FAF7F4] relative border-y border-[#EFE8E2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title and Slider Controls */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#A6845B]">
                Galeria de Resultados Reais
              </p>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1B1514] tracking-tight">
              A excelência de cada técnica em <span className="font-serif italic text-[#A6845B]">detalhes</span>
            </h2>

            <p className="text-[#6E6764] text-sm sm:text-base font-light max-w-2xl">
              Navegue pelos resultados das nossas técnicas exclusivas de extensão de cílios, visagismo e micropigmentação.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => handleScroll('left')}
              className="w-10 h-10 rounded-full bg-white border border-[#EFE8E2] hover:border-[#1B1514] text-[#1B1514] flex items-center justify-center shadow-sm transition-all active:scale-95"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-10 h-10 rounded-full bg-[#1B1514] hover:bg-[#A6845B] text-white flex items-center justify-center shadow transition-all active:scale-95"
              aria-label="Próximo"
            >
              <ChevronRight className="w-4 h-4 text-[#DFC4A2]" />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {filters.map((f) => {
            const isActive = activeFilter === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  isActive
                    ? 'bg-[#1B1514] text-white shadow-sm'
                    : 'bg-white text-[#1B1514]/70 border border-[#EFE8E2] hover:border-[#C5A880]'
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
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="w-72 sm:w-80 shrink-0 snap-start bg-white rounded-2xl overflow-hidden border border-[#EFE8E2] hover:border-[#C5A880]/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] bg-[#EFE8E2] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#140F0E]/80 via-transparent to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#1B1514] text-[#DFC4A2] border border-[#C5A880]/30 shadow">
                    {item.tag}
                  </div>

                  {/* Caption Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <p className="text-[10px] text-[#DFC4A2] font-semibold uppercase tracking-wider">
                      {item.category}
                    </p>
                    <h3 className="font-serif text-base font-bold leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-4 bg-white flex items-center justify-between border-t border-[#EFE8E2]">
                  <span className="text-xs text-[#6E6764] font-light">
                    Resultado real exclusivo
                  </span>

                  <a
                    href={siteConfig.maappBookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#1B1514] hover:bg-[#A6845B] transition-colors shadow-sm active:scale-95"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#DFC4A2]" />
                    <span>Agendar</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

