"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-3"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <Image
                src="/images/logo.png"
                alt="Driing Logo"
                width={scrolled ? 130 : 150}
                height={scrolled ? 52 : 60}
                className={`object-contain transition-all duration-300 ${
                  scrolled ? "scale-90" : ""
                }`}
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Navigation - Centered with fancy hover effects */}
          <nav className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-10">
              <Link 
                href="/" 
                className="group text-gray-800 font-medium text-sm relative overflow-hidden px-2 py-1"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[color:var(--primary)]">Accueil</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[color:var(--primary)] transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
              <Link 
                href="/services" 
                className="group text-gray-800 font-medium text-sm relative overflow-hidden px-2 py-1"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[color:var(--primary)]">Services</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[color:var(--primary)] transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
              <Link 
                href="/faq" 
                className="group text-gray-800 font-medium text-sm relative overflow-hidden px-2 py-1"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[color:var(--primary)]">FAQ</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[color:var(--primary)] transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            </div>
          </nav>
          
          {/* Contact Button - Right Aligned */}
          <div className="hidden md:block">
            <Link 
              href="/contact" 
              className="bg-[color:var(--accent)] hover:bg-[color:var(--accent-dark)] text-[color:var(--primary)] font-bold py-3 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-md group relative"
            >
              <span className="relative z-10">Contact</span>
              <span className="absolute inset-0 rounded-lg overflow-hidden">
                <span className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 shine-effect"></span>
              </span>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="text-gray-800 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {!isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-effect animate-fadeIn border-t border-gray-100 px-2 pt-2 pb-4 mt-2 rounded-b-xl mx-4">
          <div className="flex flex-col items-center space-y-3 py-2">
            <Link 
              href="/" 
              className="text-gray-800 hover:text-[color:var(--primary)] transition-colors w-full text-center py-2 rounded-lg hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              href="/services" 
              className="text-gray-800 hover:text-[color:var(--primary)] transition-colors w-full text-center py-2 rounded-lg hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/faq" 
              className="text-gray-800 hover:text-[color:var(--primary)] transition-colors w-full text-center py-2 rounded-lg hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              href="/contact" 
              className="pulse-border w-full text-center py-2 px-4 bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] text-white rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 