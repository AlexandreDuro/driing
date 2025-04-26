"use client"

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import '../styles/swiper-custom.css';

// Enhanced keyword items with icons - more items
const keywordItems = [
  { text: "Gestion sans stress", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
  { text: "Revenus optimisés", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { text: "Protection de votre bien", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { text: "Taux d'occupation élevé", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
  { text: "Confiance absolue", icon: "M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" },
  { text: "Rentabilité durable", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
  { text: "Service 24/7", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { text: "Ménage professionnel", icon: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" },
  { text: "Accueil personnalisé", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
  { text: "Gestion du calendrier", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
  { text: "Photos professionnelles", icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" },
  { text: "Tarification dynamique", icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" },
  { text: "Maintenance rapide", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
  { text: "Communication fluide", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
  { text: "Économie d'énergie", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
  { text: "Accès sécurisé", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" }
];

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
    document.documentElement.style.setProperty('--animation-delay', '0s');
    window.requestAnimationFrame(() => {
      document.documentElement.classList.add('animations-ready');
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: React.MouseEvent<Element, MouseEvent> | MouseEvent) => {
      if (heroRef.current) {
        const { left, top, width, height } = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        setMousePosition({ x, y });
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  // Base styles that will be the same on server and client
  const initialStaggerStyle = { opacity: 0, transform: 'translateY(20px)' };
  const visibleStaggerStyle = { opacity: 1, transform: 'translateY(0)' };

  return (
    <section 
      ref={heroRef}
      className="pt-28 pb-20 md:pt-36 md:pb-24 relative overflow-hidden parallax-container page-transition"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[color:var(--secondary)] to-white z-0 opacity-90"></div>
      
      {isMounted && (
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-white/50"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[color:var(--primary)]/5 via-transparent to-[color:var(--accent)]/5"></div>
        </div>
      )}
      
      {/* Animated background shapes - only animate on client side */}
      {isMounted && (
        <>
          <div 
            className="absolute top-0 right-0 w-1/3 h-1/3 bg-[color:var(--accent-light)]/20 rounded-full blur-3xl z-0"
            style={{ 
              transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          ></div>
          <div 
            className="absolute bottom-1/3 left-1/4 w-1/4 h-1/4 bg-[color:var(--primary)]/10 rounded-full blur-3xl z-0"
            style={{ 
              transform: `translate(${-mousePosition.x * 40}px, ${-mousePosition.y * 40}px)`,
              transition: 'transform 0.2s ease-out'
            }}
          ></div>
          
          {/* Animated dots */}
          <div className="absolute left-[10%] top-[30%] h-3 w-3 rounded-full bg-[color:var(--primary)] opacity-70 animate-pulse-slow"></div>
          <div className="absolute right-[15%] top-[60%] h-2 w-2 rounded-full bg-[color:var(--accent)] opacity-60 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute left-[25%] bottom-[20%] h-4 w-4 rounded-full bg-[color:var(--primary-light)] opacity-50 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 md:pr-6">
            <div className="stagger-item" style={isMounted ? { ...visibleStaggerStyle, transitionDelay: '0.1s' } : initialStaggerStyle}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-[color:var(--primary)] inline-block hover-pop">Confiance, rentabilité, sérénité</span><br />
                <span className="relative inline-block">
                  l'excellence
                  <svg 
                    className="absolute -bottom-3 left-0 w-full z-10" 
                    viewBox="0 0 240 16" 
                    xmlns="http://www.w3.org/2000/svg" 
                    overflow="visible"
                  >
                    <path 
                      d="M4 8C30 6 100 4 236 8" 
                      stroke="var(--accent)" 
                      strokeWidth="4" 
                      fill="none" 
                      strokeLinecap="round" 
                      style={{
                        strokeDasharray: 300,
                        strokeDashoffset: isMounted ? 0 : 300,
                        transition: "stroke-dashoffset 2s ease"
                      }}
                    />
                  </svg>
                </span> sans effort
              </h1>
            </div>
            
            <div className="stagger-item" style={isMounted ? { ...visibleStaggerStyle, transitionDelay: '0.3s' } : initialStaggerStyle}>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto md:mx-0 flex items-center flex-wrap">
                Avec Driing Conciergerie, profitez pleinement de votre temps : nous gérons votre bien et maximisons vos revenus.
              </p>
            </div>
            
            <div className="stagger-item" style={isMounted ? { ...visibleStaggerStyle, transitionDelay: '0.5s' } : initialStaggerStyle}>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  href="/contact"
                  className="btn-accent-fancy w-full sm:w-auto text-center hover-pop"
                >
                  Demander un audit gratuit
                </Link>
                
                <Link
                  href="/services"
                  className="text-[color:var(--primary)] hover:text-[color:var(--primary-dark)] font-bold flex items-center transition-colors group"
                >
                  <span>Découvrir nos services</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative stagger-item" style={isMounted ? { ...visibleStaggerStyle, transitionDelay: '0.7s' } : initialStaggerStyle}>
            <div 
              className="relative w-full h-80 md:h-96 bg-gray-200 rounded-xl card-shadow floating overflow-hidden"
              style={isMounted ? { 
                transform: `perspective(1000px) rotateX(${(mousePosition.y - 0.5) * -5}deg) rotateY(${(mousePosition.x - 0.5) * 5}deg)`,
                transition: 'transform 0.2s ease-out'
              } : {}}
            >
              {/* Hero image */}
              <Image
                src="/images/hero-apartment.webp" 
                alt="Appartement élégant et moderne"
                fill
                className="object-cover"
                priority
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAAQAAAACQAAAgAAQUxQSAgAAAABF6AmAAMwEcg8QdYAVlA4IDYAAADQAQCdASoKAAMAAUAmJaQAAudYtSAA/vpo8e/3J8f1eMH2n2D+c/qP+z8+vhvzI/4XwX/AA=="
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-6">
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                  <span className="ml-2 font-medium">4.93/5 sur plus de 200 commentaires</span>
                </div>
              </div>
            </div>
            
            {/* Decorative badge positioned absolutely relative to the outer container */}
            <div className="absolute top-[-12px] right-[-12px] bg-white rounded-lg p-2 shadow-lg glass-effect rotate-3 transform hover:rotate-0 transition-transform duration-300 hover-pop z-10">
              <div className="flex items-center gap-2">
                <div className="bg-[color:var(--accent)] h-3 w-3 rounded-full"></div>
                <span className="text-xs font-medium">Fiabilité garantie</span>
              </div>
            </div>
            
            <div className="absolute -right-4 -bottom-4 bg-white p-4 rounded-lg shadow-lg card-shadow hidden md:block hover-pop">
              <div className="text-[color:var(--primary)] font-bold text-xl">+82%</div>
              <div className="text-sm text-gray-600">Taux d&apos;occupation</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Keyword Swiper Section */}
      <div className="mt-12 stagger-item" style={isMounted ? { ...visibleStaggerStyle, transitionDelay: '0.9s' } : initialStaggerStyle}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Pourquoi choisir <span className="text-[color:var(--primary)]">Driing</span> ?
            </h2>
          </div>
          
          <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            freeMode={{
              enabled: true,
              momentum: false,
              momentumBounce: false,
            }}
            speed={12000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              stopOnLastSlide: false,
              reverseDirection: false,
            }}
            allowTouchMove={false}
            loop={true}
            className="keyword-swiper"
          >
            {keywordItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-md p-3 h-full flex flex-col items-center text-center hover:shadow-lg transition-shadow hover:border-[color:var(--accent)] border border-transparent">
                  <div className="w-10 h-10 mb-2 flex items-center justify-center text-[color:var(--primary)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <div className="font-medium text-sm text-gray-900">{item.text}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
} 