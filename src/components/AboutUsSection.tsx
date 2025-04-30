"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function AboutUsSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Base styles that will be the same on server and client
  const initialStaggerStyle = { opacity: 0, transform: 'translateY(20px)' };
  const visibleStaggerStyle = { opacity: 1, transform: 'translateY(0)' };

  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-[color:var(--accent)]/20 text-[color:var(--primary)] px-4 py-1 rounded-full text-sm font-medium mb-3">
            Notre équipe
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Qui Sommes Nous ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez l&apos;équipe passionnée derrière Driing Conciergerie.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column - Owner's Photo */}
          <div className="lg:w-2/5 relative stagger-item" style={isMounted ? { ...visibleStaggerStyle, transitionDelay: '0.1s' } : initialStaggerStyle}>
            <div className="relative h-[500px] w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-[color:var(--accent)]/20 rounded-2xl transform rotate-3"></div>
              <div className="absolute inset-0 overflow-hidden rounded-2xl transform -rotate-3 border-4 border-white shadow-xl">
                <Image
                  src="/images/portrait.jpg"
                  alt="Fondateur de Driing Conciergerie"
                  fill
                  className="object-cover rounded-xl object-[center_top]"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <Image
                  src="/images/logo.png"
                  alt="Driing Conciergerie"
                  width={100}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Description */}
          <div className="lg:w-3/5 stagger-item" style={isMounted ? { ...visibleStaggerStyle, transitionDelay: '0.3s' } : initialStaggerStyle}>
            <h3 className="text-2xl font-bold text-[color:var(--primary)] mb-4">
              Une passion pour l&apos;excellence
            </h3>
            <p className="text-gray-700 mb-6">
              Notre fondateur a commencé son parcours entrepreneurial dès l&apos;âge de 15 ans, animé par une passion pour l&apos;immobilier et le service client exceptionnel. Aujourd&apos;hui basé à Rennes, il a construit Driing Conciergerie avec une vision claire : transformer la gestion locative en une expérience sans souci pour les propriétaires.
            </p>
            <p className="text-gray-700 mb-6">
              Parlant couramment français, anglais et allemand, notre équipe peut accueillir des voyageurs internationaux avec la même aisance. Nous mettons un point d&apos;honneur à créer des espaces qui allient élégance et confort, avec un mobilier raffiné, une ambiance chaleureuse et une propreté irréprochable.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="font-medium text-[color:var(--primary)]">Notre approche</div>
                <p className="text-sm text-gray-600">Chaque détail est pensé pour garantir une expérience unique, que ce soit pour un séjour d&apos;affaires ou de loisirs.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="font-medium text-[color:var(--primary)]">Notre engagement</div>
                <p className="text-sm text-gray-600">Profitez d&apos;un cadre authentique et relaxant, où tout est fait pour le bien-être des voyageurs.</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[color:var(--accent)] flex items-center justify-center text-[color:var(--primary)] font-bold">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="font-medium">Rennes, France</div>
                <div className="text-sm text-gray-500">Nous contacter: <a href="/contact" className="text-[color:var(--primary)] hover:underline">Prendre rendez-vous</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 