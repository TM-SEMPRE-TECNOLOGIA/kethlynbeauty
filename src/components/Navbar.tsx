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
    { label: 'Sobre', href: '#trajetoria' },
    { label: 'Procedimentos & Preços', href: '#servicos' },
    { label: 'Biossegurança', href: '#biosseguranca' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Localização', href: '#localizacao' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#EFE8E2] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="h-10 w-auto max-w-[170px] flex items-center">
            <img
              src={siteConfig.logoImage}
              alt={siteConfig.name}
              className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1B1514]/80 hover:text-[#A6845B] transition-colors relative py-1"
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-[#1B1514] bg-white border border-[#EFE8E2] hover:border-[#1B1514] transition-all shadow-sm"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
            <span>WhatsApp</span>
          </a>

          <a
            href={siteConfig.maappBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#1B1514] hover:bg-[#A6845B] transition-all shadow active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5 text-[#DFC4A2]" />
            <span>Agendar</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#1B1514] hover:bg-[#EFE8E2] transition-colors"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#EFE8E2] shadow-xl px-5 pt-4 pb-6 mt-3 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-xs font-bold uppercase tracking-wider text-[#1B1514] hover:text-[#A6845B]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-[#EFE8E2] flex flex-col gap-2">
            <a
              href={siteConfig.maappBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#1B1514] shadow"
            >
              <Calendar className="w-4 h-4 text-[#DFC4A2]" />
              <span>Agendar Horário Online</span>
            </a>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#1B1514] bg-[#FAF7F4] border border-[#EFE8E2]"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

