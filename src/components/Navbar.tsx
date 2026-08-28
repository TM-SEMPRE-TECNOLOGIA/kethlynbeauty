import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { siteConfig } from '../data/content';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Trajetória', href: '#trajetoria' },
    { label: 'Serviços & Preços', href: '#servicos' },
    { label: 'Biossegurança', href: '#biosseguranca' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Localização', href: '#localizacao' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-panel shadow-luxury py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="h-11 w-auto max-w-[170px] flex items-center">
            <img
              src={siteConfig.logoImage}
              alt={siteConfig.name}
              className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-wider text-brand-espresso/80 hover:text-brand-goldDark transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-gold after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-brand-espresso bg-white border border-brand-sand hover:border-brand-gold transition-all shadow-sm hover:shadow"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
            <span>WhatsApp</span>
          </a>

          <a
            href={siteConfig.maappBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold text-white gold-gradient-bg hover:opacity-95 shadow-md hover:shadow-gold-glow transition-all active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Agendar Online</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-brand-espresso hover:bg-brand-sand/50 transition-colors"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-t border-brand-sand/60 px-4 pt-4 pb-6 mt-3 space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-brand-espresso hover:text-brand-goldDark"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-brand-sand flex flex-col gap-2">
            <a
              href={siteConfig.maappBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-semibold text-white gold-gradient-bg shadow"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar no MinhaAgenda</span>
            </a>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-semibold text-brand-espresso bg-white border border-brand-sand"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>Conversar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
