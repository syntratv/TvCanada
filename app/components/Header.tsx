'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { CONSTANTS } from '@/lib/seo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scrolling when mobile menu drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('mobile-menu-open');
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isOpen]);

  // Close mobile navigation drawer on route transition
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Setup', href: '/setup' },
    { name: 'Blog', href: '/blog' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0a0c]/95 backdrop-blur-md border-b border-[#D32F2F]/30 py-2.5 shadow-2xl'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Brand Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center group" aria-label={`${CONSTANTS.BRAND_NAME} Home`}>
                <div className="h-10 flex items-center group-hover:scale-105 transition-transform duration-200">
                  <Image
                    src="/img/banner-logo.png"
                    alt={`${CONSTANTS.BRAND_NAME} - Best IPTV Provider Canada Logo`}
                    width={160}
                    height={40}
                    className="object-contain h-full w-auto"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Pill */}
            <nav className="hidden lg:block" aria-label="Main Navigation">
              <ul className="flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200 shadow-lg">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={`font-black uppercase tracking-wider text-xs xl:text-sm transition-all duration-200 px-4 py-2 rounded-full inline-block ${
                          active
                            ? 'bg-[#D32F2F] text-[#f2ebeb] shadow-md'
                            : 'text-slate-900 hover:text-[#D32F2F] hover:bg-red-50'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/pricing"
                className="px-6 py-2.5 rounded-full border-2 border-[#D32F2F] bg-[#f2ebeb] text-[#D32F2F] font-black tracking-widest uppercase text-xs xl:text-sm hover:bg-[#D32F2F] hover:text-[#f2ebeb] transition-all duration-200 shadow-md active:scale-95 hover:scale-105"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile / Tablet Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#f2ebeb] p-2.5 rounded-xl bg-white/5 border border-white/10 focus:outline-none z-50 relative active:scale-95 transition-transform"
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6 text-[#f2ebeb]" /> : <Menu className="w-6 h-6 text-[#f2ebeb]" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Overlay Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#0a0a0c]/98 backdrop-blur-2xl transition-all duration-300 lg:hidden flex flex-col justify-center items-center ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <div className="w-full max-w-sm px-6 flex flex-col items-center gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`w-full text-center py-4 rounded-2xl text-lg font-black tracking-widest uppercase transition-all duration-200 border ${
                isActive(link.href)
                  ? 'text-[#f2ebeb] bg-[#D32F2F] border-[#D32F2F] shadow-lg'
                  : 'text-[#f2ebeb] bg-white/5 border-white/10 hover:bg-[#D32F2F] hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="w-full pt-4">
            <Link
              href="/pricing"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-4 rounded-2xl bg-[#f2ebeb] text-[#D32F2F] border-2 border-[#D32F2F] font-black text-lg tracking-widest uppercase shadow-xl transition-all duration-200 hover:bg-[#D32F2F] hover:text-[#f2ebeb] active:scale-95"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}