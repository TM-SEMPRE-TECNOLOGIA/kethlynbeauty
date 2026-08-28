import React, { useEffect } from 'react';

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

      </div>
    </section>
  );
};

