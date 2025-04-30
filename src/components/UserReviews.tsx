"use client"

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Avatar components
const AvatarImage = ({ index, name, ...props }: { index: number, name: string, className?: string }) => {
  // Use real avatar image with fallback to SVG
  return (
    <div className="w-full h-full rounded-full overflow-hidden" {...props}>
      <Image 
        src={`/images/avatars/avatar-${index}.avif`} 
        alt={`Avatar de ${name}`}
        width={80}
        height={80}
        className="object-cover w-full h-full"
        onError={(e) => {
          // If image fails to load, we'll show the SVG fallback
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent) {
            parent.classList.add('avatar-fallback');
            // Create SVG fallback dynamically
            const svgWrapper = document.createElement('div');
            svgWrapper.innerHTML = generateAvatarSvg(name);
            parent.appendChild(svgWrapper.firstChild as Node);
          }
        }}
      />
    </div>
  );
};

// SVG generation function for fallback
const generateAvatarSvg = (seed: string): string => {
  // Generate consistent colors based on the seed (name)
  const stringToColor = (str: string): string => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = Math.floor(Math.abs((Math.sin(hash) * 10000) % 1 * 16777216)).toString(16);
    return '#' + '0'.repeat(6 - color.length) + color;
  };
  
  const bgColor = stringToColor(seed + '1');
  const fgColor = stringToColor(seed + '2');
  
  // Generate different avatar patterns based on name
  const pattern = seed.charCodeAt(0) % 5;
  
  let patternSvg = '';
  
  if (pattern === 0) {
    patternSvg = `
      <circle cx="40" cy="30" r="20" fill="${fgColor}" fill-opacity="0.6" />
      <rect x="20" y="40" width="40" height="40" fill="${fgColor}" fill-opacity="0.8" />
    `;
  } else if (pattern === 1) {
    patternSvg = `
      <circle cx="25" cy="25" r="15" fill="${fgColor}" fill-opacity="0.7" />
      <circle cx="55" cy="55" r="15" fill="${fgColor}" fill-opacity="0.7" />
    `;
  } else if (pattern === 2) {
    patternSvg = `
      <polygon points="40,10 65,40 40,70 15,40" fill="${fgColor}" fill-opacity="0.7" />
    `;
  } else if (pattern === 3) {
    patternSvg = `
      <rect x="15" y="15" width="50" height="50" fill="${fgColor}" fill-opacity="0.5" />
      <rect x="25" y="25" width="30" height="30" fill="${bgColor}" fill-opacity="0.8" />
    `;
  } else {
    patternSvg = `
      <circle cx="40" cy="40" r="25" fill="${fgColor}" fill-opacity="0.5" />
      <circle cx="40" cy="40" r="15" fill="${bgColor}" fill-opacity="0.8" />
      <circle cx="40" cy="40" r="5" fill="${fgColor}" fill-opacity="0.8" />
    `;
  }
  
  return `
    <svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="80" fill="${bgColor}" />
      ${patternSvg}
    </svg>
  `;
};

// For server-side rendering where we need a static SVG
const AvatarSVG = ({ seed, ...props }: { seed: string, className?: string }) => {
  // Generate consistent colors based on the seed (name)
  const stringToColor = (str: string): string => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = Math.floor(Math.abs((Math.sin(hash) * 10000) % 1 * 16777216)).toString(16);
    return '#' + '0'.repeat(6 - color.length) + color;
  };
  
  const bgColor = stringToColor(seed + '1');
  const fgColor = stringToColor(seed + '2');
  
  // Generate different avatar patterns based on name
  const pattern = seed.charCodeAt(0) % 5;
  
  return (
    <div className="w-full h-full rounded-full overflow-hidden" {...props}>
      <svg viewBox="0 0 80 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="80" height="80" fill={bgColor} />
        
        {pattern === 0 && (
          <>
            <circle cx="40" cy="30" r="20" fill={fgColor} fillOpacity="0.6" />
            <rect x="20" y="40" width="40" height="40" fill={fgColor} fillOpacity="0.8" />
          </>
        )}
        
        {pattern === 1 && (
          <>
            <circle cx="25" cy="25" r="15" fill={fgColor} fillOpacity="0.7" />
            <circle cx="55" cy="55" r="15" fill={fgColor} fillOpacity="0.7" />
          </>
        )}
        
        {pattern === 2 && (
          <>
            <polygon points="40,10 65,40 40,70 15,40" fill={fgColor} fillOpacity="0.7" />
          </>
        )}
        
        {pattern === 3 && (
          <>
            <rect x="15" y="15" width="50" height="50" fill={fgColor} fillOpacity="0.5" />
            <rect x="25" y="25" width="30" height="30" fill={bgColor} fillOpacity="0.8" />
          </>
        )}
        
        {pattern === 4 && (
          <>
            <circle cx="40" cy="40" r="25" fill={fgColor} fillOpacity="0.5" />
            <circle cx="40" cy="40" r="15" fill={bgColor} fillOpacity="0.8" />
            <circle cx="40" cy="40" r="5" fill={fgColor} fillOpacity="0.8" />
          </>
        )}
      </svg>
    </div>
  );
};

