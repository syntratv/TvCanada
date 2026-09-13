'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useMemo } from 'react';

// ---------------------------------------------------------------------------
// IMAGE COUNTS — matched to actual files in /public/img/sliders/
// ---------------------------------------------------------------------------
const MOVIES_COUNT = 16;
const SERIES_COUNT = 16;
const SPORTS_COUNT = 14;

// ---------------------------------------------------------------------------
// UNIQUE TITLES — one per image, so every alt text is 100% unique
// ---------------------------------------------------------------------------
const MOVIE_TITLES = [
  'Latest Action Blockbuster',
  'Top-Rated Drama Film',
  '4K Sci-Fi Cinema Release',
  'Award-Winning Thriller',
  'Family Adventure Movie',
  'Epic Fantasy Feature',
  'Bestselling Comedy Film',
  'Classic Cinema Remaster',
  'International Box Office Hit',
  'Superhero Movie Premiere',
  'Suspense Mystery Film',
  'Hollywood Romance Release',
  'Historical War Drama',
  'Animated Feature Film',
  'Crime Documentary Feature',
  'Independent Cinema Pick',
];

const SERIES_TITLES = [
  'Trending Drama Series',
  'Binge-Worthy Crime Show',
  'Award-Winning TV Series',
  'Sci-Fi Streaming Series',
  'Comedy Sitcom Boxset',
  'Popular Fantasy Series',
  'Reality TV Show Collection',
  'Mystery Thriller Series',
  'Historical Period Drama',
  'Medical Drama Series',
  'Animated Series for Adults',
  'Romantic Drama Boxset',
  'Political Thriller Show',
  'Superhero TV Series',
  'Documentary Series Collection',
  'International Streaming Series',
];

const SPORTS_TITLES = [
  'Live NHL Hockey Game',
  'NBA Basketball Broadcast',
  'Premier League Soccer Match',
  'UFC Pay-Per-View Event',
  'Formula 1 Race Broadcast',
  'MLB Baseball Live Game',
  'NFL Football Live Stream',
  'Tennis Grand Slam Match',
  'PSL Cricket Live Match',
  'Boxing Championship Fight',
  'CFL Canadian Football Game',
  'Golf PGA Tour Live',
  'Rugby International Match',
  'MLS Soccer Live Broadcast',
];

// ---------------------------------------------------------------------------
// DATA ARRAYS — each item now carries a unique `alt` field
// ---------------------------------------------------------------------------
const movies = Array.from({ length: MOVIES_COUNT }).map((_, i) => {
  const number = String(i + 1).padStart(2, '0');
  return {
    id: `movie-${i}`,
    imagePath: `/img/sliders/movies/iptv-canada-movies-${number}`,
    alt: `${MOVIE_TITLES[i]} streaming on IPTV Canada in 4K Ultra HD`,
  };
});

const series = Array.from({ length: SERIES_COUNT }).map((_, i) => {
  const number = String(i + 1).padStart(2, '0');
  return {
    id: `series-${i}`,
    imagePath: `/img/sliders/series/iptv-canada-serie-${number}`,
    alt: `${SERIES_TITLES[i]} available on IPTV Canada VOD library`,
  };
});

const sports = Array.from({ length: SPORTS_COUNT }).map((_, i) => {
  const number = String(i + 1).padStart(2, '0');
  return {
    id: `sport-${i}`,
    imagePath: `/img/sliders/sports/iptv-canada-sports-${number}`,
    alt: `${SPORTS_TITLES[i]} streaming live on IPTV Canada in 60FPS`,
  };
});

