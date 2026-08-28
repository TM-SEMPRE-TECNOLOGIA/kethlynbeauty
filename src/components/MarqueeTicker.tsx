import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { marqueeKeywords } from '../data/content';

export const MarqueeTicker: React.FC = () => {
  return (
    <div className="relative py-4 bg-brand-espresso text-white overflow-hidden border-y border-brand-gold/30 shadow-md">
      {/* Edge gradient masks for luxury smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-brand-espresso to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-brand-espresso to-transparent z-10 pointer-events-none" />

      {/* Vaivém / Ping-Pong Motion (vai de um lado para o outro continuamente) */}
      <motion.div
        animate={{ x: [0, -380, 0] }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex w-max"
      >
        {[...marqueeKeywords, ...marqueeKeywords, ...marqueeKeywords].map((word, index) => (
          <div
            key={`${word}-${index}`}
            className="flex items-center gap-6 px-6 shrink-0"
          >
            <span className="font-serif tracking-widest text-xs sm:text-sm uppercase font-medium text-brand-goldLight/90 hover:text-white transition-colors cursor-default">
              {word}
            </span>
            <Sparkles className="w-3.5 h-3.5 text-brand-gold shrink-0 animate-pulse" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
