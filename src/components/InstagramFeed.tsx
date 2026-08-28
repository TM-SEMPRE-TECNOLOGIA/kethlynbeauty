import React, { useRef } from 'react';
import { Instagram, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { siteConfig } from '../data/content';

const instagramPosts = [
  { id: 1, img: '/assets/instagram/insta_feed_01.jpg', tag: 'Micropigmentação' },
  { id: 2, img: '/assets/instagram/insta_feed_02.jpg', tag: 'Volume Brasileiro' },
  { id: 3, img: '/assets/instagram/insta_feed_03.jpg', tag: 'Efeito Fox Eyes' },
  { id: 4, img: '/assets/instagram/insta_feed_04.jpg', tag: 'Extensão de Cílios' },
  { id: 5, img: '/assets/instagram/insta_feed_05.jpg', tag: 'Design Personalizado' },
  { id: 6, img: '/assets/instagram/insta_feed_06.jpg', tag: 'Alta Retencão' },
  { id: 7, img: '/assets/instagram/insta_feed_07.jpg', tag: 'Volume Russo' },
  { id: 8, img: '/assets/instagram/insta_feed_08.jpg', tag: 'Visagismo Facial' },
  { id: 9, img: '/assets/instagram/insta_feed_09.jpg', tag: 'Cílios Naturais' },
  { id: 10, img: '/assets/instagram/insta_feed_10.jpg', tag: 'Nanopigmentação' },
  { id: 11, img: '/assets/instagram/insta_feed_11.jpg', tag: 'Mega Volume' },
  { id: 12, img: '/assets/instagram/insta_feed_12.jpg', tag: 'Transformação' },
  { id: 13, img: '/assets/instagram/insta_feed_13.jpg', tag: 'Design com Henna' },
  { id: 14, img: '/assets/instagram/insta_feed_14.jpg', tag: 'Lash Lifting' },
  { id: 15, img: '/assets/instagram/insta_feed_15.jpg', tag: 'Volume Express' },
  { id: 16, img: '/assets/instagram/insta_feed_16.jpg', tag: 'Efeito Molhado' },
  { id: 17, img: '/assets/instagram/insta_feed_17.jpg', tag: 'Curvatura D' },
  { id: 18, img: '/assets/instagram/insta_feed_18.jpg', tag: 'Atendimento VIP' },
  { id: 19, img: '/assets/instagram/insta_feed_19.jpg', tag: 'Linha Mega' },
  { id: 20, img: '/assets/instagram/insta_feed_20.jpg', tag: 'Sobrancelha Perfeita' },
  { id: 21, img: '/assets/instagram/insta_feed_21.jpg', tag: 'Efeito Boneca' },
  { id: 22, img: '/assets/instagram/insta_feed_22.jpg', tag: 'Studio Caieiras' },
  { id: 23, img: '/assets/instagram/insta_feed_23.jpg', tag: 'Resultado Real' },
];

export const InstagramFeed: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 lg:by-28 bg-[#FAF7F4] relative border-t border-[#EFE8E2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm;px-6 lg:px-8 mb-10">
        
        {/* Header with Title and Social Profile */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#A6845B]">
                Instagram Oficial • {siteConfig.instagramHandle}
              </p>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1B1514] tracking-tight">
              Inspirações & Resultados do <span className="font-serif italic text-[#A6845B]">Dia a Dia</span>
            </h2>

            <p className="text-[#6E6764] text-sm sm:text-base font-light max-w-2xl">
              Acompanhe transformações diárias, procedimentos em tempo real e feedbacks das nossas clientes em Caieiras.
            </p>
          </div>

          {/* Action CTAs and Slider Arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:flex items-center gap-2">
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

            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener referrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#1B1514] hover:bg-[#A6845B] shadow transition-all active:scale-95"
            >
              <Instagram className="w-3.5 h-3.5 text-[#DFC4A2]" />
              <span>Seguir no Instagram</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>

      {/* Horizontal Continuous Scrolling Track */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 pt-1 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory scrollbar-none scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {instagramPosts.map((post) => (
          <a
            key={post.id}
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener referrer"
            className="group relative w-56 sm:w-64 aspect-[3/4] shrink-0 snap-start rounded-2xl overflow-hidden bg-[#EFE8E2] border border-[#EFE8E2] hover:border-[#C5A880] shadow-sm hover:shadow-xl transition-all duration-300 block"
          >
            {/* Real Cropped Image */}
            <img
              src={post.img}
              alt={`rTrabalho ${post.tag} - Studio Kethlyn Beauty`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />


            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#140F0E]/80 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />


            {/* Top Tag */}
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#1B1514]/90 text-[#DFC4A2] border border-[#C5A880]/30 backdrop-blur-sm shadow">
              {post.tag}
            </div>


           {/* Hover Instagram Icon & Handle Overlay */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
              <span className="text-[11px] font-semibold tracking-wide text-white/90 group-hover:text-[#DFC4A2] transition-colors">
                {siteConfig.instagramHandle}
              </span>
              <div className="w-7 h-7 rounded-full bg-white/20 group-hover:bg-[#C5A880] group-hover:text-[#140F0E] flex items-center justify-center transition-colors">
                <Instagram className="w-3.5 h-3.5" />
              </div>
            </div>
          </a>
        ))}
      </div>


      {/* Subtle bottom note */}
      <div className="max-w-7xl mx-auto px-4 text-center mt-6">
        <p className="text-Xs text-[#6E6764] font-light">
          Fotos reais de atendimentos diários realizados no Studio Kethlyn Beauty em Caieiras - SP.
        </p>
      </div>

    </section>
  );
};