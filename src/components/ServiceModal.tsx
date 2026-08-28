import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Service } from '../types';
import { siteConfig } from '../data/content';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  const encodedServiceMsg = encodeURIComponent(
    `Olá, Kethlyn! Vi o serviço "${service.name}" no site e gostaria de agendar um horário.`
  );
  const directWhatsAppUrl = `https://wa.me/${siteConfig.phoneRaw}?text=${encodedServiceMsg}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-brand-espresso/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-brand-sand z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header with Image or Gradient */}
          <div className="relative h-48 sm:h-56 bg-brand-sand overflow-hidden">
            {service.imageUrl ? (
              <img
                src={service.imageUrl}
                alt={service.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full gold-gradient-subtle flex items-center justify-center">
                <Sparkles className="w-16 h-16 text-brand-goldDark/30" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-brand-espresso flex items-center justify-center backdrop-blur-md shadow-md transition-transform active:scale-90"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title on Image */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              {service.tag && (
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-gold text-brand-espresso mb-1">
                  {service.tag}
                </span>
              )}
              <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight drop-shadow">
                {service.name}
              </h3>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 overflow-y-auto space-y-6 flex-1">
            {/* Price & Duration Stats */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-brand-surface border border-brand-sand">
              <div>
                <p className="text-xs text-brand-muted uppercase tracking-wider font-semibold">Valor Oficial</p>
                <p className="font-serif text-2xl font-bold text-brand-espresso">
                  R$ {service.price.toFixed(2).replace('.', ',')}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-brand-muted uppercase tracking-wider font-semibold">Tempo Estimado</p>
                <div className="flex items-center gap-1.5 text-brand-espresso font-semibold text-sm">
                  <Clock className="w-4 h-4 text-brand-goldDark" />
                  <span>{service.duration} minutos</span>
                </div>
              </div>
            </div>

            {/* Description */}
            {service.description && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-brand-espresso uppercase tracking-wider">
                  Detalhes do Procedimento
                </h4>
                <p className="text-sm text-brand-muted leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            )}

            {/* Quality Checklist */}
            <div className="space-y-2 pt-2 border-t border-brand-sand">
              <div className="flex items-center gap-2 text-xs text-brand-espresso">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Isolamento seguro e preservação da saúde dos fios</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-brand-espresso">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Produtos certificados e maca com conforto ergonômico</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-brand-espresso">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Atendimento individual e exclusivo no estúdio</span>
              </div>
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="p-4 bg-brand-surface border-t border-brand-sand flex flex-col sm:flex-row gap-2.5">
            <a
              href={siteConfig.maappBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-semibold text-white gold-gradient-bg shadow hover:shadow-gold-glow transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar no MinhaAgenda</span>
            </a>

            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-semibold text-brand-espresso bg-white border border-brand-sand hover:border-brand-gold transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>Dúvidas no WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
