'use client';

import { useEffect, useState, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

function LoaderContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Finish loading animation whenever the route or search params change
    setLoading(false);
  }, [pathname, searchParams]);

  useEffect(() => {
    // Intercept internal link clicks to trigger top loading bar
    const handleAnchorClick = (event: MouseEvent) => {
      // Ignore modified clicks (Ctrl, Cmd, Shift, Alt or middle click)
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = (event.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      const targetAttr = target.getAttribute('target');
      const downloadAttr = target.getAttribute('download');

      // Only trigger for internal navigations (not external, hash links, downloads, or target="_blank")
      if (
        href &&
        href.startsWith('/') &&
        !href.startsWith('/#') &&
        targetAttr !== '_blank' &&
        downloadAttr === null &&
        href !== pathname
      ) {
        setLoading(true);
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none" aria-hidden="true">
      {/* Top Brand Progress Bar */}
      <div className="h-1.5 w-full bg-[#0a0a0c]/60 overflow-hidden shadow-[0_0_18px_rgba(211,47,47,0.9)]">
        {/* Sliding shimmer gradient */}
        <div className="h-full w-full bg-gradient-to-r from-[#D32F2F] via-[#9A0007] to-[#f2ebeb] origin-left animate-[loadingShimmer_1.4s_ease-in-out_infinite]" />
      </div>

      {/* Inline keyframes for shimmer — no tailwind config change needed */}
      <style jsx>{`
        @keyframes loadingShimmer {
          0% {
            transform: translateX(-100%) scaleX(0.6);
            opacity: 0.6;
          }
          50% {
            transform: translateX(0%) scaleX(1);
            opacity: 1;
          }
          100% {
            transform: translateX(100%) scaleX(0.6);
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
}

export default function RouteLoader() {
  return (
    <Suspense fallback={null}>
      <LoaderContent />
    </Suspense>
  );
}