'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMemo } from 'react';

export default function PartnerSlider() {
  // Generate clean partner objects without repetitive words
  const partners = Array.from({ length: 10 }, (_, i) => {
    const partnerNumber = String(i + 1).padStart(2, '0');
    return {
      name: `Brand-${partnerNumber}`,
      imagePath: `/img/partners/omniptv-partners-${partnerNumber}`,
      width: 128,
      height: 128,
    };
  });

  // Duplicate for smooth infinite loop
  const sliderItems = useMemo(() => [...partners, ...partners], [partners]);

  // Total animation travel distance (10 items × 150px = 1500px)
  const animationDistance = partners.length * 150;

  return (
    <div className="w-full overflow-hidden relative py-12 bg-transparent">
      {/* Blended gradient edge masks — matched to page obsidian bg */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-[#0a0a0c] via-[#0a0a0c]/50 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <p className="text-sm text-white/70 font-black uppercase tracking-widest">
          Supported IPTV Apps & Devices 🍁
        </p>
      </div>

      {/* Hide entire motion track from search engines and screen readers to prevent keyword loops */}
      <div aria-hidden="true" role="presentation">
        <motion.div 
          className="flex gap-12 md:gap-16 items-center w-max"
          animate={{
            x: [0, -animationDistance],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
        >
          {sliderItems.map((partner, idx) => (
            <div 
              key={`${partner.name}-${idx}`} 
              className="flex items-center justify-center min-w-[120px] md:min-w-[150px] opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
            >
              <div className="relative w-20 h-20 md:w-28 md:h-28">
                <Image
                  src={`${partner.imagePath}.png`}
                  alt=""
                  aria-hidden="true"
                  width={partner.width}
                  height={partner.height}
                  className="object-contain"
                  sizes="(max-width: 768px) 80px, 112px"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}