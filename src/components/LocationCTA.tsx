import React from 'react';
import { MapPin, Calendar, Clock, Navigation, Sparkles, Building2 } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { siteConfig } from '../data/content';

export const LocationCTA: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pre-footer Highlight Banner */}
        <div className="rounded-[36px] gold-gradient-bg p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden mb-16">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Agenda Aberta</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Pronta para acordar todos os dias com o olhar dos seus sonhos?
            </h2>

            <p className="text-white/90 text-base sm:text-lg font-light leading-relaxed">
              Garanta seu horário com antecedência e desfrute de um atendimento exclusivo, acolhedor e com técnicas de alta retenção.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={siteConfig.maappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-semibold text-brand-espresso bg-white hover:bg-brand-surface shadow-lg hover:scale-105 transition-all active:scale-95"
              >
                <Calendar className="w-5 h-5 text-brand-goldDark" />
                <span>Agendar Horário Online</span>
              </a>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-semibold text-white bg-black/30 hover:bg-black/40 border border-white/30 backdrop-blur-md hover:scale-105 transition-all active:scale-95"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Fachada & Studio Location Section */}
        <div className="space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-sand/70 text-brand-goldDark text-xs font-semibold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>Nosso Espaço Físico</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-espresso">
              Um ambiente projetado para o seu conforto e relaxamento
            </h3>

            <p className="text-brand-muted text-base font-light">
              Localização privilegiada na Vila dos Pinheiros, Caieiras - SP. Estacionamento fácil e atmosfera exclusiva.
            </p>
          </div>

          {/* Fachada & Map Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Real Fachada Image Card */}
            <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-luxury border border-brand-sand bg-brand-sand relative group min-h-[350px]">
              <img
                src={siteConfig.fachadaImage}
                alt="Fachada do Studio Kethlyn Beauty em Caieiras"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-gold text-brand-espresso mb-2">
                  Fachada Oficial
                </span>
                <h4 className="font-serif text-xl font-bold">Studio Kethlyn Beauty</h4>
                <p className="text-xs text-white/80 font-light">Caieiras – São Paulo</p>
              </div>
            </div>

            {/* Studio Info & Embedded Map */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              
              {/* Info Cards */}
              <div className="space-y-4 text-sm text-brand-muted font-light">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-brand-surface border border-brand-sand">
                  <MapPin className="w-5 h-5 text-brand-goldDark shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-brand-espresso">Endereço Principal:</p>
                    <p>{siteConfig.address}</p>
                    <p className="text-xs text-brand-mutedLight mt-0.5">Caieiras – SP | CEP: {siteConfig.postalCode}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-brand-surface border border-brand-sand">
                  <Clock className="w-5 h-5 text-brand-goldDark shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-brand-espresso">Horários de Atendimento:</p>
                    <p>Terça a Sábado: 09:00 às 19:00</p>
                    <p className="text-xs text-brand-mutedLight mt-0.5">Atendimento individual com horário marcado</p>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="h-48 sm:h-56 rounded-2xl overflow-hidden border border-brand-sand shadow-sm bg-brand-sand/30">
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
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-brand-espresso bg-brand-sand/60 hover:bg-brand-sand transition-colors border border-brand-sand"
                >
                  <Navigation className="w-4 h-4 text-brand-goldDark" />
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
