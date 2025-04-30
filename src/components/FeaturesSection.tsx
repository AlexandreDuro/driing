"use client";

import { ReactNode, useEffect, useState } from "react";
import { ClockIcon, EuroIcon, ShieldCheckIcon } from "../components/Icons";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  index: number;
}

function FeatureCard({ title, description, icon, index }: FeatureCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300 + index * 150);
    
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div 
      className={`interactive-card bg-white rounded-xl p-8 transition-all duration-500 transform ${
        isMounted && isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: isMounted ? `${index * 0.1}s` : '0s' }}
    >
      <div className="mb-6 w-16 h-16 rounded-full bg-[color:var(--secondary)] flex items-center justify-center text-[color:var(--primary)] hover-pop">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });
    
    const element = document.getElementById('features');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section className="py-20 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 transform ${
          isMounted && isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <span className="inline-block bg-[color:var(--accent)]/20 text-[color:var(--primary)] px-4 py-1 rounded-full text-sm font-medium mb-3">
            Nos avantages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4 relative">
            Pourquoi faire confiance à 
            <span className="text-[color:var(--primary)] ml-2 relative hover-pop">
              Driing Conciergerie
            </span>
            <span className="text-[color:var(--primary)]">?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous simplifions votre expérience de location et maximisons vos revenus grâce à notre expertise et notre attention aux détails.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          <FeatureCard
            title="Libérez-vous du temps"
            description="Fini les arrivées tardives, les appels imprévus et la gestion quotidienne. Avec Driing, vous profitez pleinement de votre temps pendant que nous prenons soin de votre bien."
            icon={<ClockIcon />}
            index={0}
          />
          <FeatureCard
            title="Maximisez vos revenus"
            description="Nous optimisons chaque détail : annonces attractives, tarification dynamique, taux d'occupation élevé. Votre bien génère un revenu maximum sans stress."
            icon={<EuroIcon />}
            index={1}
          />
          <FeatureCard
            title="Dites adieu au stress"
            description="Confiance, réactivité, transparence : nous gérons votre bien avec rigueur et passion, pour vous garantir une totale tranquillité d'esprit."
            icon={<ShieldCheckIcon />}
            index={2}
          />
        </div>
        
        <div className={`mt-20 bg-[color:var(--accent)] rounded-2xl p-8 md:p-12 card-shadow transition-all duration-700 transform ${
          isMounted && isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`} style={{ transitionDelay: isMounted ? '0.6s' : '0s' }}>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl md:text-3xl font-bold text-[color:var(--primary)] mb-4 inline-block hover-pop">
                On s&apos;occupe de tout
              </h3>
              <p className="text-[color:var(--primary-dark)] mb-6 text-lg font-medium">
                Nous simplifions chaque étape, de la remise des clés à l&apos;analyse des performances, 
                pour vous garantir un rendement maximal et une tranquillité d&apos;esprit totale.
              </p>
              <ul className="fancy-list">
                {["Gestion des réservations", "Accueil des voyageurs", "Ménage professionnel", "Entretien du bien", "Service client 24/7"].map((item, i) => (
                  <li key={i} className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                    <svg className="h-6 w-6 text-[color:var(--primary)] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[color:var(--primary)] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/3">
              <div className="bg-white rounded-xl p-6 fancy-shadow hover-tilt">
                <div className="text-center">
                  <span className="inline-block animated-gradient text-white text-xs font-semibold px-2.5 py-1 rounded-full mb-4">
                    À partir de
                  </span>
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-4xl md:text-5xl font-bold text-gray-900 hover-pop">20%</span>
                    <span className="text-gray-600 ml-2">de commission</span>
                  </div>
                  <p className="text-gray-600 mb-6">Sur les revenus générés</p>
                  <a 
                    href="/tarifs" 
                    className="btn-fancy py-3 px-8 rounded-lg text-white font-medium block w-full text-center"
                  >
                    Découvrir les offres
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 