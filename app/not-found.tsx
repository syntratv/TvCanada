'use client';

import Link from 'next/link';
import { CONSTANTS } from '@/lib/seo';
import { Home, ArrowLeft, Search, Tv, Film } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden justify-center items-center">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/error-404.webp"
          alt="RealMIPTV - Page Not Found Background"
          className="w-full h-full object-cover opacity-95 brightness-50"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1920&auto=format";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1D]/90 via-[#1A1A1D]/70 to-[#1A1A1D]/90" />
      </div>

      {/* Animated Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#CA1421]/10 rounded-full blur-[120px] animate-pulse" />

      {/* Main Container Perfectly Centered Vertically & Horizontally */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center">
        <div className="max-w-3xl mx-auto">
          
          {/* 404 Number Layout Container */}
          <div className="mb-6">
            <div className="text-[120px] sm:text-[160px] md:text-[200px] font-black leading-none tracking-tighter uppercase select-none">
              <span className="text-[#CA1421]">4</span>
              <span className="text-[#F1E8DB]">0</span>
              <span className="text-[#DB4439]">4</span>
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F1E8DB] mb-4 uppercase tracking-tighter">
            Page Not Found
          </h1>
          
          <div className="w-24 h-1.5 bg-[#CA1421] mx-auto mb-8 rounded-full" />
          
          {/* Quick Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
            <Link
              href="/"
              className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#1A1A1D] border-2 border-white/5 hover:border-[#CA1421] transition-all duration-300"
            >
              <Home className="w-5 h-5 text-[#CA1421] group-hover:scale-110 transition-transform" />
              <span className="text-[#F1E8DB] text-xs font-black uppercase tracking-wider">Home</span>
            </Link>
            
            <Link
              href="/pricing"
              className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#1A1A1D] border-2 border-white/5 hover:border-[#CA1421] transition-all duration-300"
            >
              <Tv className="w-5 h-5 text-[#CA1421] group-hover:scale-110 transition-transform" />
              <span className="text-[#F1E8DB] text-xs font-black uppercase tracking-wider">Pricing</span>
            </Link>
            
            <Link
              href="/installatie"
              className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#1A1A1D] border-2 border-white/5 hover:border-[#CA1421] transition-all duration-300"
            >
              <Film className="w-5 h-5 text-[#CA1421] group-hover:scale-110 transition-transform" />
              <span className="text-[#F1E8DB] text-xs font-black uppercase tracking-wider">Setup</span>
            </Link>
            
            <Link
              href="/kennisbank"
              className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#1A1A1D] border-2 border-white/5 hover:border-[#CA1421] transition-all duration-300"
            >
              <Search className="w-5 h-5 text-[#CA1421] group-hover:scale-110 transition-transform" />
              <span className="text-[#F1E8DB] text-xs font-black uppercase tracking-wider">Blog</span>
            </Link>
          </div>

          {/* Main Action Control Elements */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#CA1421] text-[#F1E8DB] font-black uppercase tracking-widest text-sm transition-transform hover:scale-105 shrink-0 shadow-2xl"
            >
              <ArrowLeft className="w-4 h-4 shrink-0" />
              Back to Home
            </Link>
            
            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#F1E8DB] border-2 border-[#CA1421] text-[#CA1421] font-black uppercase tracking-widest text-sm transition-transform hover:scale-105 shrink-0 shadow-2xl"
            >
              View Plans
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}