const reviews = [
  {
    name: "Ana Caroline",
    date: "avril 2025",
    text: "Appartement très confortable et agréable, bien situé à quelques pas du centre ville. J'ai passé un excellent séjour, tout s'est bien passé. Merci Mathis :)",
    rating: 5,
  },
  {
    name: "Chaima",
    date: "avril 2025",
    text: "Merci encore d'avoir été réactif très rapidement hier soir. La literie du lit et du canapé était bonne. Le logement est calme et paisible. Nous avons merveilleusement bien dormi et apprécié le séjour. Mathis est un TRES BON HÔTE !",
    rating: 5,
  },
  {
    name: "Gopalan",
    date: "avril 2025",
    text: "C'est le troisième fois que nous passons chez Mathis et c'est toujours aussi agréable. L'appartement est propre, cozy et très bien situé. Merci Mathis pour votre gentillesse et la réactivité.",
    rating: 5,
  },
  {
    name: "Claire",
    date: "mars 2025",
    text: "Séjour parfait ! L'appartement est idéalement situé et très bien équipé. La communication avec Mathis a été excellente, ses conseils pour visiter la région étaient précieux.",
    rating: 5,
  },
  {
    name: "Thomas",
    date: "mars 2025",
    text: "Nous avons apprécié la propreté du logement et l'accueil chaleureux. Tout était conforme à la description et les petites attentions ont fait la différence. À recommander !",
    rating: 5,
  },
  {
    name: "Alex",
    date: "avril 2025",
    text: "Appartement très bien situé et très agréable. Saint-Brieuc hyper centre accessible à pied",
    rating: 5,
  },
  {
    name: "Lucie",
    date: "avril 2025",
    text: "Hôte très sympathique, appartement moderne et agréable, situation idéale en plein cœur du centre historique.",
    rating: 5,
  },
  {
    name: "Olivier",
    date: "avril 2025",
    text: "logement bien situé, très propre, bien agencé, déco sympa. l'arrivée se fait très facilement via une boite à clefs. Nous retournerons avec plaisir dans cet appartement pour un futur séjour sur St Brieuc",
    rating: 5,
  },
  {
    name: "Virginie",
    date: "avril 2025",
    text: "Très joli studio décoré avec soin et très bien situé dans le centre ville. Nous reviendrons avec grand plaisir.",
    rating: 5,
  },
  {
    name: "Julien",
    date: "avril 2025",
    text: "au top ! hôte réactif ! bon point accès à un parking privatisé et sécurisé !",
    rating: 5,
  }
];

