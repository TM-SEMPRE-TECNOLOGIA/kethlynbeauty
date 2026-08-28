import React, { useEffect } from 'react';
import { MessageCircle, ExternalLink } from 'lucide-react';
import { siteConfig } from '../data/content';

export const Testimonials: React.FC = () => {
  useEffect(() => {
    // Garante inicialização do widget Elfsight mesmo com navegação SPA / re-render
    const scriptId = 'elfsight-platform-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);
    } else if ((window as any).eapps && typeof (window as any).eapps.initialize === 'function') {
      (window as any).eapps.initialize();
    }
  }, []);

  return (
    <section id="avaliacoes" className="py-24 lg:py-32 bg-white relative overflow-hidden border-t border-[#EFE8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#A6845B]">
              Avaliações Oficiais do Google
            </p>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1B1514] tracking-tight">
            O que nossas clientes dizem sobre a <span className="font-serif italic text-[#A6845B]">experiência</span>
          </h2>

          <p className="text-[#6E6764] text-base font-light">
            Depoimentos 100% autênticos e sincronizados diretamente da nossa página oficial do Google Meu Negócio.
          </p>
        </div>

        {/* Elfsight Official Google Reviews Live Widget */}
        <div className="min-h-[250px] w-full">
          <div
            className="elfsight-app-c5e4fa2a-10e0-4857-b292-b8c28f042fa3"
            data-elfsight-app-lazy
          />
        </div>

        {/* Dual Actions: Google Maps Profile & Instagram */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <a
            href={siteConfig.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#1B1514] hover:bg-[#A6845B] shadow-md transition-all active:scale-95"
          >
            <div className="w-4 h-4 rounded-full bg-white text-[#1B1514] flex items-center justify-center font-bold text-[10px]">
              G
            </div>
            <span>Ver Perfil Oficial no Google</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#DFC4A2]" />
          </a>

          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#1B1514] bg-[#FAF7F4] hover:bg-[#EFE8E2] border border-[#EFE8E2] transition-all"
          >
            <MessageCircle className="w-4 h-4 text-[#A6845B]" />
            <span>Acompanhar no Instagram {siteConfig.instagramHandle}</span>
          </a>
        </div>

      </div>
    </section>
  );
};

