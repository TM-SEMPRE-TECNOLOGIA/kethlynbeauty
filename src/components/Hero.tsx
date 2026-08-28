import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Star, Sparkles, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { siteConfig, heroContent } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-24 lg:pt-40 lg:pb-36 overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-goldLight/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-brand-rosegold/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 -left-20 w-[350px] h-[350px] bg-brand-sand/50 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copywriting & High Impact Hooks */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Google Review Authority Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-brand-gold/30 shadow-sm"
            >
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-semibold text-brand-espresso">
                {heroContent.badge}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-brand-espresso leading-[1.15]"
            >
              Realce a beleza <span className="gold-gradient-text italic font-normal">única do seu olhar</span> com sofisticação
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base sm:text-lg text-brand-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              {heroContent.subtitle}
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <a
                href={siteConfig.maappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-semibold text-white gold-gradient-bg shadow-luxury hover:shadow-luxury-hover transition-all duration-300 hover:scale-[1.02] active:scale-95 group"
              >
                <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>{heroContent.primaryCTA}</span>
              </a>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-semibold text-brand-espresso bg-white border border-brand-sand hover:border-brand-gold shadow-sm hover:shadow-luxury transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                <span>{heroContent.secondaryCTA}</span>
              </a>
            </motion.div>

            {/* Trust Pill Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-brand-muted"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-goldDark" />
                <span>Isolamento Seguro</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-goldDark" />
                <span>Retenção Prolongada</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-brand-goldDark" />
                <span>Visagismo Personalizado</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Visual & Professional Photo of the Owner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Image Container with Luxury Glow Frame */}
            <div className="relative w-[300px] sm:w-[360px] lg:w-[380px]">
              
              {/* Outer Decorative Ring */}
              <div className="absolute inset-0 rounded-[36px] bg-gradient-to-tr from-brand-gold via-brand-rosegold to-brand-goldLight blur-md opacity-70 transform rotate-3 -z-10" />
              
              {/* Main Photo Card */}
              <div className="relative rounded-[32px] overflow-hidden bg-white p-2.5 shadow-2xl border border-brand-sand">
                <div className="rounded-[24px] overflow-hidden aspect-[4/5] relative group">
                  <img
                    src="/assets/dona.jpg"
                    alt="Kethlyn Torris - Especialista em Cílios e Sobrancelhas"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-espresso/60 via-transparent to-transparent" />
                  
                  {/* Overlay Name Tag */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white p-3 rounded-2xl glass-panel-dark z-10">
                    <p className="text-[10px] sm:text-xs uppercase tracking-widest text-brand-goldLight font-semibold">Fundadora & Lash Designer</p>
                    <p className="font-serif text-base sm:text-lg font-bold tracking-wide">Kethlyn Torris</p>
                  </div>
                </div>
              </div>

              {/* Floating Social Proof Badge - Positioned with ample clearance below */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-4 sm:-bottom-12 sm:-left-8 glass-panel p-3 sm:p-3.5 rounded-2xl shadow-luxury border border-brand-gold/40 flex items-center gap-3 z-20 backdrop-blur-md"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full gold-gradient-bg flex items-center justify-center text-white shadow-sm shrink-0">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-espresso">+2.000 Procedimentos</p>
                  <p className="text-[10px] sm:text-[11px] text-brand-muted font-medium">Retenção de até 30 dias</p>
                </div>
              </motion.div>

              {/* Floating Google Rating Pill */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -right-4 sm:-right-8 glass-panel py-2 px-4 rounded-full shadow-luxury border border-brand-gold/40 flex items-center gap-2 z-20"
              >
                <span className="text-amber-500 font-bold text-sm">5.0</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
