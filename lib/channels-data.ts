// @/lib/channels-data.ts

// ===========================================================================
// COUNTRY CODE TYPE (exported so other files can import it)
// ===========================================================================
export type CountryCode = 'CA' | 'US' | 'UK' | 'AU' | 'CN' | 'IN' | 'DE' | 'FR' | 'JP' | 'KR';

// ===========================================================================
// CHANNEL INTERFACE
// ===========================================================================
export interface Channel {
  name: string;
  quality: '4K UHD' | 'FHD 60FPS' | 'HD';
  genre?: string;
  description: string;
  whyWatch?: string;
  country: CountryCode;   // ← now required
  popular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ChannelCategory {
  slug: string;
  name: string;
  totalChannels: number;
  description: string;
  longDescription: string;
  keywords: string[];
  channels: Channel[];
  faqs: FAQItem[];
  featured?: boolean;
}

// ... rest of your file stays exactly as-is

// ---------------------------------------------------------------------------
// CATEGORIES
// ---------------------------------------------------------------------------
export const channelsData: ChannelCategory[] = [
  // =========================================================================
  // 1. SPORTS
  // =========================================================================
  {
    slug: 'sports',
    name: 'Canadian Live Sports & PPV',
    totalChannels: 1450,
    description:
      'Watch every live sports event in smooth 60FPS. Includes Sportsnet, TSN, CBC Sports, NHL Center Ice, NBA League Pass, UFC & Boxing PPV events, plus all major international sports networks.',
    longDescription:
      'Traditional Canadian cable providers force sports fans into expensive tiered packages with multi-year contracts. With IPTV Canada, you unlock the complete Canadian sports universe — Sportsnet, TSN, CBC Sports, plus every NHL, NBA, MLB, CFL, and Premier League match — at a fraction of the cost. Our dedicated Canadian sports servers are optimized for 60FPS high-bitrate delivery, ensuring zero buffering during Stanley Cup Finals, UFC title fights, or any other peak-viewing event.',
    keywords: [
      'best iptv canada sports',
      'iptv canada live sports',
      'sportsnet iptv',
      'tsn iptv stream',
      'nhl iptv canada',
      'ufc ppv iptv canada',
      'iptv canada nba',
      'canadian sports streaming',
      'live sports iptv canada',
    ],
    channels: [
      { name: 'Sportsnet Ontario HD', quality: 'FHD 60FPS', genre: 'NHL & MLB', description: 'Toronto Maple Leafs, Toronto Blue Jays, and regional NHL coverage with full Sportsnet Central news.' },
      { name: 'Sportsnet West HD', quality: 'FHD 60FPS', genre: 'NHL & NBA', description: 'Calgary Flames, Edmonton Oilers, Vancouver Canucks coverage plus NBA Raptors games.' },
      { name: 'Sportsnet East HD', quality: 'FHD 60FPS', genre: 'NHL & Regional', description: 'Ottawa Senators, Montreal Canadiens, and regional NHL coverage across Eastern Canada.' },
      { name: 'Sportsnet One HD', quality: 'FHD 60FPS', genre: 'Premier Sports', description: 'Premier League football, international soccer tournaments, and major NHL & NBA games.' },
      { name: 'Sportsnet 360 HD', quality: 'FHD 60FPS', genre: 'WWE & UFC', description: 'WWE Raw & SmackDown, UFC Fight Nights, and combat sports coverage.' },
      { name: 'TSN 1 HD', quality: 'FHD 60FPS', genre: 'NHL & NBA', description: 'Canada\'s #1 sports channel with CFL, NBA Raptors, NHL, and international hockey.' },
      { name: 'TSN 2 HD', quality: 'FHD 60FPS', genre: 'NFL & NBA', description: 'NFL Sunday coverage, Monday Night Football, and major NBA playoff matchups.' },
      { name: 'TSN 3 HD', quality: 'FHD 60FPS', genre: 'Soccer & MLB', description: 'Premier League matches, MLB coverage, and MLB playoff games.' },
      { name: 'TSN 4 HD', quality: 'FHD 60FPS', genre: 'Formula 1 & Tennis', description: 'Formula 1 races, Grand Slam tennis, and international sports events.' },
      { name: 'TSN 5 HD', quality: 'FHD 60FPS', genre: 'Multi-Sport', description: 'Additional TSN feed for parallel events and multiple simultaneous games.' },
      { name: 'CBC Sports HD', quality: 'FHD 60FPS', genre: 'Hockey Night in Canada', description: 'Hockey Night in Canada, Olympics coverage, and Canadian national sports events.' },
      { name: 'NHL Center Ice', quality: 'FHD 60FPS', genre: 'Live NHL', description: 'Every out-of-market NHL game live — perfect for fans of any team, anywhere in Canada.' },
      { name: 'NBA League Pass', quality: 'FHD 60FPS', genre: 'Pro Basketball', description: 'Complete NBA coverage including Toronto Raptors games and the full NBA playoff schedule.' },
      { name: 'UFC Fight Pass Live', quality: 'FHD 60FPS', genre: 'MMA', description: 'Numbered UFC events, Fight Nights, Contender Series, and full PPV main cards.' },
      { name: 'DAZN Boxing & PPV', quality: 'FHD 60FPS', genre: 'Combat Sports', description: 'Matchroom Boxing, Golden Boy Promotions, and major boxing PPV events worldwide.' },
      { name: 'Sky Sports Main Event', quality: 'FHD 60FPS', genre: 'UK Premier League', description: 'Full English Premier League coverage with UK commentary and analysis.' },
      { name: 'Sky Sports F1', quality: 'FHD 60FPS', genre: 'Formula 1', description: 'Dedicated F1 channel with onboard cameras, qualifying, and race weekend coverage.' },
      { name: 'PSL Cricket Live', quality: 'FHD 60FPS', genre: 'Cricket', description: 'Pakistan Super League, international cricket tours, and major cricket tournaments.' },
    ],
    faqs: [
      {
        question: 'Can I watch NHL hockey and UFC pay-per-view events live?',
        answer:
          'Yes — every channel package includes full live NHL hockey (Sportsnet, TSN, CBC Hockey Night in Canada) and all major UFC pay-per-view events without any extra charges. What costs $70+ on traditional Canadian cable is included in your subscription.',
      },
      {
        question: 'Is there any delay compared to traditional cable?',
        answer:
          'No — our dedicated Canadian sports servers use 60FPS high-bitrate connections with minimal latency, so you watch live events in real time with no noticeable delay.',
      },
      {
        question: 'Do you offer catch-up for missed games?',
        answer:
          'Yes — most sports channels include a 7-day catch-up feature and a fully synchronized EPG guide so you can rewatch any match you missed.',
      },
    ],
    featured: true,
  },

  // =========================================================================
  // 2. CANADIAN CHANNELS
  // =========================================================================
  {
    slug: 'canadian',
    name: 'Canadian TV Channels',
    totalChannels: 220,
    description:
      'The complete lineup of Canadian public and commercial networks in Full HD — CBC, CTV, Global, Citytv, TVA, Radio-Canada, and regional channels with 7-day catch-up and EPG.',
    longDescription:
      'Every Canadian household deserves full access to local news, regional broadcasts, and national entertainment. Our Canadian channel lineup includes every major broadcaster — CBC, CTV, Global, Citytv, TVA, Radio-Canada, plus regional networks from coast to coast. Whether you watch English, French, or both, you get the complete Canadian television experience in Full HD with a fully synchronized EPG guide.',
    keywords: [
      'iptv canada local channels',
      'cbc iptv canada',
      'ctv iptv stream',
      'global tv iptv',
      'canadian tv channels iptv',
      'tva iptv canada',
      'radio canada iptv',
      'best iptv canada',
    ],
    channels: [
      { name: 'CBC HD', quality: 'FHD 60FPS', genre: 'National Public', description: 'CBC News, The National, Hockey Night in Canada, and Canadian original programming.' },
      { name: 'CBC News Network HD', quality: 'FHD 60FPS', genre: '24/7 News', description: 'Rolling Canadian news coverage, live political events, and breaking stories.' },
      { name: 'CBC Gem Originals', quality: 'FHD 60FPS', genre: 'Original Series', description: 'Canadian original dramas, comedies, and documentaries from CBC Gem.' },
      { name: 'CTV HD', quality: 'FHD 60FPS', genre: 'National Commercial', description: 'CTV National News, primetime dramas, and major live sports coverage.' },
      { name: 'CTV News Channel HD', quality: 'FHD 60FPS', genre: '24/7 News', description: 'Rolling Canadian and international news coverage with live reports.' },
      { name: 'CTV 2 HD', quality: 'FHD 60FPS', genre: 'Regional Entertainment', description: 'Regional CTV programming, primetime entertainment, and local news.' },
      { name: 'Global TV HD', quality: 'FHD 60FPS', genre: 'National Commercial', description: 'Global National news, primetime dramas, and blockbuster movie nights.' },
      { name: 'Global News HD', quality: 'FHD 60FPS', genre: '24/7 News', description: 'Canadian news, politics, and international coverage 24 hours a day.' },
      { name: 'Citytv HD', quality: 'FHD 60FPS', genre: 'Urban Entertainment', description: 'Citytv original shows, primetime entertainment, and regional morning news.' },
      { name: 'CityNews 24/7 HD', quality: 'FHD 60FPS', genre: 'Local News', description: 'Local news coverage from Toronto, Vancouver, Calgary, and other Canadian cities.' },
      { name: 'TVA HD', quality: 'FHD 60FPS', genre: 'French Canadian', description: 'The #1 French-language Canadian network with prime-time dramas and news.' },
      { name: 'TVA Nouvelles HD', quality: 'FHD 60FPS', genre: 'French News', description: 'Round-the-clock French Canadian news coverage from TVA Nouvelles.' },
      { name: 'Radio-Canada HD', quality: 'FHD 60FPS', genre: 'French Public', description: 'French-language public broadcaster — Téléjournal, documentaries, and dramas.' },
      { name: 'ICI RDI HD', quality: 'FHD 60FPS', genre: 'French News', description: 'French Canadian news channel with continuous coverage of national and international events.' },
      { name: 'V Télé HD', quality: 'FHD 60FPS', genre: 'French Entertainment', description: 'Québécois entertainment, reality TV, and French-language series.' },
      { name: 'Noovo HD', quality: 'FHD 60FPS', genre: 'French Commercial', description: 'Popular Québécois programming, talk shows, and international series.' },
      { name: 'TSN SportsCentre HD', quality: 'FHD 60FPS', genre: 'Sports News', description: 'Canada\'s flagship sports news program and daily highlights.' },
      { name: 'The Weather Network HD', quality: 'FHD 60FPS', genre: 'Weather', description: 'Canadian weather forecasts, storm tracking, and climate coverage.' },
    ],
    faqs: [
      {
        question: 'Can I watch Canadian channels while travelling outside the country?',
        answer:
          'Yes — our IPTV streams work worldwide without geographic restrictions. You can watch CBC, CTV, Global, and all Canadian channels from anywhere in the world without needing a VPN.',
      },
      {
        question: 'Are French Canadian channels included?',
        answer:
          'Absolutely. Our Canadian lineup includes full French-language coverage: TVA, Radio-Canada, ICI RDI, V Télé, Noovo, and more — all in Full HD with French subtitles.',
      },
      {
        question: 'Does the EPG guide sync properly with Canadian time zones?',
        answer:
          'Yes — our EPG TV guide is automatically synchronized every 6 hours and accurately reflects Canadian time zones from Pacific to Newfoundland.',
      },
    ],
  },

  // =========================================================================
  // 3. US CHANNELS
  // =========================================================================
  {
    slug: 'usa',
    name: 'US Networks & Premium Channels',
    totalChannels: 3200,
    description:
      'Full access to major US networks — ABC, CBS, NBC, FOX, HBO, Showtime, ESPN, CNN, and premium streaming originals in Full HD and 4K.',
    longDescription:
      'Access the full range of American television — from major broadcast networks (ABC, CBS, NBC, FOX, CW) to premium cable channels (HBO, Showtime, Starz, AMC) and dedicated sports networks (ESPN, FS1, NFL Network). Our US lineup is perfect for Canadian households that want American entertainment alongside Canadian programming.',
    keywords: [
      'us channels iptv canada',
      'hbo iptv canada',
      'showtime iptv',
      'espn iptv canada',
      'american tv channels iptv',
      'abc cbs nbc iptv',
      'best iptv canada',
    ],
    channels: [
      { name: 'ABC East HD', quality: 'FHD 60FPS', genre: 'US Broadcast', description: 'Major US network with primetime hits, live sports, and late-night shows.' },
      { name: 'CBS East HD', quality: 'FHD 60FPS', genre: 'US Broadcast', description: 'US drama hits, NFL Sunday coverage, and primetime entertainment.' },
      { name: 'NBC East HD', quality: 'FHD 60FPS', genre: 'US Broadcast', description: 'US variety shows, live sports, and award-winning dramas.' },
      { name: 'FOX East HD', quality: 'FHD 60FPS', genre: 'US Broadcast', description: 'US primetime hits, NFL Football, and major entertainment events.' },
      { name: 'The CW HD', quality: 'FHD 60FPS', genre: 'US Broadcast', description: 'Superhero series, teen dramas, and new American entertainment.' },
      { name: 'HBO East HD', quality: 'FHD 60FPS', genre: 'Premium Cable', description: 'HBO original series, blockbuster movies, and premium entertainment.' },
      { name: 'HBO Signature HD', quality: 'FHD 60FPS', genre: 'Premium Cable', description: 'Additional HBO feed featuring top original series and films.' },
      { name: 'Showtime East HD', quality: 'FHD 60FPS', genre: 'Premium Cable', description: 'Showtime originals, hit movies, and major boxing events.' },
      { name: 'Starz East HD', quality: 'FHD 60FPS', genre: 'Premium Cable', description: 'Starz original series, first-run movies, and premium dramas.' },
      { name: 'AMC HD', quality: 'FHD 60FPS', genre: 'Premium Cable', description: 'AMC original series — The Walking Dead universe, Better Call Saul, and more.' },
      { name: 'ESPN HD', quality: 'FHD 60FPS', genre: 'US Sports', description: 'The worldwide leader in sports — NFL, NBA, MLB, and UFC coverage.' },
      { name: 'ESPN 2 HD', quality: 'FHD 60FPS', genre: 'US Sports', description: 'Additional US sports programming — college football, NBA, and MLB.' },
      { name: 'FS1 HD', quality: 'FHD 60FPS', genre: 'US Sports', description: 'Fox Sports 1 — MLB, NASCAR, UFC Fight Nights, and more.' },
      { name: 'NFL Network HD', quality: 'FHD 60FPS', genre: 'NFL', description: '24/7 NFL coverage, Thursday Night Football, and NFL RedZone replays.' },
      { name: 'NBA TV HD', quality: 'FHD 60FPS', genre: 'NBA', description: 'Round-the-clock NBA coverage, classic games, and live analysis.' },
      { name: 'CNN USA HD', quality: 'FHD 60FPS', genre: 'US News', description: 'American and international news coverage 24/7 from CNN headquarters.' },
      { name: 'MSNBC HD', quality: 'FHD 60FPS', genre: 'US News', description: 'Progressive American news coverage, political analysis, and commentary.' },
      { name: 'FOX News HD', quality: 'FHD 60FPS', genre: 'US News', description: 'American news, political debates, and opinion programming.' },
    ],
    faqs: [
      {
        question: 'Can I watch HBO, Showtime, and premium US channels in Canada?',
        answer:
          'Yes — our US lineup includes premium American channels like HBO, Showtime, Starz, AMC, and more. All included in your IPTV Canada subscription at no extra cost.',
      },
      {
        question: 'Are live American sports channels like ESPN and NFL Network included?',
        answer:
          'Absolutely. You get full access to ESPN, ESPN 2, FS1, NFL Network, NBA TV, and every major US sports channel — perfect for following NFL, NBA, MLB, and UFC events.',
      },
    ],
  },

  // =========================================================================
  // 4. MOVIES & VOD
  // =========================================================================
  {
    slug: 'movies-vod',
    name: 'Movies & VOD Library',
    totalChannels: 450,
    description:
      'Access 50,000+ cinema films and complete TV series from every major streaming platform — in Full HD and 4K with English subtitles and Dolby 5.1 sound.',
    longDescription:
      'Our Video-on-Demand library is one of the largest in Canada — over 50,000 movies and complete TV series boxsets spanning every genre, era, and streaming platform. New releases are added daily, so there is always something fresh to watch, whether you want an action blockbuster, a family comedy, or the latest award-winning drama series.',
    keywords: [
      'iptv movies canada',
      'vod iptv canada',
      'netflix iptv canada',
      'hbo iptv canada',
      'disney plus iptv',
      'best iptv canada movies',
    ],
    channels: [
      { name: 'Cinema Premiere 4K', quality: '4K UHD', genre: 'Latest Releases', description: 'The newest cinema releases in 4K UHD with Dolby 5.1 surround sound.' },
      { name: 'Cinema Action & Thriller', quality: 'FHD 60FPS', genre: 'Action & Blockbusters', description: 'Round-the-clock action hits, martial arts, and psychological thrillers.' },
      { name: 'Cinema Comedy & Romance', quality: 'FHD 60FPS', genre: 'Comedy & Romance', description: 'Comedies, romantic classics, and feel-good cinema picks.' },
      { name: 'Cinema Sci-Fi & Fantasy', quality: '4K UHD', genre: 'Sci-Fi & Fantasy', description: 'Space adventures, superhero films, and epic fantasy spectacles.' },
      { name: 'Cinema Classics Vault', quality: 'FHD 60FPS', genre: 'Classic Cinema', description: 'Restored cinema classics from the 1970s, 80s, and 90s in HD.' },
      { name: 'HBO Series Central', quality: 'FHD 60FPS', genre: 'HBO Originals', description: 'Complete seasons of Succession, House of the Dragon, The Last of Us, and more.' },
      { name: 'Netflix Stream Hub', quality: 'FHD 60FPS', genre: 'Netflix Originals', description: 'Every season of Stranger Things, Squid Game, and top Netflix documentaries.' },
      { name: 'Disney & Marvel Vault', quality: '4K UHD', genre: 'Marvel, Star Wars & Pixar', description: 'All MCU films, Star Wars sagas, and Pixar animation.' },
      { name: 'Paramount Showcase', quality: 'FHD 60FPS', genre: 'Paramount Originals', description: 'Yellowstone universe, Star Trek series, and Paramount cinema releases.' },
      { name: 'Apple Originals Channel', quality: '4K UHD', genre: 'Apple TV+', description: 'Ted Lasso, Severance, The Morning Show, and award-winning films.' },
      { name: 'Documentary World', quality: 'FHD 60FPS', genre: 'Documentaries', description: 'High-quality nature and true-crime documentaries from around the world.' },
      { name: 'Horror Nights HD', quality: 'FHD 60FPS', genre: 'Horror', description: 'Spine-chilling horror films, slashers, and paranormal documentaries.' },
    ],
    faqs: [
      {
        question: 'How often is the VOD movie library updated?',
        answer:
          'Our movie and TV series catalog is automatically updated daily with the latest cinema releases and streaming titles from every major platform.',
      },
      {
        question: 'Do all movies include English subtitles?',
        answer:
          'Yes — over 95% of all foreign-language films and series include selectable English subtitles, with additional subtitle languages available for most titles.',
      },
    ],
  },

  // =========================================================================
  // 5. KIDS & FAMILY
  // =========================================================================
  {
    slug: 'kids-family',
    name: 'Kids & Family',
    totalChannels: 85,
    description:
      'Safe and entertaining children\'s channels for all ages — Disney Channel, Nickelodeon, Cartoon Network, and educational programming in English and French.',
    longDescription:
      'Family-friendly entertainment that parents can trust. Our Kids & Family category includes every major children\'s network — Disney Channel, Disney Junior, Nickelodeon, Nick Jr., Cartoon Network, and more — in English and French. All programming is age-appropriate and free of aggressive content, with parental control options built into every IPTV player.',
    keywords: [
      'kids iptv canada',
      'disney channel iptv',
      'nickelodeon iptv canada',
      'cartoon network iptv',
      'family iptv canada',
      'best iptv canada kids',
    ],
    channels: [
      { name: 'Nickelodeon HD', quality: 'FHD 60FPS', genre: 'Animation & Kids', description: 'SpongeBob SquarePants, PAW Patrol, The Loud House, and teen series.' },
      { name: 'Nick Jr. HD', quality: 'FHD 60FPS', genre: 'Preschool', description: 'Educational and fun programs for the youngest viewers, in English and French.' },
      { name: 'Nicktoons HD', quality: 'FHD 60FPS', genre: 'Animation', description: 'Round-the-clock animation series and classic cartoons.' },
      { name: 'Disney Channel HD', quality: 'FHD 60FPS', genre: 'Disney Series', description: 'Popular Disney series, teen shows, and original Disney movies.' },
      { name: 'Disney Junior HD', quality: 'FHD 60FPS', genre: 'Preschool', description: 'Mickey Mouse Clubhouse, Spidey and His Amazing Friends, and Bluey.' },
      { name: 'Disney XD HD', quality: 'FHD 60FPS', genre: 'Action Animation', description: 'Action-packed animated series and Marvel cartoons for kids.' },
      { name: 'Cartoon Network HD', quality: 'FHD 60FPS', genre: 'Classic Cartoons', description: 'Teen Titans Go!, Gumball, Adventure Time, and Scooby-Doo.' },
      { name: 'Boomerang HD', quality: 'FHD 60FPS', genre: 'Classic Animation', description: 'Tom & Jerry, Looney Tunes, Mr. Bean animation, and preschool series.' },
      { name: 'Family Channel HD', quality: 'FHD 60FPS', genre: 'Canadian Kids', description: 'Canadian family programming, teen dramas, and animated series.' },
      { name: 'YTV HD', quality: 'FHD 60FPS', genre: 'Canadian Youth', description: 'The classic Canadian youth network with animation and teen shows.' },
      { name: 'Teletoon HD', quality: 'FHD 60FPS', genre: 'Canadian Animation', description: 'Canadian animation channel with original and international cartoons.' },
      { name: 'Treehouse HD', quality: 'FHD 60FPS', genre: 'Preschool', description: 'Preschool programming in English and French for the youngest viewers.' },
    ],
    faqs: [
      {
        question: 'Are the kids\' channels available in English and French?',
        answer:
          'Yes — all major children\'s channels broadcast in both English and French audio tracks, so your family can switch languages as needed.',
      },
      {
        question: 'Can I set parental controls on the IPTV app?',
        answer:
          'Yes — virtually all IPTV players (IBO Player Pro, TiviMate) offer parental control PIN codes so you can block specific channels or categories.',
      },
    ],
  },

  // =========================================================================
  // 6. INTERNATIONAL
  // =========================================================================
  {
    slug: 'international',
    name: 'International Channels',
    totalChannels: 19500,
    description:
      'Access national live TV from the UK, USA, Australia, Europe, Asia, and beyond — with properly sorted country categories and optional language filters.',
    longDescription:
      'Watch television from around the world with our 19,500+ international channel lineup. Categories include the UK (BBC, ITV, Sky), USA, Australia, France, Germany, Spain, Italy, India, Pakistan, China, the Middle East, and beyond — all organized alphabetically by country with flag icons for fast navigation.',
    keywords: [
      'international iptv canada',
      'uk channels iptv canada',
      'australian tv iptv',
      'european channels iptv',
      'asian channels iptv canada',
      'best iptv canada',
    ],
    channels: [
      // UK
      { name: 'BBC One HD', quality: 'FHD 60FPS', genre: 'United Kingdom', description: 'The UK\'s flagship public channel with news, top drama, and live sport.' },
      { name: 'BBC Two HD', quality: 'FHD 60FPS', genre: 'United Kingdom', description: 'Documentaries, comedy, and background programming from the UK.' },
      { name: 'ITV 1 HD', quality: 'FHD 60FPS', genre: 'United Kingdom', description: 'The UK\'s largest commercial network with top entertainment and shows.' },
      { name: 'Channel 4 HD', quality: 'FHD 60FPS', genre: 'United Kingdom', description: 'UK quality films, documentaries, and award-winning series.' },
      { name: 'Sky Sports Main Event', quality: 'FHD 60FPS', genre: 'United Kingdom', description: 'Live Premier League, Formula 1, and major international sports events.' },
      // USA
      { name: 'ABC East HD', quality: 'FHD 60FPS', genre: 'United States', description: 'US primetime hits, live sports, and late-night entertainment shows.' },
      { name: 'CNN USA HD', quality: 'FHD 60FPS', genre: 'United States', description: '24/7 American world news, live debates, and in-depth interviews.' },
      { name: 'NBC East HD', quality: 'FHD 60FPS', genre: 'United States', description: 'American entertainment, live talk shows, and sports coverage.' },
      { name: 'CBS HD USA', quality: 'FHD 60FPS', genre: 'United States', description: 'Major US dramas, NFL Football, and primetime entertainment.' },
      // Australia
      { name: 'Channel 7 HD', quality: 'FHD 60FPS', genre: 'Australia', description: 'Australia\'s #1 network with news, AFL, and major sports coverage.' },
      { name: 'Channel 9 HD', quality: 'FHD 60FPS', genre: 'Australia', description: 'Australian flagship network with NRL, cricket, and entertainment.' },
      { name: 'ABC Australia HD', quality: 'FHD 60FPS', genre: 'Australia', description: 'Australian public broadcaster with news, documentaries, and drama.' },
      // Europe
      { name: 'TF1 HD', quality: 'FHD 60FPS', genre: 'France', description: 'France\'s largest TV network with live sport, series, and films.' },
      { name: 'France 2 HD', quality: 'FHD 60FPS', genre: 'France', description: 'French public broadcaster with Roland Garros and Tour de France coverage.' },
      { name: 'ARD Das Erste', quality: 'FHD 60FPS', genre: 'Germany', description: 'German public flagship with Tagesschau news and Bundesliga football.' },
      { name: 'ZDF HD', quality: 'FHD 60FPS', genre: 'Germany', description: 'German quality television with documentaries and live sport.' },
      { name: 'La 1 HD', quality: 'FHD 60FPS', genre: 'Spain', description: 'Spanish national channel with news, entertainment, and La Liga coverage.' },
      { name: 'Rai 1 HD', quality: 'FHD 60FPS', genre: 'Italy', description: 'Italy\'s flagship public channel with news and entertainment.' },
      // Asia
      { name: 'CCTV-1 HD', quality: 'FHD 60FPS', genre: 'China', description: 'China\'s flagship national network with news and family entertainment.' },
      { name: 'CCTV-4 International', quality: 'FHD 60FPS', genre: 'China', description: 'International Chinese broadcasting with culture, history, and world news.' },
      { name: 'CGTN English', quality: 'FHD 60FPS', genre: 'China', description: '24/7 English-language world news and economic analysis from Asia.' },
      { name: 'Zee TV HD', quality: 'FHD 60FPS', genre: 'India', description: 'Popular Hindi entertainment, dramas, and reality programming.' },
      { name: 'Star Plus HD', quality: 'FHD 60FPS', genre: 'India', description: 'India\'s top entertainment network with serial dramas and shows.' },
      { name: 'PTV Sports HD', quality: 'FHD 60FPS', genre: 'Pakistan', description: 'Pakistan\'s flagship sports channel with cricket and PSL coverage.' },
    ],
    faqs: [
      {
        question: 'Are all international channels properly sorted by country?',
        answer:
          'Yes — our playlists are neatly organized into alphabetical country categories with flag icons for fast, intuitive channel surfing.',
      },
      {
        question: 'Can I hide unwanted country groups from my channel list?',
        answer:
          'Yes — through your IPTV player (like IBO Player Pro or TiviMate) or via our WhatsApp support team, you can hide categories you do not use.',
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------------
export function getChannelCategoryBySlug(slug: string): ChannelCategory | undefined {
  return channelsData.find((category) => category.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return channelsData.map((category) => category.slug);
}