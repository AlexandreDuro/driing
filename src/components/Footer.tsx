"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Driing
              </span>
              <span className="ml-1 text-sm font-light text-gray-400">Conciergerie</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-sm">
              Confiez-nous la gestion de votre bien et maximisez vos revenus en toute sérénité. Notre équipe d&apos;experts est à votre service pour vous offrir une expérience sur mesure.
            </p>
            <div className="flex items-center text-yellow-400 mb-6">
              ★★★★★ <span className="ml-2 text-gray-400 text-sm">4.94/5 sur plus de 150 avis</span>
            </div>
          </div>
          
          <div className="md:col-span-3 md:text-center">
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-4 md:justify-self-end">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@driing.fr" className="text-gray-400 hover:text-white transition-colors">contact@driing.fr</a>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+33677743952" className="text-gray-400 hover:text-white transition-colors">+33 6 77 74 39 52</a>
              </li>
            </ul>
            
            <div className="mt-8">
              <a 
                href="/contact" 
                className="inline-block bg-[color:var(--accent)] hover:bg-[color:var(--accent-dark)] text-[color:var(--primary)] font-medium px-5 py-3 rounded-lg transition-colors"
              >
                Demander un audit gratuit
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Driing Conciergerie. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <Link href="/mentions-legales" className="text-gray-400 hover:text-white transition-colors text-sm">
              Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite" className="text-gray-400 hover:text-white transition-colors text-sm">
              Politique de confidentialité
            </Link>
            <Link href="/cgu" className="text-gray-400 hover:text-white transition-colors text-sm">
              CGU
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 