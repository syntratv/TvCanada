'use client';

import Image from 'next/image';

export default function CountryFlagsBar() {
  const countries = [
    { name: 'Canada', code: 'CA', flagSrc: '/img/country/ca.png', maple: true },
    { name: 'United States', code: 'US', flagSrc: '/img/country/usa.png' },
    { name: 'United Kingdom', code: 'UK', flagSrc: '/img/country/uk.png' },
    { name: 'Australia', code: 'AU', flagSrc: '/img/country/aus.png' },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 my-6 relative z-10">
      <div className="bg-[#0a0a0c]/90 backdrop-blur-xl border border-white/15 rounded-2xl md:rounded-full py-4 px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6 shadow-2xl transition-colors duration-300 hover:border-[#D32F2F]/40">

        {/* Status Label */}
        <div className="flex items-center gap-2.5 shrink-0 lg:pr-6 lg:border-r border-white/10 w-full lg:w-auto justify-center lg:justify-start">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D32F2F] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D32F2F]" />
          </span>
          <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-white whitespace-nowrap">
            Popular Channels:
          </span>
        </div>

        {/* 4 Symmetric Columns with Local PNG Flags */}
        <div className="w-full lg:w-auto flex-1">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 items-center justify-items-center">
            {countries.map((c) => (
              <div
                key={c.code}
                className="flex items-center justify-center gap-2.5 group cursor-default transition-transform duration-300 hover:scale-105 w-full"
              >
                <div className="relative w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full overflow-hidden shrink-0 shadow-md ring-2 ring-white/10 group-hover:ring-[#D32F2F] transition-all duration-300">
                  <Image
                    src={c.flagSrc}
                    alt={`${c.name} flag`}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 640px) 28px, (max-width: 768px) 32px, 36px"
                  />
                </div>
                <span className="text-xs sm:text-sm font-bold text-white/90 group-hover:text-white transition-colors whitespace-nowrap flex items-center gap-1">
                  {c.name}
                  {c.maple && <span aria-hidden="true">🍁</span>}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}