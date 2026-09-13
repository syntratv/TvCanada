'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { CONSTANTS } from '@/lib/seo';
import { blogPosts } from '@/lib/blog';
import { 
  PlayCircle,
  UserCheck,
  BookOpen,
  Star, 
  ShieldCheck, 
  Zap, 
  Download, 
  CreditCard, 
  CheckCircle2, 
  MonitorSmartphone, 
  Tv2, 
  Globe, 
  Cpu, 
  ArrowRight, 
  Award, 
  Lock, 
  ThumbsUp, 
  Users, 
  Server, 
  Film, 
  Trophy, 
  Calendar, 
  Database, 
  Tv, 
  Volume2, 
  Activity, 
  BarChart, 
  Medal, 
  LifeBuoy,
  Shield,
  Settings,
  Check,
  Smartphone,
  Flame,
  Radio
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from './components/AnimatedSection';
import AnimatedCounter from './components/AnimatedCounter';
import TargetCountries from './components/TargetCountries';
import ShareButtons from './components/ShareButtons';

// Lazy load below-the-fold components for optimized Core Web Vitals
const PricingSection = dynamic(() => import('./components/PricingSection'), {
  loading: () => (
    <div className="min-h-[600px] flex items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-red-600 border-t-transparent" />
    </div>
  ),
});

const MovieSlider = dynamic(() => import('./components/MovieSlider'), {
  loading: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="aspect-[2/3] bg-[#121214] rounded-2xl animate-pulse" />
      ))}
    </div>
  ),
});

const PartnerSlider = dynamic(() => import('./components/PartnerSlider'), {
  loading: () => <div className="h-32 bg-transparent max-w-7xl mx-auto" />,
});

const GlobalServerMap = dynamic(() => import('./components/GlobalServerMap'), {
  loading: () => <div className="h-[400px] bg-[#121214] rounded-3xl animate-pulse max-w-7xl mx-auto" />,
});

