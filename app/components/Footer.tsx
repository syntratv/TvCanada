'use client';

import Link from "next/link";
import Image from "next/image";
import { CONSTANTS } from "@/lib/seo";
import { channelsData } from "@/lib/channels-data";
import { Facebook, Instagram, Twitter } from "lucide-react";

// ---------------------------------------------------------------------------
// Lightweight Circular Flags (CA, US, UK, AU) — Canada First 🍁
// ---------------------------------------------------------------------------
const FlagCA = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="f-ca"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#f-ca)">
      <path fill="#FFF" d="M0 0h32v32H0z" />
      <path fill="#D80621" d="M0 0h8v32H0zM24 0h8v32h-8z" />
      <path fill="#D80621" d="M16 7l1.2 2.4 2.6-.6-.9 2.5 2.3 1.3-2.1 1.5.8 2.5-2.5-.7L16 18l-1.4-2.1-2.5.7.8-2.5-2.1-1.5 2.3-1.3-.9-2.5 2.6.6L16 7z" />
    </g>
  </svg>
);

const FlagUS = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="f-us"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#f-us)">
      <path fill="#FFF" d="M0 0h32v32H0z" />
      {[0, 4.57, 9.14, 13.71, 18.29, 22.86, 27.43].map((y, i) => (
        <path key={i} fill="#B22234" d={`M0 ${y}h32v2.29H0z`} />
      ))}
      <path fill="#3C3B6E" d="M0 0h13.7v14.86H0z" />
    </g>
  </svg>
);

const FlagUK = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="f-uk"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#f-uk)">
      <path fill="#012169" d="M0 0h32v32H0z" />
      <path stroke="#FFF" strokeWidth="6" d="M0 0l32 32M32 0L0 32" />
      <path stroke="#C8102E" strokeWidth="3" d="M0 0l32 32M32 0L0 32" />
      <path stroke="#FFF" strokeWidth="10" d="M16 0v32M0 16h32" />
      <path stroke="#C8102E" strokeWidth="6" d="M16 0v32M0 16h32" />
    </g>
  </svg>
);

const FlagAU = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="f-au"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#f-au)">
      <path fill="#012169" d="M0 0h32v32H0z" />
      <path stroke="#FFF" strokeWidth="4" d="M0 0l16 16M16 0L0 16" />
      <path stroke="#C8102E" strokeWidth="2" d="M0 0l16 16M16 0L0 16" />
      <path stroke="#FFF" strokeWidth="6" d="M8 0v16M0 8h16" />
      <path stroke="#C8102E" strokeWidth="3" d="M8 0v16M0 8h16" />
      <circle cx="24" cy="8" r="1.5" fill="#FFF" />
      <circle cx="24" cy="24" r="1.5" fill="#FFF" />
      <circle cx="20" cy="18" r="1.5" fill="#FFF" />
      <circle cx="28" cy="18" r="1.5" fill="#FFF" />
      <circle cx="16" cy="26" r="1.5" fill="#FFF" />
    </g>
  </svg>
);

const flags = [
  { name: 'Canada', code: 'CA', component: FlagCA },
  { name: 'United States', code: 'US', component: FlagUS },
  { name: 'United Kingdom', code: 'UK', component: FlagUK },
  { name: 'Australia', code: 'AU', component: FlagAU },
];

// ---------------------------------------------------------------------------
// Navigation Link Groups (English / en-CA)
// ---------------------------------------------------------------------------
const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'Pricing & Plans', href: '/pricing' },
  { name: 'Setup Guide', href: '/setup' },
  { name: 'Reviews & Feedback', href: '/reviews' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Blog & Guide', href: '/blog' },
  { name: 'Support', href: '/support' },
];

const legalLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Terms & Conditions', href: '/terms' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Refund & Guarantee Policy', href: '/refund-policy' },
  { name: 'DMCA Policy', href: '/dmca' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0c] text-white py-16 px-6 lg:px-12 border-t-4 border-[#D32F2F] overflow-hidden min-h-[380px]">
      {/* Structural Accent Line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D32F2F]/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Brand Column (~40% on Desktop) */}
          <div className="sm:col-span-2 lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center gap-3 mb-5 group inline-flex"
                aria-label={`${CONSTANTS.BRAND_NAME} - Home`}
              >
                <div className="w-auto h-12 flex items-center group-hover:scale-105 transition-transform duration-200">
                  <Image
                    src="/img/banner-logo.png"
                    alt={`${CONSTANTS.BRAND_NAME} Logo`}
                    width={180}
                    height={48}
                    className="object-contain h-full w-auto"
                    loading="lazy"
                  />
                </div>
              </Link>

              {/* Description (en-CA) — White text */}
              <p className="text-sm md:text-base font-bold text-white max-w-sm leading-relaxed mb-5">
                Experience the future of Canadian television with{" "}
                <strong className="text-[#D32F2F]">{CONSTANTS.BRAND_NAME}</strong>.
                Delivering premium 4K IPTV streams to households across Toronto, Vancouver, Montreal, Calgary, and beyond — with over 20,000 live channels and 60,000+ movies & series.
              </p>

              {/* Coverage Focus Badge — Canada First 🍁 */}
              <div className="inline-flex items-center flex-wrap gap-2 sm:gap-3 py-1.5 px-3 mb-6 rounded-full bg-white/[0.06] border border-white/15 w-fit">
                <span className="text-[10px] uppercase font-black tracking-wider text-white/70 shrink-0">
                  Serving:
                </span>
                <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 flex-wrap">
                  {flags.map((flag) => {
                    const FlagComp = flag.component;
                    return (
                      <div
                        key={flag.code}
                        className="flex items-center gap-1 group cursor-default"
                        title={flag.name}
                      >
                        <FlagComp />
                        <span className="text-[10px] font-black uppercase text-white group-hover:text-[#D32F2F] transition-colors">
                          {flag.code}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Social Icons — White icons */}
            <div className="flex items-center gap-3">
              <a
                href={CONSTANTS.SOCIALS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow ${CONSTANTS.BRAND_NAME} on Twitter`}
                className="group w-10 h-10 rounded-full bg-white/[0.06] border border-white/15 flex items-center justify-center hover:bg-[#D32F2F] hover:border-[#D32F2F] transition-all duration-300 active:scale-95"
              >
                <Twitter className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" />
              </a>

              <a
                href={CONSTANTS.SOCIALS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow ${CONSTANTS.BRAND_NAME} on Instagram`}
                className="group w-10 h-10 rounded-full bg-white/[0.06] border border-white/15 flex items-center justify-center hover:bg-[#D32F2F] hover:border-[#D32F2F] transition-all duration-300 active:scale-95"
              >
                <Instagram className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" />
              </a>

              <a
                href={CONSTANTS.SOCIALS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow ${CONSTANTS.BRAND_NAME} on Facebook`}
                className="group w-10 h-10 rounded-full bg-white/[0.06] border border-white/15 flex items-center justify-center hover:bg-[#D32F2F] hover:border-[#D32F2F] transition-all duration-300 active:scale-95"
              >
                <Facebook className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Navigation (~20% on Desktop) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-black mb-5 tracking-widest uppercase text-sm border-b-2 border-[#D32F2F] pb-1 inline-block">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm font-bold">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/90 hover:text-[#D32F2F] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Channel Packages (~20% on Desktop) */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-black mb-5 tracking-widest uppercase text-sm border-b-2 border-[#D32F2F] pb-1 inline-block">
              Channel Packages
            </h3>
            <ul className="space-y-3 text-sm font-bold">
              {channelsData.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/channels/${category.slug}`}
                    className="text-white/90 hover:text-[#D32F2F] transition-colors block"
                  >
                    {category.name.replace(/\s*\([^)]*\)/g, "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal (~20% on Desktop) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-black mb-5 tracking-widest uppercase text-sm border-b-2 border-[#D32F2F] pb-1 inline-block">
              Legal
            </h3>
            <ul className="space-y-3 text-sm font-bold">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/90 hover:text-[#D32F2F] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Payment Options & Copyright */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/70 font-bold text-center md:text-left">
          © {new Date().getFullYear()} {CONSTANTS.BRAND_NAME}. All rights reserved. Made in Canada 🍁
        </p>

        <div className="flex items-center gap-3 flex-wrap justify-center">
          {CONSTANTS.PAYMENT_METHODS.map((item) => (
            <div
              key={item.name}
              className="relative h-9 w-14 shrink-0 rounded-lg border border-white/15 bg-white/[0.06] backdrop-blur-sm flex items-center justify-center hover:border-[#D32F2F]/60 hover:bg-[#D32F2F]/10 transition-all duration-300"
              title={item.name}
            >
              <Image
                src={item.icon}
                alt={item.name}
                fill
                className="object-contain p-1 opacity-90 hover:opacity-100 transition-opacity"
                loading="lazy"
                sizes="56px"
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}