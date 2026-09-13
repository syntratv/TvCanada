'use client';

import { FadeIn } from './AnimatedSection';
import { Wifi, Server, ShieldCheck, Zap } from 'lucide-react';
import { CONSTANTS } from '@/lib/seo';
import Image from 'next/image';

export default function GlobalServerMap() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#0a0a0c] py-16 sm:py-20 lg:py-28"
      aria-label="Global IPTV server coverage map"
    >
      {/* Soft Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(211,47,47,0.08),_transparent_65%)] pointer-events-none" />

      <FadeIn className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D32F2F]/30 bg-[#D32F2F]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white">
            <Wifi className="h-4 w-4 text-[#D32F2F]" />
            Global Server Network 🍁
          </div>

          <h2 className="text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Global Server Coverage In <span className="text-[#D32F2F]">100+ Countries</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base font-medium">
            Experience ultra-fast 4K IPTV streaming powered by {CONSTANTS.BRAND_NAME}&apos;s global network. Enjoy zero buffering, maximum stability, and guaranteed 99.9% uptime across Canada and worldwide.
          </p>
        </div>

        {/* Medium-Sized Map Graphic */}
        <div className="relative mx-auto my-8 max-w-5xl px-4">
          <Image
            src="/img/global.png"
            alt="Global IPTV server network coverage map"
            width={1400}
            height={787}
            className="w-full h-auto max-h-[600px] object-contain block mx-auto opacity-95"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>

        {/* Feature Highlights Grid (White Background Cards) */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-[#D32F2F]/40 hover:shadow-[0_10px_30px_rgba(211,47,47,0.15)] transition-all duration-300">
            <div className="flex justify-center mb-3">
              <Zap className="h-6 w-6 text-[#D32F2F]" />
            </div>
            <h3 className="text-base font-black uppercase text-[#0a0a0c]">Ultra-Low Latency</h3>
            <p className="text-xs text-[#0a0a0c]/70 mt-1 font-medium">
              Optimized network routing for seamless live sports and instant channel switching.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-[#D32F2F]/40 hover:shadow-[0_10px_30px_rgba(211,47,47,0.15)] transition-all duration-300">
            <div className="flex justify-center mb-3">
              <Server className="h-6 w-6 text-[#D32F2F]" />
            </div>
            <h3 className="text-base font-black uppercase text-[#0a0a0c]">Redundant Servers</h3>
            <p className="text-xs text-[#0a0a0c]/70 mt-1 font-medium">
              Automated failover systems ensure consistent delivery and uninterrupted performance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-[#D32F2F]/40 hover:shadow-[0_10px_30px_rgba(211,47,47,0.15)] transition-all duration-300">
            <div className="flex justify-center mb-3">
              <ShieldCheck className="h-6 w-6 text-[#D32F2F]" />
            </div>
            <h3 className="text-base font-black uppercase text-[#0a0a0c]">99.9% Uptime</h3>
            <p className="text-xs text-[#0a0a0c]/70 mt-1 font-medium">
              Around-the-clock infrastructure monitoring for a reliable, hassle-free viewing experience.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}