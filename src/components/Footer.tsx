import React from 'react';
import { Instagram, Facebook, Heart, Calendar } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { siteConfig } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-12 border-t border-brand-espresso">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Logomarca */}
          <div className="space-y-4">
            <div className="h-16 w-auto max-w-[200px] flex items-center">
              <img
                src={siteConfig.logomarcaImage}
                alt={siteConfig.name}
                className="h-full w-auto object-contain"
              />
            </div>

            <p className="text-xs text-white/70 font-light leading-relaxed">
              Especialista em extensão de cílios de alta retenção, visagismo facial, nanopigmentação e cuidados com a beleza do olhar em Caieiras - SP.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-gold hover:text-brand-dark flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-gold hover:text-brand-dark flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-brand-goldLight uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-white/70 font-light">
              <li><a href="#inicio" className="hover:text-brand-gold transition-colors">Início</a></li>
              <li><a href="#trajetoria" className="hover:text-brand-gold transition-colors">Nossa Trajetória</a></li>
              <li><a href="#servicos" className="hover:text-brand-gold transition-colors">Catálogo de Procedimentos</a></li>
              <li><a href="#biosseguranca" className="hover:text-brand-gold transition-colors">Biossegurança Hospitalar</a></li>
              <li><a href="#diferenciais" className="hover:text-brand-gold transition-colors">Por Que Escolher</a></li>
              <li><a href="#avaliacoes" className="hover:text-brand-gold transition-colors">Avaliações 5.0</a></li>
              <li><a href="#localizacao" className="hover:text-brand-gold transition-colors">Localização</a></li>
            </ul>
          </div>

          {/* Col 3: Procedimentos em Destaque (Todos Clicáveis com Rotas) */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-brand-goldLight uppercase tracking-wider">
              Destaques
            </h4>
            <ul className="space-y-2 text-xs text-white/70 font-light">
              <li>
                <a href="#servicos" className="hover:text-brand-gold hover:translate-x-1 inline-block transition-all">
                  Volume Brasileiro
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-brand-gold hover:translate-x-1 inline-block transition-all">
                  Efeito Fox Eyes & Inglês
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-brand-gold hover:translate-x-1 inline-block transition-all">
                  Linha Mega Volume (&gt;30 dias)
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-brand-gold hover:translate-x-1 inline-block transition-all">
                  Nanopigmentação Hiper-Realista
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-brand-gold hover:translate-x-1 inline-block transition-all">
                  Brow Lamination & Henna
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-brand-gold hover:translate-x-1 inline-block transition-all">
                  Lash Lifting & Nutrição
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contato & Agendamento */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-brand-goldLight uppercase tracking-wider">
              Agendamentos
            </h4>
            <p className="text-xs text-white/70 font-light">
              Atendimento com hora marcada para garantir sua exclusividade e conforto.
            </p>
            <div className="pt-2 space-y-2">
              <a
                href={siteConfig.maappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-xs font-semibold text-brand-dark bg-brand-gold hover:bg-brand-goldLight transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>MinhaAgenda Online</span>
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-xs font-semibold text-white bg-white/10 hover:bg-white/20 transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                <span>(11) 95685-8800</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 font-light gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.name} — Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito com <Heart className="w-3 h-3 text-red-500 fill-red-500" /> para transformar olhares em Caieiras.
          </p>
        </div>

        {/* Micro-Rodapé de Autoria (Sem sublinhado) */}
        <div className="mt-6 pt-4 border-t border-white/5 text-center text-[11px] text-white/40">
          <p>
            Desenvolvido por{' '}
            <a
              href="https://thiagonascimentobarbosapro.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:text-brand-goldLight font-medium no-underline transition-colors"
            >
              TM - Sempre Tecnologia
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};