const scrollToPricing = () => {
  const pricingSection = document.getElementById('pricing-section');
  if (pricingSection) {
    pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// ---------------------------------------------------------------------------
// INFINITE SLIDER
// ---------------------------------------------------------------------------
const InfiniteSlider = ({
  items,
  direction = 'left',
  speed = 50,
  category,
  fadeBgColor = '#f2ebeb',
}: {
  items: any[];
  direction?: 'left' | 'right';
  speed?: number;
  category: string;
  fadeBgColor?: string;
}) => {
  const [failedImages, setFailedImages] = useState<{ [key: string]: boolean }>({});
  const infiniteItems = useMemo(() => [...items, ...items], [items]);
  const duration = (items.length * speed) / 10;

  return (
    <div className="relative w-full overflow-hidden py-3" aria-hidden="true">
      {/* Side Fades */}
      <div
        className="absolute left-0 top-0 bottom-0 w-20 md:w-36 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to right, ${fadeBgColor}, transparent)` }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-20 md:w-36 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to left, ${fadeBgColor}, transparent)` }}
      />

      <motion.div
        className="flex w-max gap-4 md:gap-6 px-4"
        animate={{ x: direction === 'left' ? [0, '-50%'] : ['-50%', 0] }}
        transition={{ repeat: Infinity, repeatType: 'loop', duration, ease: 'linear' }}
      >
        {infiniteItems.map((item, idx) => {
          const key = `${item.id}-${idx}`;
          const isFirstHalf = idx < items.length;
          const isPriority = isFirstHalf && idx < 6;

          // The duplicated half (second loop) should not repeat alt text
          // to avoid Google flagging it as duplicated alt spam.
          const isDuplicate = idx >= items.length;
          const altText = isDuplicate ? '' : item.alt;

          return (
            <button
              key={key}
              onClick={scrollToPricing}
              tabIndex={idx >= items.length ? -1 : 0}
              aria-hidden="true"
              className="flex-shrink-0 w-32 sm:w-40 md:w-48 lg:w-52 block cursor-pointer group text-left bg-transparent border-none p-0 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative aspect-[2/3] rounded-xl overflow-hidden bg-[#9A0007] border border-[#D32F2F]/40 shadow-lg group-hover:shadow-xl group-hover:shadow-[#D32F2F]/30 group-hover:border-[#D32F2F] transition-all duration-300">
                {!failedImages[key] ? (
                  <Image
                    src={`${item.imagePath}.webp`}
                    alt={altText}
                    width={208}
                    height={312}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                    priority={isPriority}
                    sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, 208px"
                    onError={() =>
                      setFailedImages((prev) => ({ ...prev, [key]: true }))
                    }
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#9A0007] p-3 text-center">
                    <span className="text-[#f2ebeb] text-xs font-black uppercase tracking-widest">
                      {category}
                    </span>
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </motion.div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// MAIN SECTION
// ---------------------------------------------------------------------------
export default function MovieSlider() {
  return (
    <section className="w-full" aria-label="Media catalog overview">
      {/* ROW 1: Movies */}
      <div className="w-full py-12 sm:py-16 bg-[#9A0007]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-md bg-[#f2ebeb] text-[#9A0007] text-xs font-black uppercase tracking-wider">
              4K Movies
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#f2ebeb] uppercase tracking-tight">
              Latest Blockbuster Releases
            </h2>
          </div>
          <p className="text-[#f2ebeb]/80 text-sm mt-2 font-medium hidden md:block max-w-2xl">
            Stream the newest cinema hits and top-rated movies in crystal-clear Ultra HD resolution.
          </p>
        </div>
        <InfiniteSlider
          items={movies}
          direction="left"
          speed={45}
          category="Movie"
          fadeBgColor="#9A0007"
        />
      </div>

      {/* ROW 2: Series */}
      <div className="w-full py-12 sm:py-16 bg-[#f2ebeb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-md bg-[#D32F2F] text-[#f2ebeb] text-xs font-black uppercase tracking-wider">
              VOD Series
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#000000] uppercase tracking-tight">
              Trending TV Shows & Series
            </h2>
          </div>
          <p className="text-[#D32F2F] text-sm mt-2 font-bold hidden md:block max-w-2xl">
            Binge complete series and on-demand catalogs from leading global networks.
          </p>
        </div>
        <InfiniteSlider
          items={series}
          direction="right"
          speed={40}
          category="Series"
          fadeBgColor="#f2ebeb"
        />
      </div>

      {/* ROW 3: Sports */}
      <div className="w-full py-12 sm:py-16 bg-[#9A0007]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-md bg-[#f2ebeb] text-[#D32F2F] text-xs font-black uppercase tracking-wider">
              Live Action
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#f2ebeb] uppercase tracking-tight">
              Live Sports & PPV Events 🍁
            </h2>
          </div>
          <p className="text-[#f2ebeb]/80 text-sm mt-2 font-medium hidden md:block max-w-2xl">
            Catch every game live, including NHL, NBA, Formula 1, Premier League, and UFC PPV fights.
          </p>
        </div>
        <InfiniteSlider
          items={sports}
          direction="left"
          speed={50}
          category="Sports"
          fadeBgColor="#9A0007"
        />
      </div>
    </section>
  );
}