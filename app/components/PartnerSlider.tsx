'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMemo } from 'react';

export default function PartnerSlider() {
  // -------------------------------------------------------------------------
  // PARTNER LOGOS — each with a unique descriptive alt
  // -------------------------------------------------------------------------
  const partners = [
    { name: 'Amazon Firestick', alt: 'Amazon Firestick IPTV Canada compatible device' },
    { name: 'Samsung Smart TV', alt: 'Samsung Smart TV IPTV Canada setup compatibility' },
    { name: 'LG Smart TV', alt: 'LG Smart TV IPTV Canada streaming app support' },
    { name: 'Apple TV 4K', alt: 'Apple TV 4K IPTV Canada app integration' },
    { name: 'Android TV', alt: 'Android TV box IPTV Canada streaming support' },
    { name: 'Nvidia Shield', alt: 'Nvidia Shield IPTV Canada high-performance streaming' },
    { name: 'IBO Player Pro', alt: 'IBO Player Pro recommended IPTV player for Canada' },
    { name: 'TiviMate Player', alt: 'TiviMate IPTV Player Canada premium streaming app' },
    { name: 'IPTV Smarters', alt: 'IPTV Smarters Pro player Canada compatible' },
    { name: 'MAG & Formuler', alt: 'MAG and Formuler set-top boxes IPTV Canada support' },
  ].map((p, i) => {
    const number = String(i + 1).padStart(2, '0');
    return {
      ...p,
      imagePath: `/img/partners/iptv-canada-partners-${number}`,
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
      {/* Blended gradient edge masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-[#0a0a0c] via-[#0a0a0c]/50 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <p className="text-sm text-white/70 font-black uppercase tracking-widest">
          Supported IPTV Apps & Devices 🍁
        </p>
      </div>

      {/* Wrapper hides motion track from screen readers, but alt text stays for Google */}
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
          {sliderItems.map((partner, idx) => {
            // Duplicated half gets empty alt to avoid duplicate-alt spam
            const isDuplicate = idx >= partners.length;
            const altText = isDuplicate ? '' : partner.alt;

            return (
              <div
                key={`${partner.name}-${idx}`}
                className="flex items-center justify-center min-w-[120px] md:min-w-[150px] opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
              >
                <div className="relative w-20 h-20 md:w-28 md:h-28">
                  <Image
                    src={`${partner.imagePath}.png`}
                    alt={altText}
                    width={partner.width}
                    height={partner.height}
                    className="object-contain"
                    sizes="(max-width: 768px) 80px, 112px"
                    loading="lazy"
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}