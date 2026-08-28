import React from 'react';
import { MapPin, Calendar, Clock, Navigation, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { siteConfig } from '../data/content';

export const LocationCTA: React.FC = () => {
  return (
    <section id="localizacao" className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pre-footer Highlight Banner (Dark Luxury High-Impact Box) */}
        <div className="rounded-3xl bg-[#140F0E] text-white p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden mb-20 border border-[#C5A880]/30">
          {/* Subtle lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#DFC4A2]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#DFC4A2] text-[11px] font-semibold uppercase tracking-[0.2em] border border-white/10">
              <span>Agenda Aberta</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight tracking-tight">
              Pronta para acordar todos os dias com o <span className="font-serif italic text-[#DFC4A2]">olhar dos seus sonhos</span>?
            </h2>

            <p className="text-white/70 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Garanta seu horário com antecedência e desfrute de um atendimento acolhedor, exclusivo e com técnicas de alta retenção.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={siteConfig.maappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-[#140F0E] bg-[#DFC4A2] hover:bg-white shadow-xl transition-all duration-300 active:scale-95 group"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Horário</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Fachada & Studio Location Section */}
        <div className="space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#A6845B]">
                Nosso Espaço Físico
              </p>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#1B1514] tracking-tight">
              Um ambiente projetado para o seu <span className="font-serif italic text-[#A6845B]">conforto</span>
            </h3>

            <p className="text-[#6E6764] text-base font-light">
              Localização privilegiada na Vila dos Pinheiros, Caieiras - SP. Fácil acesso e atmosfera intimista.
            </p>
          </div>

          {/* Fachada & Map Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Real Fachada Image Card */}
            <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-sm border border-[#EFE8E2] bg-[#EFE8E2] relative group min-h-[350px]">
              <img
                src={siteConfig.fachadaImage}
                alt="Fachada do Studio Kethlyn Beauty em Caieiras"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140F0E]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#1B1514] text-[#DFC4A2] border border-[#C5A880]/30 mb-2">
                  Fachada Oficial
                </span>
                <h4 className="font-serif text-xl font-bold">Studio Kethlyn Beauty</h4>
                <p className="text-xs text-white/80 font-light">Caieiras – São Paulo</p>
              </div>
            </div>

            {/* Studio Info & Embedded Map */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              
              {/* Info Cards */}
              <div className="space-y-3 text-sm text-[#6E6764] font-light">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF7F4] border border-[#EFE8E2]">
                  <MapPin className="w-5 h-5 text-[#A6845B] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#1B1514]">Endereço:</p>
                    <p>{siteConfig.address}</p>
                    <p className="text-xs text-[#A39994] mt-0.5">Caieiras – SP | CEP: {siteConfig.postalCode}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF7F4] border border-[#EFE8E2]">
                  <Clock className="w-5 h-5 text-[#A6845B] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#1B1514]">Horários de Atendimento:</p>
                    <p>Terça a Sábado: 09:00 às 19:00</p>
                    <p className="text-xs text-[#A39994] mt-0.5">Atendimento individual com horário marcado</p>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="h-48 sm:h-52 rounded-xl overflow-hidden border border-[#EFE8E2] shadow-sm bg-[#EFE8E2]">
                <iframe
                  title="Localização Kethlyn Beauty Caieiras"
                  src="https://maps.google.com/maps?q=Rua+Eva+359+Caieiras+SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              <div>
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#1B1514] bg-[#FAF7F4] hover:bg-[#EFE8E2] transition-colors border border-[#EFE8E2]"
                >
                  <Navigation className="w-4 h-4 text-[#A6845B]" />
                  <span>Traçar Rota no Google Maps</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

