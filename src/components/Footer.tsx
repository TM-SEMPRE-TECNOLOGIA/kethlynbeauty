import React from 'react';
import { Instagram, Facebook, Calendar } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { siteConfig } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#140F0E] text-white pt-20 pb-12 border-t border-[#C5A880]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand & Logomarca */}
          <div className="space-y-4">
            <div className="h-14 w-auto max-w-[200px] flex items-center">
              <img
                src={siteConfig.logomarcaImage}
                alt={siteConfig.name}
                className="h-full w-auto object-contain"
              />
            </div>

            <p className="text-xs text-white/60 font-light leading-relaxed">
              Studio especializado em extensão de cílios de alta retenção, visagismo facial, nanopigmentação e cuidados com a beleza do olhar em Caieiras - SP.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-[#C5A880] hover:text-[#140F0E] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-[#C5A880] hover:text-[#140F0E] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#DFC4A2] uppercase tracking-[0.2em]">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-white/70 font-light">
              <li><a href="#inicio" className="hover:text-[#DFC4A2] transition-colors">Início</a></li>
              <li><a href="#trajetoria" className="hover:text-[#DFC4A2] transition-colors">Sobre a Especialista</a></li>
              <li><a href="#servicos" className="hover:text-[#DFC4A2] transition-colors">Menu de Procedimentos</a></li>
              <li><a href="#biosseguranca" className="hover:text-[#DFC4A2] transition-colors">Biossegurança Hospitalar</a></li>
              <li><a href="#diferenciais" className="hover:text-[#DFC4A2] transition-colors">Padrão de Excelência</a></li>
              <li><a href="#avaliacoes" className="hover:text-[#DFC4A2] transition-colors">Avaliações 5.0</a></li>
              <li><a href="#localizacao" className="hover:text-[#DFC4A2] transition-colors">Localização do Studio</a></li>
            </ul>
          </div>

          {/* Col 3: Procedimentos em Destaque */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#DFC4A2] uppercase tracking-[0.2em]">
              Procedimentos
            </h4>
            <ul className="space-y-2 text-xs text-white/70 font-light">
              <li><a href="#servicos" className="hover:text-[#DFC4A2] transition-colors">Volume Brasileiro</a></li>
              <li><a href="#servicos" className="hover:text-[#DFC4A2] transition-colors">Efeito Fox Eyes & Inglês</a></li>
              <li><a href="#servicos" className="hover:text-[#DFC4A2] transition-colors">Linha Mega Volume (&gt;30 dias)</a></li>
              <li><a href="#servicos" className="hover:text-[#DFC4A2] transition-colors">Nanopigmentação Hiper-Realista</a></li>
              <li><a href="#servicos" className="hover:text-[#DFC4A2] transition-colors">Brow Lamination & Henna</a></li>
              <li><a href="#servicos" className="hover:text-[#DFC4A2] transition-colors">Lash Lifting & Nutrição</a></li>
            </ul>
          </div>

          {/* Col 4: Contato & Agendamento */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-bold text-[#DFC4A2] uppercase tracking-[0.2em]">
              Agendamentos
            </h4>
            <p className="text-xs text-white/70 font-light leading-relaxed">
              Atendimento individual com hora marcada na Vila dos Pinheiros, Caieiras - SP.
            </p>
            <div className="pt-2 space-y-2">
              <a
                href={siteConfig.maappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#140F0E] bg-[#DFC4A2] hover:bg-white transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Agendar Horário Online</span>
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/10 transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                <span>{siteConfig.phone}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 font-light gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.name} — Todos os direitos reservados.</p>
          <p>
            Desenvolvido por{' '}
            <a
              href="https://thiagonascimentobarbosapro.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#DFC4A2] hover:text-white font-medium no-underline transition-colors"
            >
              TM - Sempre Tecnologia
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

