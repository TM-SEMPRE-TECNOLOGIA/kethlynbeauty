import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { siteConfig } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const hasReachedBottom = useRef(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (isDismissed) return;

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Detecta quando o usuário chega perto do final da página (últimos 450px)
      if (scrollPosition + windowHeight >= documentHeight - 450) {
        hasReachedBottom.current = true;
      }

      // Detecta se está rolando para cima após ter atingido o final
      const isScrollingUp = scrollPosition < lastScrollY.current;

      if (hasReachedBottom.current && isScrollingUp && scrollPosition > 250) {
        setShowTooltip(true);
      }

      lastScrollY.current = scrollPosition;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setShowTooltip(false);
    setIsDismissed(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip Popup com gatilho de saída / subida */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: 8 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative bg-[#140F0E] text-white p-4 rounded-2xl shadow-2xl border border-[#C5A880]/50 max-w-[240px] text-xs backdrop-blur-md"
          >
            <button
              onClick={handleDismiss}
              className="absolute -top-2 -right-2 w-5 h-5 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Fechar dica"
            >
              <X className="w-3 h-3" />
            </button>

            <div className="flex items-center gap-1.5 text-[#DFC4A2] font-semibold mb-1">
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Dúvidas ou Agendamento?</span>
            </div>

            <p className="text-[11px] text-white/80 font-light leading-relaxed">
              Fale diretamente com a Kethlyn no WhatsApp e escolha seu melhor horário!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button with Official WhatsApp Icon */}
      <motion.a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl shadow-emerald-600/40 transition-all duration-300"
        aria-label="Abrir WhatsApp Oficial"
      >
        {/* Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />
        <WhatsAppIcon className="w-7 h-7 text-white" />
      </motion.a>
    </div>
  );
};