const FAQ = dynamic(() => import('./components/FAQ'), {
  loading: () => (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-red-600 border-t-transparent" />
    </div>
  ),
});

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0c] text-slate-100 overflow-hidden">
      

    {/* Hero Section */}
    <section className="relative px-6 py-24 md:py-40 overflow-hidden flex flex-col items-center justify-center text-center min-h-screen w-full bg-[#08080A]">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/background.webp"
          alt="best iptv canada 4k ultra hd streaming service backdrop"
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center brightness-[0.22]"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08080A]/20 via-[#08080A]/10 to-[#08080A]/20" />
      </div>
      
      <FadeIn className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center my-auto w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#ef2129]/20 border border-[#D32F2F]/30 px-5 py-2 rounded-full mb-6 backdrop-blur-md">
          <Award className="w-4 h-4 text-[#D32F2F]" />
          <span className="text-[#FAFAFA] font-extrabold text-xs uppercase tracking-widest flex items-center gap-1.5">
           Rated #1 Canadian IPTV Provider
          </span>
        </div>

        {/* 2-Line Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase text-[#f2ebeb] mb-6 leading-none break-words">
          BEST IPTV CANADA <br />
          <span className="text-[#ef2129]">STREAMING SERVICE</span>
        </h1>

        {/* Description (45 Words) */}
        <p className="text-base sm:text-lg md:text-xl text-[#FAFAFA]/80 max-w-3xl mx-auto mb-10 font-medium leading-relaxed px-2">
          Experience premier entertainment with the <strong>best iptv canada</strong> platform. Enjoy instant access to 20,000+ live channels, Sportsnet, TSN, local broadcasts, and 60,000+ VOD movies in 4K Ultra HD quality. Powered by anti-freeze servers, start your <strong>iptv canada</strong> subscription today with CAD ($) pricing.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md sm:max-w-xl mx-auto px-4">
          <Link 
            href="/pricing" 
            className="w-full sm:w-auto text-center whitespace-nowrap py-3.5 px-8 rounded-full bg-[#ef2129] text-[#f2ebeb] font-black text-sm hover:bg-[#ef2129] transition-all hover:scale-105 uppercase tracking-wider shrink-0 shadow-lg shadow-[#D32F2F]/30 border border-[#ef2129]"
          >
            Get Subscription Now
          </Link>
          <Link 
            href="/free-trial" 
            className="w-full sm:w-auto text-center whitespace-nowrap py-3.5 px-8 rounded-full bg-[#1A1A1E]/80 text-[#f2ebeb] border border-[#FAFAFA]/20 font-black text-sm hover:bg-[#FAFAFA]/10 transition-all hover:scale-105 uppercase tracking-wider flex items-center justify-center gap-2 shrink-0 backdrop-blur-md"
          >
            <PlayCircle className="w-5 h-5 text-[#D32F2F] shrink-0" /> Claim Free Trial
          </Link>
        </div>
        
        {/* Feature Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs md:text-sm text-[#FAFAFA] font-bold uppercase tracking-widest bg-[#FAFAFA]/5 backdrop-blur-md px-8 py-4 rounded-3xl border border-[#FAFAFA]/10 shadow-2xl">
          <span className="flex items-center gap-2"><Zap className="w-5 h-5 text-[#D32F2F]" /> Real 4K & FHD Quality</span>
          <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-[#D32F2F]" /> 99.99% Uptime Guarantee</span>
          <span className="flex items-center gap-2"><Activity className="w-5 h-5 text-[#D32F2F]" /> Anti-Freeze Technology</span>
        </div>
      </FadeIn>
    </section>



      {/* Partner Slider Section */}
      <div className="min-h-[128px]">
        {isMounted ? <PartnerSlider /> : <div className="h-32 bg-transparent" />}
      </div>



      {/* 3-Step Setup Section */}
      <section className="py-28 bg-[#f2ebeb] w-full relative overflow-hidden">
        {/* Light Ambient Pattern Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#D32F2F_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.06] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <FadeIn>
            <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 bg-[#D32F2F]/10 border border-[#D32F2F]/25 px-4 py-2 rounded-full mb-6 shadow-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-[#D32F2F] animate-pulse" />
                <span className="text-[#ef2129] font-black text-xs uppercase tracking-widest">
                  Fast 5-Minute Setup Guide
                </span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#1A1A1E] tracking-tight uppercase leading-[1.05]">
                START STREAMING IN <br className="hidden sm:block" />
                <span className="text-[#D32F2F] relative inline-block mt-1">
                  3 EASY STEPS
                  <span className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#D32F2F]/30 to-transparent rounded-full" />
                </span>
              </h2>
              
              <p className="text-[#1A1A1E]/80 text-base sm:text-lg mt-6 font-semibold max-w-2xl leading-relaxed">
                Follow our quick onboarding process to activate your <strong>best iptv canada</strong> playlist on Amazon Firestick, Smart TV, or mobile device in minutes.
              </p>
            </div>
          </FadeIn>
          
          {/* Step Cards Grid - Black Cards with Red Accents */}
          <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 relative">
            
            {/* Step 1 */}
            <FadeInItem className="group relative z-10 flex flex-col justify-between bg-[#0A0A0C] text-[#f2ebeb] rounded-[2.5rem] p-8 sm:p-10 border-2 border-[#D32F2F] shadow-[0_15px_35px_rgba(211,47,47,0.2)] hover:border-[#ef2129] hover:shadow-[0_25px_50px_rgba(211,47,47,0.35)] hover:-translate-y-2.5 transition-all duration-300">
              <div>
                {/* Card Top Row: Red Icon Block + Number Badge */}
                <div className="flex items-center justify-between mb-8 relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#D32F2F] text-[#f2ebeb] shadow-lg shadow-[#D32F2F]/40 border border-[#ef2129] group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <CreditCard className="w-8 h-8" />
                  </div>
                  
                  <span className="text-5xl font-black text-[#f2ebeb] bg-[#D32F2F] px-4 py-1 rounded-2xl shadow-md tracking-tight border border-[#ef2129]">
                    01
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#f2ebeb] bg-[#ef2129] px-3.5 py-1.5 rounded-full mb-4 shadow-sm border border-[#D32F2F]">
                  Step One
                </div>

                <h3 className="text-2xl font-black text-[#f2ebeb] mb-3 uppercase tracking-tight group-hover:text-[#D32F2F] transition-colors">
                  Select A Plan
                </h3>

                <p className="text-[#FAFAFA]/90 text-sm font-medium leading-relaxed mb-6">
                  Choose your preferred subscription package in CAD ($) with flexible connection limits engineered specifically for Canadian households.
                </p>

                <ul className="text-xs font-bold text-[#FAFAFA]/80 space-y-2.5 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D32F2F]" /> Multiple CAD ($) Options
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D32F2F]" /> Instant Account Activation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D32F2F]" /> Multi-Device Support
                  </li>
                </ul>
              </div>

              {/* Card Footer */}
              <div className="pt-5 border-t border-[#D32F2F]/30 flex items-center justify-between mt-auto">
                <span className="text-xs font-black text-[#FAFAFA] uppercase tracking-wider group-hover:text-[#D32F2F] transition-colors">
                  Instant Checkout
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#D32F2F] text-[#f2ebeb] flex items-center justify-center shadow-md group-hover:bg-[#ef2129] transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </FadeInItem>

            {/* Step 2 */}
            <FadeInItem className="group relative z-10 flex flex-col justify-between bg-[#0A0A0C] text-[#f2ebeb] rounded-[2.5rem] p-8 sm:p-10 border-2 border-[#D32F2F] shadow-[0_15px_35px_rgba(211,47,47,0.2)] hover:border-[#ef2129] hover:shadow-[0_25px_50px_rgba(211,47,47,0.35)] hover:-translate-y-2.5 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8 relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#D32F2F] text-[#f2ebeb] shadow-lg shadow-[#D32F2F]/40 border border-[#ef2129] group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <Download className="w-8 h-8" />
                  </div>
                  
                  <span className="text-5xl font-black text-[#f2ebeb] bg-[#D32F2F] px-4 py-1 rounded-2xl shadow-md tracking-tight border border-[#ef2129]">
                    02
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#f2ebeb] bg-[#ef2129] px-3.5 py-1.5 rounded-full mb-4 shadow-sm border border-[#D32F2F]">
                  Step Two
                </div>

                <h3 className="text-2xl font-black text-[#f2ebeb] mb-3 uppercase tracking-tight group-hover:text-[#D32F2F] transition-colors">
                  Get Credentials
                </h3>

                <p className="text-[#FAFAFA]/90 text-sm font-medium leading-relaxed mb-6">
                  Receive your M3U playlist link and Xtream Codes API access credentials directly via email instantly after payment confirmation.
                </p>

                <ul className="text-xs font-bold text-[#FAFAFA]/80 space-y-2.5 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D32F2F]" /> Automated Email Delivery
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D32F2F]" /> Xtream Codes Included
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D32F2F]" /> M3U Playlist URLs
                  </li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#D32F2F]/30 flex items-center justify-between mt-auto">
                <span className="text-xs font-black text-[#FAFAFA] uppercase tracking-wider group-hover:text-[#D32F2F] transition-colors">
                  Automated Delivery
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#D32F2F] text-[#f2ebeb] flex items-center justify-center shadow-md group-hover:bg-[#ef2129] transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </FadeInItem>

            {/* Step 3 */}
            <FadeInItem className="group relative z-10 flex flex-col justify-between bg-[#0A0A0C] text-[#f2ebeb] rounded-[2.5rem] p-8 sm:p-10 border-2 border-[#D32F2F] shadow-[0_15px_35px_rgba(211,47,47,0.2)] hover:border-[#ef2129] hover:shadow-[0_25px_50px_rgba(211,47,47,0.35)] hover:-translate-y-2.5 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8 relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#D32F2F] text-[#f2ebeb] shadow-lg shadow-[#D32F2F]/40 border border-[#ef2129] group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <Tv2 className="w-8 h-8" />
                  </div>
                  
                  <span className="text-5xl font-black text-[#f2ebeb] bg-[#D32F2F] px-4 py-1 rounded-2xl shadow-md tracking-tight border border-[#ef2129]">
                    03
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#f2ebeb] bg-[#ef2129] px-3.5 py-1.5 rounded-full mb-4 shadow-sm border border-[#D32F2F]">
                  Step Three
                </div>

                <h3 className="text-2xl font-black text-[#f2ebeb] mb-3 uppercase tracking-tight group-hover:text-[#D32F2F] transition-colors">
                  Stream Anywhere
                </h3>

                <p className="text-[#FAFAFA]/90 text-sm font-medium leading-relaxed mb-6">
                  Input credentials into your IPTV player app on Firestick, Smart TV, or mobile devices to start watching HD live TV immediately.
                </p>

                <ul className="text-xs font-bold text-[#FAFAFA]/80 space-y-2.5 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D32F2F]" /> Compatible with All Apps
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D32F2F]" /> Firestick & Smart TV Setup
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D32F2F]" /> 24/7 Canadian Support
                  </li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#D32F2F]/30 flex items-center justify-between mt-auto">
                <span className="text-xs font-black text-[#FAFAFA] uppercase tracking-wider group-hover:text-[#D32F2F] transition-colors">
                  Ready To Watch
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#D32F2F] text-[#f2ebeb] flex items-center justify-center shadow-md group-hover:bg-[#ef2129] transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </FadeInItem>

          </FadeInStagger>
        </div>
      </section>




      {/* Living Room Section */}
      <section className="w-full bg-[#0a0a0c] py-20 md:py-28 flex flex-col items-center justify-center overflow-hidden">
        <div className="w-full max-w-7xl px-4 text-center mb-8">
          <span className="mb-4 inline-flex rounded-full bg-red-600/10 border border-red-500/30 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-red-100">
            Home Cinema Experience 🍁
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white leading-none">
            BRING CINEMATIC 4K TO YOUR <span className="text-red-600">LIVING ROOM</span>
          </h2>
        </div>

        <div className="w-full bg-black/40 py-10 flex justify-center items-center transition-all duration-300">
          <div className="w-full max-w-[1100px] px-6 h-auto aspect-[5/2] flex justify-center items-center">
            <Image
              src="/img/sofa.webp"
              alt="best iptv canada service on smart tv in home cinema setting"
              width={1200}
              height={480}
              loading="lazy"
              className="h-full w-full object-contain"
              sizes="(max-width: 1100px) 100vw, 1100px"
            />
          </div>
        </div>

        <div className="w-full max-w-3xl px-4 text-center mt-10">
          <p className="text-base md:text-lg leading-relaxed text-slate-300 font-medium">
            Stream full HD and 4K channels directly on your big screen TV. Claim a risk-free trial to evaluate our channel selection, stable Canadian server speed, and premium local streaming content.
          </p>
          <div className="w-full flex justify-center mt-8">
            <Link 
              href="/pricing" 
              className="bg-red-600 px-8 py-3 text-sm font-black uppercase tracking-widest text-white hover:bg-red-700 transition-transform hover:scale-105 rounded-full shadow-xl shadow-red-600/20"
            >
              Activate Subscription Today
            </Link>
          </div>
        </div>
      </section>

      {/* Media Grid Section */}
      <section id="channels" className="pt-24 bg-[#0a0a0c] max-w-[100vw] overflow-hidden relative min-h-[400px] border-t border-white/5">
        <FadeIn className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between items-start mb-12 gap-6 relative z-10 w-full">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight leading-none">
              COMPREHENSIVE CANADIAN & GLOBAL CHANNELS
            </h2>
            <p className="text-slate-300 font-medium text-lg">
              Gain unlimited access to 20,000+ live television networks alongside 60,000+ VOD films and complete TV show box sets updated daily.
            </p>
          </div>
        </FadeIn>
        {isMounted ? (
          <MovieSlider />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-[2/3] bg-[#121214] rounded-2xl" />
            ))}
          </div>
        )}
      </section>

      <section className="max-w-7xl mx-auto px-4 w-full py-12">
        <TargetCountries />
      </section>

      {/* Pricing Section */}
      <div className="min-h-[600px] bg-[#0a0a0c]" id="pricing-section">
        {isMounted ? <PricingSection /> : <div className="h-[600px] bg-transparent" />}
      </div>


      <section className="w-full max-w-4xl mx-auto px-4 my-8 flex justify-center items-center">
        <ShareButtons />
      </section>

      {/* Trust Badges */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white text-slate-900 border border-slate-200 rounded-3xl p-8 md:p-12 shadow-2xl">
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
            <FadeInItem className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-red-600/10 border border-red-500/20 flex items-center justify-center shrink-0">
                <Lock className="w-7 h-7 text-red-600" />
              </div>
              <div>
                <div className="font-black text-slate-900 text-lg uppercase tracking-tight">Secure Payments</div>
                <p className="text-slate-600 font-medium text-xs mt-1">Encrypted checkout via Credit Card, Interac e-Transfer & Crypto</p>
              </div>
            </FadeInItem>

            <FadeInItem className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-red-600/10 border border-red-500/20 flex items-center justify-center shrink-0">
                <ThumbsUp className="w-7 h-7 text-red-600" />
              </div>
              <div>
                <div className="font-black text-slate-900 text-lg uppercase tracking-tight">7-Day Guarantee</div>
                <p className="text-slate-600 font-medium text-xs mt-1">Full customer satisfaction guarantee on all Canadian service plans</p>
              </div>
            </FadeInItem>

            <FadeInItem className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-red-600/10 border border-red-500/20 flex items-center justify-center shrink-0">
                <LifeBuoy className="w-7 h-7 text-red-600" />
              </div>
              <div>
                <div className="font-black text-slate-900 text-lg uppercase tracking-tight">24/7 Tech Support</div>
                <p className="text-slate-600 font-medium text-xs mt-1">Direct support assistance via online ticketing and email</p>
              </div>
            </FadeInItem>

            <FadeInItem className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-red-600/10 border border-red-500/20 flex items-center justify-center shrink-0">
                <Medal className="w-7 h-7 text-red-600" />
              </div>
              <div>
                <div className="font-black text-slate-900 text-lg uppercase tracking-tight">Top Server Quality</div>
                <p className="text-slate-600 font-medium text-xs mt-1">High-speed dedicated Canadian servers with anti-freeze active</p>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* Animated Statistics Section */}
      <section className="py-24 bg-[#ef2129] relative overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
              {CONSTANTS.BRAND_NAME} BY THE NUMBERS
            </h3>
            <p className="text-slate-300 text-base font-medium mt-4">
              Delivering verified performance and stable IPTV streams across Toronto, Vancouver, Montreal, Calgary, and Ottawa.
            </p>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <FadeInItem className="flex flex-col items-center p-6 bg-slate-50 text-slate-900 rounded-3xl border border-slate-200 shadow-lg">
              <span className="text-5xl md:text-7xl font-black text-red-600 mb-2">
                <AnimatedCounter value={25} suffix="K+" />
              </span>
              <span className="text-xs text-slate-600 font-extrabold uppercase tracking-widest mt-2">Active Subscribers</span>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center p-6 bg-slate-50 text-slate-900 rounded-3xl border border-slate-200 shadow-lg">
              <span className="text-5xl md:text-7xl font-black text-red-600 mb-2">
                <AnimatedCounter value={20} suffix="K+" />
              </span>
              <span className="text-xs text-slate-600 font-extrabold uppercase tracking-widest mt-2">Live TV Channels</span>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center p-6 bg-slate-50 text-slate-900 rounded-3xl border border-slate-200 shadow-lg">
              <span className="text-5xl md:text-7xl font-black text-red-600 mb-2">
                <AnimatedCounter value={60} suffix="K+" />
              </span>
              <span className="text-xs text-slate-600 font-extrabold uppercase tracking-widest mt-2">VOD Titles</span>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center p-6 bg-slate-50 text-slate-900 rounded-3xl border border-slate-200 shadow-lg">
              <span className="text-5xl md:text-7xl font-black text-red-600 mb-2">
                <AnimatedCounter value={99.9} decimals={1} suffix="%" />
              </span>
              <span className="text-xs text-slate-600 font-extrabold uppercase tracking-widest mt-2">Server Uptime</span>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>




      {/* Global Server Map */}
      <div className="min-h-[400px] bg-[#0a0a0c]">
        {isMounted ? <GlobalServerMap /> : <div className="h-[400px] bg-transparent" />}
      </div>






        {/* Benefits Section */}
        <section className="py-24 bg-[#f2ebeb] relative overflow-hidden border-t border-[#0A0A0C]/5">
          {/* Light Ambient Red Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#D32F2F_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <FadeIn className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-[#D32F2F]/10 border border-[#D32F2F]/25 px-4 py-2 rounded-full mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D32F2F] animate-pulse" />
                <span className="text-[#ef2129] font-black text-xs uppercase tracking-widest">
                  Canada's Premier Streaming Choice
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A0A0C] mb-6 uppercase tracking-tight leading-none">
                WHY SELECT OUR <span className="text-[#D32F2F]">IPTV CANADA</span> SERVICE?
              </h2>
              <p className="text-[#0A0A0C]/80 font-semibold text-lg max-w-3xl mx-auto leading-relaxed">
                Discover why thousands of Canadian cord-cutters switch to our high-performance platform for buffer-free live broadcasts, 4K streaming, and uninterrupted sports entertainment.
              </p>
            </FadeIn>

            <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {[
                { 
                  // Database / VOD SVG
                  iconSvg: (
                    <svg className="w-7 h-7 text-[#f2ebeb]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21 3.582 4 8 4s8-1.79 8-4" />
                    </svg>
                  ), 
                  title: "Massive On-Demand VOD Vault", 
                  desc: "Gain instant access to over 60,000 HD and 4K cinema releases, complete TV series box sets, and multi-language subtitle tracks. Our Canadian IPTV service updates weekly so you never miss the latest blockbuster movies or binge-worthy releases." 
                },
                { 
                  // Activity / Anti-freeze SVG
                  iconSvg: (
                    <svg className="w-7 h-7 text-[#f2ebeb]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ), 
                  title: "Anti-Freeze Server Protection", 
                  desc: "Say goodbye to lag during peak viewing hours. Our proprietary anti-freeze infrastructure load-balances server capacity across regional Canadian nodes, ensuring freeze-free performance and zero buffering for your best iptv canada subscription." 
                },
                { 
                  // Server / Infrastructure SVG
                  iconSvg: (
                    <svg className="w-7 h-7 text-[#f2ebeb]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  ), 
                  title: "Localized Canadian Servers", 
                  desc: "Engineered specifically for Canadian households, our high-speed local data centers deliver low latency feeds, instant channel switching speed, and true 4K IPTV Canada broadcast quality across every province from BC to Nova Scotia." 
                },
                { 
                  // Trophy / Sports Pass SVG
                  iconSvg: (
                    <svg className="w-7 h-7 text-[#f2ebeb]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  ), 
                  title: "Ultimate 60FPS Sports Pass", 
                  desc: "Never miss a single game with our dedicated Canadian IPTV service live sports feeds. Stream every live NHL game, NBA playoff match, Sportsnet network, TSN feed, PSL cricket tournament, and big-ticket UFC Pay-Per-View event in fluid 60fps." 
                },
                { 
                  // Calendar / EPG Guide SVG
                  iconSvg: (
                    <svg className="w-7 h-7 text-[#f2ebeb]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ), 
                  title: "7-Day EPG & Catch-Up Guide", 
                  desc: "Navigate daily broadcast listings seamlessly with our full 7-day Electronic Program Guide (EPG). Missed a live show? Use our integrated catch-up feature to rewatch your favorite local Canadian news or primetime TV broadcasts anytime." 
                },
                { 
                  // Users / Multi-device SVG
                  iconSvg: (
                    <svg className="w-7 h-7 text-[#f2ebeb]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ), 
                  title: "Multi-Device Household Connections", 
                  desc: "Power your whole home on a single account. Easily configure your IPTV subscription Canada credentials across Amazon Firestick, Android TV, Smart TVs, MAG boxes, or iOS smartphones so everyone in your home can stream simultaneously." 
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#0A0A0C] text-[#f2ebeb] rounded-[2.5rem] p-8 border-2 border-[#D32F2F] shadow-xl hover:border-[#ef2129] hover:shadow-[0_20px_45px_rgba(211,47,47,0.3)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-[#D32F2F] border border-[#ef2129] flex items-center justify-center mb-6 shadow-lg shadow-[#D32F2F]/30">
                      {item.iconSvg}
                    </div>
                    <h3 className="text-2xl font-black text-[#f2ebeb] mb-3 uppercase tracking-tight">{item.title}</h3>
                    <p className="text-[#FAFAFA]/90 font-medium text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-[#D32F2F]/30 flex items-center justify-between text-xs font-bold text-[#D32F2F]">
                    <span className="uppercase tracking-wider">Verified Feature</span>
                    <span className="w-2 h-2 rounded-full bg-[#D32F2F]" />
                  </div>
                </div>
              ))}
            </FadeInStagger>
          </div>
        </section>

        {/* Channel Categories */}
        <section className="py-24 bg-[#f2ebeb] relative border-t border-[#0A0A0C]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-[#D32F2F]/10 border border-[#D32F2F]/25 px-4 py-2 rounded-full mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D32F2F] animate-pulse" />
                <span className="text-[#ef2129] font-black text-xs uppercase tracking-widest">
                  20,000+ Live Channels
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A0A0C] mb-6 uppercase tracking-tight leading-none">
                EXPLORE OUR <span className="text-[#D32F2F]">CANADIAN IPTV</span> CATEGORIES
              </h2>
              <p className="text-[#0A0A0C]/80 font-semibold text-lg max-w-3xl mx-auto leading-relaxed">
                Our complete <strong>best iptv canada</strong> lineup offers direct access to premier North American sports networks, local Canadian broadcast stations, high-definition entertainment, and global international channels.
              </p>
            </FadeIn>

            <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  cat: "Canadian Live Sports", 
                  channels: "Stream Sportsnet, TSN, CBC Sports, Willow TV, and regional sports networks in crisp 60fps HD.", 
                  // Trophy SVG
                  iconSvg: (
                    <svg className="w-6 h-6 text-[#f2ebeb]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  )
                },
                { 
                  cat: "Local Canadian TV", 
                  channels: "Full coverage of CBC, CTV, Global TV, Citytv, TVA, Radio-Canada, and regional news broadcasts.", 
                  // TV SVG
                  iconSvg: (
                    <svg className="w-6 h-6 text-[#f2ebeb]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )
                },
                { 
                  cat: "VOD Movies & Series", 
                  channels: "Access 60,000+ updated cinema releases, original series, and full box sets from major streaming platforms.", 
                  // Film SVG
                  iconSvg: (
                    <svg className="w-6 h-6 text-[#f2ebeb]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                    </svg>
                  )
                },
                { 
                  cat: "Kids & Family Hub", 
                  channels: "Safe family entertainment including YTV, Teletoon, Treehouse, Disney Channel, and Nickelodeon.", 
                  // Shield SVG
                  iconSvg: (
                    <svg className="w-6 h-6 text-[#f2ebeb]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                },
                { 
                  cat: "US Major Networks", 
                  channels: "Unrestricted live streams for ABC, CBS, NBC, FOX, CW, HBO, Showtime, and premium starz movie feeds.", 
                  // Globe SVG
                  iconSvg: (
                    <svg className="w-6 h-6 text-[#f2ebeb]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  )
                },
                { 
                  cat: "International Feeds", 
                  channels: "Comprehensive international channels including UK, South Asian, Arabic, French, Italian, and Spanish feeds.", 
                  // Radio SVG
                  iconSvg: (
                    <svg className="w-6 h-6 text-[#f2ebeb]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                  )
                },
                { 
                  cat: "Documentary Networks", 
                  channels: "Educational content from Discovery Channel, National Geographic, History Channel, and Animal Planet.", 
                  // Document/Book SVG
                  iconSvg: (
                    <svg className="w-6 h-6 text-[#f2ebeb]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  )
                },
                { 
                  cat: "PPV & Combat Sports", 
                  channels: "Complete access to all live UFC main cards, Championship Boxing Pay-Per-Views, WWE, and AEW events.", 
                  // Flame SVG
                  iconSvg: (
                    <svg className="w-6 h-6 text-[#f2ebeb]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#0A0A0C] text-[#f2ebeb] rounded-3xl p-6 border-2 border-[#D32F2F] shadow-lg hover:border-[#ef2129] hover:shadow-[0_15px_30px_rgba(211,47,47,0.25)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#D32F2F] flex items-center justify-center shrink-0 border border-[#ef2129] shadow-md">
                        {item.iconSvg}
                      </div>
                      <h3 className="font-black text-[#f2ebeb] text-base uppercase tracking-wider">{item.cat}</h3>
                    </div>
                    <p className="text-[#FAFAFA]/90 font-semibold text-xs leading-relaxed">{item.channels}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#D32F2F]/20 flex items-center justify-between text-[10px] font-extrabold uppercase text-[#D32F2F] tracking-widest">
                    <span>HD & 4K Stream</span>
                    <span>Live</span>
                  </div>
                </div>
              ))}
            </FadeInStagger>
          </div>
        </section>





      {/* Feature Blocks */}
      <section className="bg-[#0a0a0c] py-24 border-y border-white/10 relative overflow-hidden">
        {/* Ambient Subtle Red Glow Background Elements */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#D32F2F]/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#D32F2F]/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="mx-auto max-w-7xl space-y-28 px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Block 1: 4K Quality & Infrastructure */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            
            {/* Image Block */}
            <div className="relative order-1 overflow-hidden rounded-[2.5rem] bg-[#121214] border-2 border-[#D32F2F]/30 p-3 shadow-2xl transition-all duration-500 hover:border-[#D32F2F]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem] sm:aspect-video lg:aspect-[5/4]">
                <Image
                  src="/img/image-1.webp"
                  alt="best iptv canada 4k ultra hd resolution on smart tv screen"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                <div className="absolute left-4 top-4 rounded-full bg-[#0a0a0c]/90 px-4 py-2 text-xs font-black uppercase tracking-widest text-[#f2ebeb] border border-[#D32F2F]/50 shadow-md">
                  4K Ultra HD Streaming
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-[#0a0a0c]/95 backdrop-blur-md border border-[#D32F2F]/40 p-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[340px] shadow-xl">
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D32F2F] text-[#f2ebeb] shrink-0 shadow-lg shadow-[#D32F2F]/40 border border-[#ef2129]">
                      <PlayCircle className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-base font-black uppercase text-[#f2ebeb]">Ultra-Clear Streams</p>
                      <p className="text-xs font-medium text-[#FAFAFA]/90 mt-0.5">
                        Enjoy zero-compression 4K resolution and smooth 60fps live broadcasts across Canada.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Block */}
            <FadeIn className="order-2">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#D32F2F]/15 border border-[#D32F2F]/30 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#f2ebeb]">
                <span className="w-2 h-2 rounded-full bg-[#D32F2F] animate-pulse" />
                Premium Canadian Quality 🍁
              </span>
              
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#f2ebeb] leading-[1.1] mb-6">
                EXPERIENCE UNMATCHED <br />
                <span className="text-[#D32F2F] relative inline-block mt-1">
                  4K VIDEO CLARITY
                  <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-[#D32F2F]/40 rounded-full" />
                </span>
              </h3>
              
              <p className="text-base leading-relaxed text-[#FAFAFA]/90 font-medium space-y-4">
                Switching to our high-performance server network gives you instant access to the best iptv canada solution built explicitly for Canadian households. By deploying localized server nodes across Toronto, Vancouver, and Montreal, we eliminate regional throttling and deliver crystal-clear 4K, Full HD, and 60fps streams with zero buffering.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-[#FAFAFA]/80 font-medium">
                Whether you are streaming live local news, binge-watching updated VOD movie catalogs, or catching high-bitrate live entertainment, our proprietary anti-freeze technology guarantees maximum stability across Amazon Firestick, Smart TVs, Android devices, and Apple TV.
              </p>

              {/* Feature Grid */}
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  'Anti-Freeze Bufferless Infrastructure', 
                  'All Canadian Channels in 4K & FHD', 
                  '20,000+ VOD Movies & Series Included', 
                  'Firestick, Smart TV, Android & iOS Ready'
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-[#121214] text-[#f2ebeb] border border-[#D32F2F]/30 px-4 py-3.5 text-xs font-extrabold uppercase flex items-center gap-3 shadow-md hover:border-[#D32F2F] transition-colors">
                    <div className="w-5 h-5 rounded-full bg-[#D32F2F] text-[#f2ebeb] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="w-full flex sm:inline-flex mt-8">
                <Link 
                  href="/pricing" 
                  className="w-full sm:w-auto text-center whitespace-nowrap bg-[#D32F2F] px-8 py-4 text-xs font-black uppercase tracking-widest text-[#f2ebeb] hover:bg-[#ef2129] transition-all hover:scale-105 rounded-full shrink-0 shadow-lg shadow-[#D32F2F]/30 border border-[#ef2129]"
                >
                  Get Instant Access Now
                </Link>
              </div>
            </FadeIn>

          </div>

          {/* Block 2: Live Sports & PPV */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            
            {/* Content Block */}
            <FadeIn className="order-2 lg:order-1">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#D32F2F]/15 border border-[#D32F2F]/30 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#f2ebeb]">
                <span className="w-2 h-2 rounded-full bg-[#D32F2F] animate-pulse" />
                Live Sports & PPV Broadcasting
              </span>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#f2ebeb] leading-[1.1] mb-6">
                NEVER MISS A SINGLE <br />
                <span className="text-[#D32F2F] relative inline-block mt-1">
                  LIVE MATCH & EVENT
                  <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-[#D32F2F]/40 rounded-full" />
                </span>
              </h3>

              <p className="text-base leading-relaxed text-[#FAFAFA]/90 font-medium">
                Canadian sports fans demand zero delay and maximum stream reliability. With our best iptv canada sports pass, you unlock comprehensive access to all regional Sportsnet and TSN networks, live NHL center-ice games, NBA playoffs, Premier League, PSL cricket, and big-ticket UFC Pay-Per-View events without paywall lockouts.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-[#FAFAFA]/80 font-medium">
                Our high-bitrate architecture is tuned for fast-action sports broadcasting at uninterrupted 60 frames per second. Enjoy dedicated sports servers engineered to handle peak traffic during championship games without slowdowns or blackouts.
              </p>

              {/* Feature Grid */}
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  'Full Sportsnet & TSN Local Channels', 
                  'UFC, Boxing & PPV Events Included', 
                  'Ultra-Low Latency Live 60fps Feeds', 
                  'NHL, NBA, Premier League & PSL Coverage'
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-[#121214] text-[#f2ebeb] border border-[#D32F2F]/30 px-4 py-3.5 text-xs font-extrabold uppercase flex items-center gap-3 shadow-md hover:border-[#D32F2F] transition-colors">
                    <div className="w-5 h-5 rounded-full bg-[#D32F2F] text-[#f2ebeb] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="w-full flex sm:inline-flex mt-8">
                <Link 
                  href="/psl-live-streaming" 
                  className="w-full sm:w-auto text-center whitespace-nowrap bg-[#121214] border-2 border-[#D32F2F] px-8 py-4 text-xs font-black uppercase tracking-widest text-[#f2ebeb] hover:bg-[#D32F2F] transition-all hover:scale-105 rounded-full shrink-0 shadow-lg"
                >
                  Explore Live Sports Coverage
                </Link>
              </div>
            </FadeIn>

            {/* Image Block */}
            <div className="relative order-1 overflow-hidden rounded-[2.5rem] bg-[#121214] border-2 border-[#D32F2F]/30 p-3 lg:order-2 shadow-2xl transition-all duration-500 hover:border-[#D32F2F]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem] sm:aspect-video lg:aspect-[5/4]">
                <Image
                  src="/img/bg-1.webp"
                  alt="best iptv canada live sports broadcast streaming"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                <div className="absolute left-4 top-4 rounded-full bg-[#0a0a0c]/90 px-4 py-2 text-xs font-black uppercase tracking-widest text-[#f2ebeb] border border-[#D32F2F]/50 shadow-md">
                  Live Sports Action
                </div>

                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-[#0a0a0c]/95 backdrop-blur-md border border-[#D32F2F]/40 p-4 shadow-xl">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D32F2F] text-[#f2ebeb] shadow-lg shadow-[#D32F2F]/40 border border-[#ef2129]">
                      <Trophy className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-base font-black uppercase text-[#f2ebeb]">Canadian Sports Pass</p>
                      <p className="text-xs font-extrabold uppercase tracking-widest text-[#FAFAFA]/90">
                        NHL, TSN & Sportsnet Live 60FPS
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>



      {/* Comparison Table */}
      <section className="py-24 relative overflow-hidden bg-[#ef2129]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#D32F2F]/20 px-4 py-2 rounded-full border border-[#D32F2F]/40 mb-6">
              <BarChart className="w-4 h-4 text-[#D32F2F]" />
              <span className="text-[#f2ebeb] font-extrabold text-xs uppercase tracking-wider">Service Comparison</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#f2ebeb] mb-6 uppercase tracking-tight">
              THE IPTV CANADA VS TRADITIONAL CABLE
            </h2>
            <p className="text-[#FAFAFA]/80 text-lg max-w-3xl mx-auto font-medium">
              See why thousands of Canadians are replacing traditional cable packages with our flexible, cost-effective <strong>best iptv canada</strong> service.
            </p>
          </FadeIn>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <div className="rounded-3xl border border-white/50 overflow-hidden shadow-2xl">
              <div className="grid grid-cols-3 gap-0">
                {/* Table Headers */}
                <div className="p-6 border-b border-r border-[#D32F2F]/40 bg-[#18181B]">
                  <h3 className="text-lg font-black uppercase text-[#f2ebeb]">Feature Comparison</h3>
                </div>
                <div className="p-6 border-b border-r border-[#D32F2F]/40 bg-[#D32F2F]">
                  <h3 className="text-lg font-black uppercase text-[#f2ebeb]">The IPTV Canada</h3>
                </div>
                <div className="p-6 border-b border-[#D32F2F]/40 bg-[#ef2129]">
                  <h3 className="text-lg font-black uppercase text-[#FAFAFA]/80">Canadian Cable TV</h3>
                </div>
                
                {[
                  { feature: "Monthly Cost", us: "From ~$15 CAD / month", cable: "$90 - $160 CAD per month", highlight: true },
                  { feature: "Contract Term", us: "No Contract (Cancel Anytime)", cable: "12 to 24 Month Contracts" },
                  { feature: "Live Channels", us: "20,000+ Channels", cable: "70 - 150 Channels", highlight: true },
                  { feature: "VOD Movies & Shows", us: "60,000+ Titles (Updated Daily)", cable: "Limited / Extra Pay-Per-View Fee" },
                  { feature: "4K & FHD Quality", us: "Included Standard", cable: "Extra Charge for HD/4K Box", usIcon: true },
                  { feature: "Multi-Screen Support", us: "Up to 3 Devices Simultaneously", cable: "Additional Monthly Fee Per Box", usIcon: true },
                  { feature: "Sports & PPV Events", us: "Fully Included", cable: "$20 - $40 Extra Sports Add-ons", usIcon: true },
                  { feature: "International Content", us: "100+ Countries Included", cable: "Limited Premium Bundles", highlight: true }
                ].map((row, idx) => (
                  <div key={idx} className="grid grid-cols-3 gap-0 contents">
                    {/* Column 1: Dark Charcoal Background with Bright White Text */}
                    <div className={`p-6 border-r border-b border-[#D32F2F]/20 ${idx % 2 === 0 ? 'bg-[#18181B]' : 'bg-[#27272A]'}`}>
                      <span className="text-[#f2ebeb] font-bold text-sm">{row.feature}</span>
                    </div>

                    {/* Column 2: Bright Red Background (Primary Focus) */}
                    <div className={`p-6 border-r border-b border-[#D32F2F]/40 ${idx % 2 === 0 ? 'bg-[#D32F2F]' : 'bg-[#B71C1C]'}`}>
                      {row.usIcon ? (
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#f2ebeb]" />
                          <span className="text-[#f2ebeb] font-extrabold text-sm">{row.us}</span>
                        </div>
                      ) : (
                        <span className="text-[#f2ebeb] font-black text-sm">{row.us}</span>
                      )}
                    </div>

                    {/* Column 3: Dark Red Background */}
                    <div className={`p-6 border-b border-[#D32F2F]/20 ${idx % 2 === 0 ? 'bg-[#ef2129]' : 'bg-[#7A0006]'}`}>
                      <span className="text-[#FAFAFA]/70 text-sm font-medium">{row.cable}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Comparison Cards */}
          <div className="md:hidden space-y-4">
            {[
              { feature: "Monthly Cost", us: "From ~$15 CAD/mo", cable: "$90 - $160 CAD/mo" },
              { feature: "Contract Term", us: "No Contract", cable: "12-24 Months" },
              { feature: "Live Channels", us: "20,000+ Channels", cable: "70-150 Channels" },
              { feature: "VOD Titles", us: "60,000+ VODs", cable: "Limited" },
              { feature: "4K Streaming", us: "Included", cable: "Extra Fee" },
              { feature: "Multi-Screen", us: "Up to 3 Devices", cable: "Fee per box" },
              { feature: "Live Sports & PPV", us: "Fully Included", cable: "Extra $20-$40/mo" },
              { feature: "International Feeds", us: "100+ Countries", cable: "Extra Add-ons" }
            ].map((row, idx) => (
              <div key={idx} className="bg-[#18181B] text-[#f2ebeb] rounded-3xl border border-[#D32F2F]/40 p-5 shadow-lg">
                <div className="text-center mb-3">
                  <span className="text-[#FAFAFA]/80 text-xs font-black uppercase tracking-wider">{row.feature}</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <div className="text-left bg-[#D32F2F] p-3 rounded-2xl flex-1">
                    <div className="text-[#f2ebeb] font-black text-sm">{row.us}</div>
                    <div className="text-[#FAFAFA]/90 text-[10px] font-bold uppercase">The IPTV Canada</div>
                  </div>
                  <div className="text-right bg-[#ef2129] p-3 rounded-2xl flex-1">
                    <div className="text-[#FAFAFA]/70 line-through text-sm">{row.cable}</div>
                    <div className="text-[#FAFAFA]/60 text-[10px] font-bold uppercase">Cable TV</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* Canadian Reviews Section */}
      <section className="py-24 bg-[#f2ebeb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#D32F2F]/10 px-4 py-2 rounded-full border border-[#D32F2F]/20 mb-6">
              <ShieldCheck className="w-4 h-4 text-[#D32F2F]" />
              <span className="text-[#ef2129] font-extrabold text-xs uppercase tracking-wider">Verified Customer Feedback</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1E] mb-6 uppercase tracking-tight">
              TRUSTED BY OVER <span className="text-[#D32F2F]">25,000+ CANADIANS</span>
            </h2>
            <p className="text-[#1A1A1E]/80 text-lg font-medium max-w-2xl mx-auto">
              Read verified reviews from subscribers using the <strong>best iptv canada</strong> service across Toronto, Vancouver, Calgary, Ottawa, and Montreal.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "David M.", 
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
                text: "Finally found a stable service for watching Toronto Maple Leafs and local sports channels without buffering. The 4K picture quality on Firestick is sharp.", 
                role: "Toronto, ON" 
              },
              { 
                name: "Sarah K.", 
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
                text: "Canceled my expensive cable package last month. Setup took less than five minutes on my Samsung TV, and the customer support team responded fast.", 
                role: "Vancouver, BC" 
              },
              { 
                name: "Marc L.", 
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
                text: "Fantastic selection of both English and French Canadian networks. The VOD movie library with subtitles makes this the best IPTV investment.", 
                role: "Montreal, QC" 
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-[#FAFAFA] text-[#1A1A1E] rounded-3xl p-8 border border-[#D32F2F]/20 shadow-xl transition-all hover:-translate-y-2 hover:border-[#D32F2F] hover:shadow-2xl duration-300 flex flex-col justify-between">
                <div>
                  {/* Top Bar: Profile Image, Name, Location & Stars */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-2xl object-cover border-2 border-[#D32F2F] shadow-md shrink-0" 
                      />
                      <div>
                        <div className="font-black text-[#1A1A1E] text-base uppercase tracking-tight flex items-center gap-1.5">
                          {testimonial.name}
                          <UserCheck className="w-4 h-4 text-[#D32F2F]" />
                        </div>
                        <div className="text-[#ef2129] text-xs font-bold uppercase tracking-wider">{testimonial.role}</div>
                      </div>
                    </div>

                    {/* 5-Star Rating */}
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#D32F2F] text-[#D32F2F]" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-[#1A1A1E]/80 font-medium text-base leading-relaxed italic mb-6">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Card Footer */}
                <div className="border-t border-[#D32F2F]/15 pt-4 flex items-center justify-between">
                  <span className="text-[11px] font-black text-[#ef2129] uppercase tracking-wider flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D32F2F]" /> Verified Subscriber
                  </span>
                  <span className="text-[11px] font-bold text-[#1A1A1E]/50 uppercase">Canada</span>
                </div>
              </div>
            ))}
          </FadeInStagger>
        </div>
      </section>



      {/* Supported Devices Section */}
      <section className="py-24 bg-[#08080A] w-full relative overflow-hidden">
        {/* Ambient Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D32F2F]/10 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d32f2f0a_1px,transparent_1px),linear-gradient(to_bottom,#d32f2f0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#ef2129]/20 px-4 py-2 rounded-full border border-[#D32F2F]/30 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-[#D32F2F] animate-pulse" />
              <span className="text-[#FAFAFA] font-extrabold text-xs uppercase tracking-widest">Universal Hardware Compatibility</span>
            </div>
            
            {/* Pure White Section Title */}
            <h2 className="text-4xl md:text-5xl font-black text-[#f2ebeb] mb-6 uppercase tracking-tight max-w-4xl mx-auto leading-tight">
              COMPATIBLE WITH ALL IPTV PLAYERS & HARDWARE PLATFORMS
            </h2>
            
            {/* Expanded Description Content */}
            <p className="text-[#FAFAFA]/80 text-lg max-w-3xl mx-auto font-medium leading-relaxed">
              Enjoy instant zero-configuration streaming across all your favorite devices. Our servers fully support standard M3U playlists, Xtream Codes APIs, and specialized portals across Android, iOS, Smart TVs, and dedicated set-top boxes.
            </p>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {[
              { 
                tag: "Amazon Firestick & Fire TV", 
                desc: "Fire OS, Fire TV Cube & 4K Max Sticks", 
                detail: "Optimized for TiviMate, IPTV Smarters Pro, and XCIPTV apps with 4K UHD fast-zapping.",
                icon: Zap, 
                code: "01" 
              },
              { 
                tag: "Smart TVs (Samsung & LG)", 
                desc: "Samsung Tizen OS & LG webOS Ecosystems", 
                detail: "Direct integration with Smart IPTV, IBO Player, SS IPTV, and Nanomid without extra hardware.",
                icon: Tv2, 
                code: "02" 
              },
              { 
                tag: "Android TV & Streaming Boxes", 
                desc: "Nvidia Shield, Google TV & Android Boxes", 
                detail: "Full hardware decoding support for ultra-fast channel switching and 60fps live sports playback.",
                icon: Cpu, 
                code: "03" 
              },
              { 
                tag: "Apple TV, iPhone & iPad", 
                desc: "tvOS & iOS Operating Systems", 
                detail: "Seamless performance on GSE Smart IPTV, IPTV Smarters, and iPlayTV with iCloud syncing.",
                icon: Smartphone, 
                code: "04" 
              },
              { 
                tag: "Windows PCs & Mac Computers", 
                desc: "Windows 10/11, macOS & Linux Workstations", 
                detail: "Stream directly through VLC Media Player, Web Player links, or dedicated desktop IPTV software.",
                icon: MonitorSmartphone, 
                code: "05" 
              },
              { 
                tag: "MAG & Formuler Set-Top Boxes", 
                desc: "Stalker Portal, MAG 254/322 & Formuler Z11", 
                detail: "Native Stalker portal MAC address integration with full Electronic Program Guide (EPG) support.",
                icon: ShieldCheck, 
                code: "06" 
              },
            ].map((device) => {
              const Icon = device.icon;
              return (
                <div 
                  key={device.tag} 
                  className="group relative bg-[#f2ebeb] text-[#1A1A1E] border border-[#D32F2F]/30 rounded-3xl p-7 flex flex-col justify-between gap-5 hover:border-[#D32F2F] hover:shadow-[0_12px_35px_rgba(211,47,47,0.25)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer shadow-xl overflow-hidden"
                >
                  {/* Top Red Accent Indicator Line */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#D32F2F] opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Header Row: Icon, Title, and Hardware Code */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#D32F2F] border border-[#ef2129] flex items-center justify-center shrink-0 group-hover:bg-[#ef2129] group-hover:scale-105 transition-all duration-300 shadow-md">
                        <Icon className="w-7 h-7 text-[#f2ebeb] transition-all duration-300" />
                      </div>
                      <div>
                        <h3 className="text-base font-black text-[#1A1A1E] uppercase tracking-wide leading-tight">
                          {device.tag}
                        </h3>
                        <p className="text-xs font-bold text-[#D32F2F] mt-0.5">
                          {device.desc}
                        </p>
                      </div>
                    </div>

                    {/* Code Badge */}
                    <span className="text-xs font-black text-[#f2ebeb] bg-[#D32F2F] border border-[#ef2129] px-2.5 py-1 rounded-xl group-hover:bg-[#ef2129] transition-all duration-300 shrink-0">
                      {device.code}
                    </span>
                  </div>

                  {/* Expanded Detail Body Content */}
                  <p className="text-xs font-semibold text-[#1A1A1E]/75 leading-relaxed pt-2 border-t border-[#1A1A1E]/10">
                    {device.detail}
                  </p>
                </div>
              );
            })}
          </FadeInStagger>
        </div>
      </section>



      {/* FAQ Section */}
      <div className="min-h-[400px] bg-[#0a0a0c]">
        {isMounted ? <FAQ /> : <div className="h-[400px] bg-transparent" />}
      </div>



      {/* Blog Section */}
      <section className="py-24 bg-[#f2ebeb] w-full relative overflow-hidden">
        {/* Ambient Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#D32F2F_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <FadeIn className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#D32F2F]/10 px-4 py-2 rounded-full border border-[#D32F2F]/20 mb-6">
                <BookOpen className="w-4 h-4 text-[#D32F2F]" />
                <span className="text-[#ef2129] font-extrabold text-xs uppercase tracking-widest">Tutorials & Insights</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1E] mb-4 uppercase tracking-tight">
                LATEST CANADIAN <span className="text-[#D32F2F]">GUIDES & NEWS</span>
              </h2>
              <p className="text-[#1A1A1E]/70 text-lg font-medium max-w-2xl leading-relaxed">
                Master your entertainment setup with our step-by-step app tutorials, troubleshooting guides, and IPTV speed optimization strategies.
              </p>
            </div>
            
            <div className="flex shrink-0">
              <Link 
                href="/blog" 
                className="whitespace-nowrap px-7 py-4 rounded-2xl bg-[#D32F2F] text-[#f2ebeb] font-black hover:bg-[#ef2129] transition-all duration-300 flex items-center gap-3 group shrink-0 shadow-xl border border-[#ef2129] hover:shadow-[0_10px_25px_rgba(211,47,47,0.3)]"
              >
                <span className="uppercase text-xs tracking-wider">Explore All Articles</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {blogPosts.slice(0, 3).map((post) => (
              <div key={post.id} className="group cursor-pointer h-full">
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <div className="bg-[#FAFAFA] text-[#1A1A1E] rounded-3xl p-4 border-2 border-[#D32F2F]/15 shadow-md hover:border-[#D32F2F] hover:shadow-[0_20px_40px_rgba(211,47,47,0.18)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full relative">
                    
                    <div>
                      {/* Image Container with Rounded Inset */}
                      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#1A1A1E]">
                        <Image 
                          src={post.image} 
                          alt={`${post.title} - Best IPTV Canada Setup Guide`} 
                          width={800} 
                          height={450} 
                          loading="lazy" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                          sizes="(max-width: 768px) 100vw, 33vw" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#ef2129]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                        
                        {/* Floating Badges */}
                        <div className="absolute top-3 left-3 flex items-center gap-2">
                          <span className="px-3 py-1 bg-[#D32F2F] text-[#f2ebeb] text-[10px] font-black uppercase tracking-widest rounded-lg shadow-md border border-[#ef2129]">
                            {post.author || "Canada Guide"}
                          </span>
                        </div>

                        <div className="absolute bottom-3 right-3">
                          <span className="px-2.5 py-1 bg-[#1A1A1E]/80 backdrop-blur-md text-[#f2ebeb] text-[10px] font-extrabold uppercase tracking-wider rounded-lg border border-[#f2ebeb]/20">
                            5 Min Read
                          </span>
                        </div>
                      </div>

                      {/* Body Content */}
                      <div className="p-4 pt-6">
                        <h3 className="text-lg font-black text-[#1A1A1E] mb-2.5 group-hover:text-[#D32F2F] transition-colors tracking-tight line-clamp-2 uppercase leading-snug">
                          {post.title}
                        </h3>

                        <p className="text-[#1A1A1E]/70 text-xs font-semibold line-clamp-3 leading-relaxed mb-4">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Action Button Footer */}
                    <div className="px-4 pb-3 pt-3 border-t border-[#D32F2F]/10 flex items-center justify-between mt-auto">
                      <span className="inline-flex items-center gap-2 text-xs font-black text-[#ef2129] uppercase tracking-wider group-hover:text-[#D32F2F] transition-colors">
                        Read Article
                      </span>
                      
                      {/* Glowing Arrow Button */}
                      <div className="w-9 h-9 rounded-xl bg-[#D32F2F]/10 border border-[#D32F2F]/30 flex items-center justify-center text-[#D32F2F] group-hover:bg-[#D32F2F] group-hover:text-[#f2ebeb] group-hover:scale-105 transition-all duration-300 shadow-sm">
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>

                  </div>
                </Link>
              </div>
            ))}
          </FadeInStagger>
        </div>
      </section>




      {/* Final CTA Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#f2ebeb] w-full">
        {/* Ambient Background Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#D32F2F_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] border-2 border-[#D32F2F]/20 bg-[#f2ebeb] shadow-2xl">
            {/* Background Glow Accents */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D32F2F]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#ef2129]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Top Accent Indicator */}
            <div className="h-2 w-full bg-gradient-to-r from-[#ef2129] via-[#D32F2F] to-[#ef2129]" />

            <FadeIn className="relative z-10 px-5 py-10 text-center sm:px-8 sm:py-14 md:px-12 md:py-16 lg:px-16 lg:py-20">
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D32F2F]/30 bg-[#D32F2F]/10 px-4 py-2 backdrop-blur-md">
                <ShieldCheck className="h-4 w-4 text-[#D32F2F]" />
                <span className="text-xs font-black uppercase tracking-widest text-[#ef2129] flex items-center gap-1.5">
                 Premium Canadian IPTV
                </span>
              </div>
              
              {/* Main Title */}
              <h2 className="mx-auto max-w-5xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase text-[#1A1A1E] leading-[1.05] mb-6">
                UPGRADE YOUR CANADIAN <br />
                <span className="text-[#D32F2F]">TV EXPERIENCE TODAY</span>
              </h2>
              
              {/* Subtitle */}
              <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base md:text-lg font-medium leading-relaxed text-[#1A1A1E]/80">
                Get instant access to live sports networks, Canadian broadcast channels, and 4K VOD movies. Enjoy instant setup on all streaming platforms across Canada with CAD ($) pricing options.
              </p>
              
              {/* Stats Grid */}
              <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {[
                  ['20K+', 'Live Channels'],
                  ['4K Ultra', 'Stream Quality'],
                  ['99.99%', 'Server Uptime'],
                  ['24/7', 'Instant Support'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl sm:rounded-3xl border border-[#D32F2F]/20 bg-[#FAFAFA] p-4 shadow-sm hover:border-[#D32F2F] transition-colors">
                    <div className="text-2xl sm:text-3xl font-black text-[#D32F2F]">{value}</div>
                    <div className="mt-1 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#1A1A1E]/70">{label}</div>
                  </div>
                ))}
              </div>
              
              {/* Action Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
                <Link 
                  href="/pricing" 
                  className="w-full sm:w-auto text-center whitespace-nowrap rounded-2xl bg-[#D32F2F] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-[#f2ebeb] hover:bg-[#ef2129] transition-all hover:scale-105 shrink-0 shadow-lg shadow-[#D32F2F]/25 border border-[#ef2129]"
                >
                  Choose Your Plan
                </Link>
                <Link 
                  href="/firestick-setup" 
                  className="w-full sm:w-auto text-center whitespace-nowrap inline-flex items-center justify-center gap-2 rounded-2xl border border-[#D32F2F]/30 bg-[#FAFAFA] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-[#1A1A1E] hover:bg-[#D32F2F]/10 transition-all hover:scale-105 shrink-0 shadow-sm"
                >
                  <Settings className="h-4 w-4 text-[#D32F2F] shrink-0" /> Firestick Setup Guide
                </Link>
              </div>
              
              {/* Trust Note */}
              <p className="mt-8 text-[11px] sm:text-xs font-black text-[#ef2129] uppercase tracking-wider">
                Instant Activation • No Long-Term Contracts • 24/7 Canadian Support
              </p>
            </FadeIn>
          </div>
        </div>
      </section>



    </div>
  );
}