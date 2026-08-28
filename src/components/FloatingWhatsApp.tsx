import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { siteConfig } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip Popup */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative glass-panel-dark text-white p-3.5 rounded-2xl shadow-luxury border border-brand-gold/40 max-w-[220px] text-xs"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white"
              aria-label="Fechar dica"
            >
              <X className="w-3 h-3" />
            </button>
            <div className="flex items-center gap-1.5 text-brand-goldLight font-semibold mb-1">
              <Sparkles className="w-3 h-3" />
              <span>Dúvidas ou Agendamento?</span>
            </div>
            <p className="text-[11px] text-white/80 font-light leading-tight">
              Fale diretamente com a Kethlyn no WhatsApp!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button with Official WhatsApp Icon */}
      <motion.a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-luxury shadow-emerald-600/40 transition-colors"
        aria-label="Abrir WhatsApp Oficial"
      >
        {/* Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />
        <WhatsAppIcon className="w-7 h-7 text-white" />
      </motion.a>
    </div>
  );
};