export default function UserReviews() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Base styles that will be the same on server and client
  const initialStaggerStyle = { opacity: 0, transform: 'translateY(20px)' };
  const visibleStaggerStyle = { opacity: 1, transform: 'translateY(0)' };

  return (
    <section className="py-16 bg-[color:var(--primary)] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--primary-dark)] opacity-90"></div>
      
      {/* Large Airbnb logo in background */}
      <div className="absolute -right-96 top-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] rotate-[-15deg] z-0 text-white">
        {/* Airbnb logo SVG */}
        <svg width="256px" height="275px" viewBox="0 0 256 275" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
            <g>
                <path d="M252.154292,194.867326 C250.922969,191.411042 249.483995,188.067164 248.115382,184.968693 C246.007975,180.203002 243.801033,175.427872 241.666168,170.812343 L241.49713,170.445949 C222.457534,129.215088 202.021868,87.4204781 180.759028,46.2240251 L179.856344,44.4748604 C177.687157,40.2680272 175.445034,35.9182404 173.143705,31.6442207 C170.415059,26.2353247 167.103788,21.1392792 163.269097,16.4463523 C158.952174,11.2965061 153.555806,7.1547313 147.460973,4.31309597 C141.366141,1.47146064 134.72043,-1.42108547e-14 127.993204,-1.42108547e-14 C121.265978,-1.42108547e-14 114.621126,1.47481567 108.526293,4.31798693 C102.432318,7.1611582 97.036808,11.3043145 92.7216012,16.4551904 C88.8912009,21.1492327 85.5819032,26.2441628 82.852314,31.6503987 C80.5311634,35.9627739 78.2679323,40.3528898 76.0794386,44.5985075 L75.2412811,46.2235961 C53.9774967,87.4230523 33.5420022,129.217662 14.5025787,170.445091 L14.2251664,171.044879 C12.1273701,175.585756 9.95844023,180.281086 7.88624,184.966976 C6.51691479,188.062873 5.07981964,191.404177 3.84717554,194.869042 C0.316679953,204.30861 -0.808331101,214.475818 0.573271296,224.456825 C2.03843546,234.543374 6.11806921,244.073897 12.4081288,252.102808 C18.6981713,260.131718 26.9804681,266.381002 36.4346237,270.231996 C43.575523,273.1211 51.2108391,274.597829 58.9160875,274.580816 C61.3365161,274.580816 63.7548853,274.439087 66.1590965,274.159358 C75.9043934,272.917739 85.3032896,269.746332 93.8044787,264.832196 C104.955886,258.567466 115.969145,249.386175 128.000069,236.266368 C140.030992,249.386175 151.044251,258.567466 162.195659,264.832196 C170.696504,269.74719 180.095744,272.917739 189.840783,274.159358 C192.24508,274.439087 194.663964,274.580816 197.084565,274.580816 C204.789127,274.597829 212.423327,273.1211 219.564141,270.231996 C229.018296,266.381002 237.301194,260.131718 243.591665,252.102808 C249.882137,244.073897 253.962234,234.544232 255.427808,224.456825 C256.807576,214.47496 255.682653,204.307752 252.154292,194.867326 Z M128.000069,209.170404 C113.106642,190.292125 103.549518,172.761008 100.196202,158.064077 C98.8224404,152.557019 98.498092,146.841451 99.2403179,141.214263 C99.826376,137.089547 101.341718,133.15103 103.672221,129.694746 C106.539873,125.975894 110.225261,122.964088 114.443506,120.891862 C118.661752,118.820494 123.300449,117.742764 128.001785,117.742764 C132.703979,117.742764 137.341818,118.821352 141.560063,120.894436 C145.778309,122.966662 149.462838,125.978468 152.33049,129.69732 C154.660993,133.155321 156.176335,137.093837 156.762394,141.219412 C157.502903,146.849173 157.177697,152.566458 155.801361,158.075232 C152.444613,172.770446 142.890063,190.296416 128.000069,209.170404 Z M238.032265,221.97187 C237.007736,229.024303 234.154671,235.688032 229.75709,241.301491 C225.358651,246.915807 219.567573,251.28593 212.957043,253.978537 C206.27272,256.656557 199.018642,257.605576 191.869248,256.737215 C184.437551,255.779615 177.275286,253.33413 170.814059,249.545775 C160.887968,243.969214 150.840032,235.408303 139.533315,222.84967 C157.532936,200.654971 168.772724,180.197853 172.934337,161.976852 C174.807492,154.314335 175.213356,146.367799 174.131337,138.555979 C173.149711,131.826179 170.651027,125.406139 166.824059,119.77981 C162.340671,113.709861 156.492103,108.775132 149.749432,105.374622 C143.005902,101.974112 135.557043,100.202208 128.001785,100.202208 C120.447384,100.202208 112.997667,101.973254 106.254138,105.372905 C99.5106082,108.772557 93.66204,113.706429 89.1786525,119.776378 C85.3522851,125.400991 82.8539443,131.819314 81.8713745,138.547398 C80.7888402,146.356644 81.1926454,154.29889 83.0615959,161.958833 C87.2205492,180.187557 98.4611952,200.649823 116.466823,222.851386 C105.160105,235.408303 95.1121692,243.969214 85.1859922,249.546633 C78.7246801,253.33413 71.5631872,255.780473 64.1313182,256.737215 C56.981066,257.605576 49.726988,256.656557 43.0422359,253.978537 C36.4317921,251.28593 30.6408,246.915807 26.2428758,241.302349 C21.8450373,235.688032 18.9928307,229.024303 17.9688164,221.97187 C16.983844,214.80274 17.8220873,207.501469 20.4063204,200.740778 C21.3886328,197.979526 22.5381819,195.269758 23.9623117,192.0503 C25.9770474,187.495693 28.1150869,182.866434 30.1831942,178.389911 L30.4609497,177.788408 C49.3938873,136.791798 69.7161174,95.2297239 90.8638914,54.254909 L91.7056527,52.6236424 C93.8585368,48.4464124 96.0852144,44.1274301 98.3316275,39.9540613 C100.480221,35.6526694 103.081015,31.5914497 106.090247,27.8390474 C108.756254,24.6181304 112.102706,22.0248876 115.889345,20.244661 C119.676842,18.4643486 123.810997,17.5407278 127.996636,17.5407278 C132.182275,17.5407278 136.317289,18.4630615 140.103928,20.2426875 C143.891425,22.0223134 147.237877,24.6150414 149.904741,27.8355294 C152.91569,31.5851 155.517342,35.6449468 157.664219,39.9461671 C159.890039,44.0823817 162.096981,48.3624936 164.231846,52.5013682 L165.136246,54.2567109 C186.283248,95.2271497 206.604791,136.788366 225.539702,177.79184 L225.710457,178.160808 C227.814432,182.712841 229.989625,187.417609 232.037826,192.052016 C233.463929,195.275764 234.615452,197.988107 235.595361,200.739062 C238.178136,207.500611 239.016465,214.801882 238.032265,221.97187 Z" fill="currentColor"></path>
            </g>
        </svg>
      </div>
      
      {/* Smaller Airbnb logo on the left */}
      <div className="absolute -left-36 top-[20%] w-[400px] h-[400px] opacity-[0.02] rotate-[25deg] z-0 text-white">
        {/* Airbnb logo SVG */}
        <svg width="256px" height="275px" viewBox="0 0 256 275" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
            <g>
                <path d="M252.154292,194.867326 C250.922969,191.411042 249.483995,188.067164 248.115382,184.968693 C246.007975,180.203002 243.801033,175.427872 241.666168,170.812343 L241.49713,170.445949 C222.457534,129.215088 202.021868,87.4204781 180.759028,46.2240251 L179.856344,44.4748604 C177.687157,40.2680272 175.445034,35.9182404 173.143705,31.6442207 C170.415059,26.2353247 167.103788,21.1392792 163.269097,16.4463523 C158.952174,11.2965061 153.555806,7.1547313 147.460973,4.31309597 C141.366141,1.47146064 134.72043,-1.42108547e-14 127.993204,-1.42108547e-14 C121.265978,-1.42108547e-14 114.621126,1.47481567 108.526293,4.31798693 C102.432318,7.1611582 97.036808,11.3043145 92.7216012,16.4551904 C88.8912009,21.1492327 85.5819032,26.2441628 82.852314,31.6503987 C80.5311634,35.9627739 78.2679323,40.3528898 76.0794386,44.5985075 L75.2412811,46.2235961 C53.9774967,87.4230523 33.5420022,129.217662 14.5025787,170.445091 L14.2251664,171.044879 C12.1273701,175.585756 9.95844023,180.281086 7.88624,184.966976 C6.51691479,188.062873 5.07981964,191.404177 3.84717554,194.869042 C0.316679953,204.30861 -0.808331101,214.475818 0.573271296,224.456825 C2.03843546,234.543374 6.11806921,244.073897 12.4081288,252.102808 C18.6981713,260.131718 26.9804681,266.381002 36.4346237,270.231996 C43.575523,273.1211 51.2108391,274.597829 58.9160875,274.580816 C61.3365161,274.580816 63.7548853,274.439087 66.1590965,274.159358 C75.9043934,272.917739 85.3032896,269.746332 93.8044787,264.832196 C104.955886,258.567466 115.969145,249.386175 128.000069,236.266368 C140.030992,249.386175 151.044251,258.567466 162.195659,264.832196 C170.696504,269.74719 180.095744,272.917739 189.840783,274.159358 C192.24508,274.439087 194.663964,274.580816 197.084565,274.580816 C204.789127,274.597829 212.423327,273.1211 219.564141,270.231996 C229.018296,266.381002 237.301194,260.131718 243.591665,252.102808 C249.882137,244.073897 253.962234,234.544232 255.427808,224.456825 C256.807576,214.47496 255.682653,204.307752 252.154292,194.867326 Z M128.000069,209.170404 C113.106642,190.292125 103.549518,172.761008 100.196202,158.064077 C98.8224404,152.557019 98.498092,146.841451 99.2403179,141.214263 C99.826376,137.089547 101.341718,133.15103 103.672221,129.694746 C106.539873,125.975894 110.225261,122.964088 114.443506,120.891862 C118.661752,118.820494 123.300449,117.742764 128.001785,117.742764 C132.703979,117.742764 137.341818,118.821352 141.560063,120.894436 C145.778309,122.966662 149.462838,125.978468 152.33049,129.69732 C154.660993,133.155321 156.176335,137.093837 156.762394,141.219412 C157.502903,146.849173 157.177697,152.566458 155.801361,158.075232 C152.444613,172.770446 142.890063,190.296416 128.000069,209.170404 Z M238.032265,221.97187 C237.007736,229.024303 234.154671,235.688032 229.75709,241.301491 C225.358651,246.915807 219.567573,251.28593 212.957043,253.978537 C206.27272,256.656557 199.018642,257.605576 191.869248,256.737215 C184.437551,255.779615 177.275286,253.33413 170.814059,249.545775 C160.887968,243.969214 150.840032,235.408303 139.533315,222.84967 C157.532936,200.654971 168.772724,180.197853 172.934337,161.976852 C174.807492,154.314335 175.213356,146.367799 174.131337,138.555979 C173.149711,131.826179 170.651027,125.406139 166.824059,119.77981 C162.340671,113.709861 156.492103,108.775132 149.749432,105.374622 C143.005902,101.974112 135.557043,100.202208 128.001785,100.202208 C120.447384,100.202208 112.997667,101.973254 106.254138,105.372905 C99.5106082,108.772557 93.66204,113.706429 89.1786525,119.776378 C85.3522851,125.400991 82.8539443,131.819314 81.8713745,138.547398 C80.7888402,146.356644 81.1926454,154.29889 83.0615959,161.958833 C87.2205492,180.187557 98.4611952,200.649823 116.466823,222.851386 C105.160105,235.408303 95.1121692,243.969214 85.1859922,249.546633 C78.7246801,253.33413 71.5631872,255.780473 64.1313182,256.737215 C56.981066,257.605576 49.726988,256.656557 43.0422359,253.978537 C36.4317921,251.28593 30.6408,246.915807 26.2428758,241.302349 C21.8450373,235.688032 18.9928307,229.024303 17.9688164,221.97187 C16.983844,214.80274 17.8220873,207.501469 20.4063204,200.740778 C21.3886328,197.979526 22.5381819,195.269758 23.9623117,192.0503 C25.9770474,187.495693 28.1150869,182.866434 30.1831942,178.389911 L30.4609497,177.788408 C49.3938873,136.791798 69.7161174,95.2297239 90.8638914,54.254909 L91.7056527,52.6236424 C93.8585368,48.4464124 96.0852144,44.1274301 98.3316275,39.9540613 C100.480221,35.6526694 103.081015,31.5914497 106.090247,27.8390474 C108.756254,24.6181304 112.102706,22.0248876 115.889345,20.244661 C119.676842,18.4643486 123.810997,17.5407278 127.996636,17.5407278 C132.182275,17.5407278 136.317289,18.4630615 140.103928,20.2426875 C143.891425,22.0223134 147.237877,24.6150414 149.904741,27.8355294 C152.91569,31.5851 155.517342,35.6449468 157.664219,39.9461671 C159.890039,44.0823817 162.096981,48.3624936 164.231846,52.5013682 L165.136246,54.2567109 C186.283248,95.2271497 206.604791,136.788366 225.539702,177.79184 L225.710457,178.160808 C227.814432,182.712841 229.989625,187.417609 232.037826,192.052016 C233.463929,195.275764 234.615452,197.988107 235.595361,200.739062 C238.178136,207.500611 239.016465,214.801882 238.032265,221.97187 Z" fill="currentColor"></path>
            </g>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mobile layout: Stack reviews on top of stats */}
        <div className="block md:hidden mb-8">
          <h2 className="text-3xl font-bold mb-4 text-white text-center">
            Des voyageurs satisfaits
          </h2>
          
          <p className="text-lg text-white/90 mb-6 text-center">
            Notre satisfaction réside dans la satisfaction de vos voyageurs.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left Column - Rating and Stats - Hidden on mobile and shown below reviews */}
          <div className="hidden md:block md:w-1/3 text-white stagger-item" style={isMounted ? { ...visibleStaggerStyle, transitionDelay: '0.1s' } : initialStaggerStyle}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Des voyageurs satisfaits
            </h2>
            
            <p className="text-lg text-white/90 mb-8">
              Notre satisfaction réside dans la satisfaction de vos voyageurs.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl mb-8 card-shadow border border-white/20">
              <div className="font-bold text-4xl md:text-5xl text-white">4,94</div>
              <div className="text-yellow-400 text-2xl mt-1">★★★★★</div>
              <div className="text-white/80 mt-1">Sur plus de 150 avis Airbnb</div>
            </div>
            
            <div className="flex items-center mt-auto">
              <div className="mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[color:var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <p className="text-white/90 font-medium">
                Tous nos avis sont authentiques et proviennent de la plateforme Airbnb.
              </p>
            </div>
          </div>
          
          {/* Right Column - Reviews Swiper */}
          <div className="w-full md:w-2/3 stagger-item" style={isMounted ? { ...visibleStaggerStyle, transitionDelay: '0.3s' } : initialStaggerStyle}>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 card-shadow border border-white/20">
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                centeredSlides={false}
                breakpoints={{
                  768: { slidesPerView: 2 },
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                navigation={true}
                className="reviews-swiper"
                style={{ paddingBottom: "40px" }}
              >
                {reviews.map((review, index) => (
                  <SwiperSlide key={index} className="h-auto">
                    <div className="bg-white rounded-xl p-4 md:p-5 shadow-md h-full flex flex-col">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 relative mr-2 sm:mr-3 rounded-full overflow-hidden flex-shrink-0">
                          {isMounted ? (
                            <AvatarImage index={index + 1} name={review.name} />
                          ) : (
                            <AvatarSVG seed={review.name} />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-bold text-sm truncate">{review.name}</div>
                          <div className="text-xs text-gray-500">{review.date}</div>
                        </div>
                        <div className="text-yellow-400 text-sm ml-1 flex-shrink-0">
                          {"★".repeat(review.rating)}
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm">{review.text}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Mobile Stats Section - Shown below reviews on mobile */}
          <div className="block md:hidden w-full mt-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl mb-5 card-shadow border border-white/20">
              <div className="font-bold text-4xl text-white text-center">4,94</div>
              <div className="text-yellow-400 text-2xl mt-1 text-center">★★★★★</div>
              <div className="text-white/80 mt-1 text-center">Sur plus de 150 avis Airbnb</div>
            </div>
            
            <div className="flex items-center">
              <div className="mr-3 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[color:var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <p className="text-white/90 font-medium text-sm">
                Tous nos avis sont authentiques et proviennent de la plateforme Airbnb.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 