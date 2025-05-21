"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Tarifs() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="pt-32 pb-24 relative">
        {/* Yellow accent elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[color:var(--accent)]/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[color:var(--accent)]/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="inline-block bg-[color:var(--accent)]/20 text-[color:var(--primary)] px-4 py-1 rounded-full text-sm font-medium mb-3">Nos offres</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Formules et tarifs</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des solutions adaptées à vos besoins avec un engagement sur la qualité de service et la rentabilité de votre bien.
            </p>
            <p className="text-sm text-gray-500 mt-4">💼 Les pourcentages sont TTC (toutes taxes comprises)</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Pack Essentiel */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl flex flex-col">
              <div className="p-6 border-b border-gray-100 flex flex-col" style={{ minHeight: "280px" }}>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🟩</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Pack Essentiel</h2>
                <div className="text-3xl font-bold text-[color:var(--primary)] mb-4">
                  20% <span className="text-sm font-normal text-gray-500">TTC du CA Net</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  L&apos;essentiel pour démarrer l&apos;optimisation de votre bien
                </p>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="bg-green-50/50 p-4 rounded-xl mb-4">
                  <div className="mb-4 text-center">
                    <span className="font-bold text-[color:var(--primary)] text-lg border-b-2 border-green-400 pb-1">Services inclus</span>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Création et optimisation des annonces",
                      "Diffusion de l'annonce sur les meilleurs canaux",
                      "Gestion intelligente des prix (→ augmentation des revenus)",
                      "Gestion des réservations et du calendrier",
                      "Analyses mensuelles",
                      "Accueil et assistance des voyageurs 24h/24 et 7j/7",
                      "Ménage, blanchisserie, maintenance et entretien"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <Link 
                    href="/contact" 
                    className="w-full block py-3 px-4 text-center rounded-lg border-2 border-[color:var(--primary)] text-[color:var(--primary)] font-medium hover:bg-[color:var(--primary)]/5 transition-colors"
                  >
                    Nous contacter
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Pack Sérénité - HIGHLIGHTED */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-[color:var(--primary)] relative transform hover:scale-105 transition-all duration-300 -translate-y-6 lg:col-span-2 flex flex-col">
              <div className="absolute top-0 inset-x-0 bg-[color:var(--primary)] text-white text-center py-2 text-sm">
                <span className="font-bold">Formule la plus choisie</span>
              </div>
              
              <div className="p-6 border-b border-gray-100 pt-12 flex flex-col" style={{ minHeight: "330px" }}>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🟦</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Pack Sérénité</h2>
                <div className="text-3xl font-bold text-[color:var(--primary)] mb-4">
                  25% <span className="text-sm font-normal text-gray-500">TTC du CA Net</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Une gestion optimisée avec un accompagnement complet et plusieurs durées d&apos;engagement
                </p>
                <div className="bg-[color:var(--accent)]/10 text-sm rounded-lg p-2">
                  <span className="font-bold text-[color:var(--primary)]">➡️ Inclut tout le contenu du pack &quot;Essentiel&quot;</span>
                </div>
                <div className="flex justify-center mt-3 mb-3">
                  <span className="bg-[color:var(--accent)] text-[color:var(--primary)] w-14 h-14 rounded-full flex items-center justify-center font-bold text-2xl shadow-md">+</span>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Left column - 6 month engagement */}
                  <div className="bg-blue-50/50 p-4 rounded-xl">
                    <div className="mb-4 text-center">
                      <span className="font-bold text-[color:var(--primary)] text-lg border-b-2 border-[color:var(--accent)] pb-1">Engagement : 6 mois</span>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-[color:var(--primary)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-sm">Pack photos professionnelles</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-[color:var(--primary)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-sm">1 mois d&apos;internet offert</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-[color:var(--primary)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-sm">Consommables offerts le 1er mois</span>
                      </li>
                      
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-[color:var(--primary)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-sm">Accompagnement et conseils</span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Right column - 1 year engagement */}
                  <div className="bg-blue-50/50 p-4 rounded-xl">
                    <div className="mb-4 text-center">
                      <span className="font-bold text-[color:var(--primary)] text-lg border-b-2 border-[color:var(--accent)] pb-1">Engagement : 1 an</span>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-[color:var(--primary)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-sm">Pack photos professionnelles</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-[color:var(--primary)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-sm">2 mois d&apos;internet offerts</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-[color:var(--primary)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-sm">2 mois de consommables offerts</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-[color:var(--primary)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-sm">2 jeux de linges de lit</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-[color:var(--primary)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-sm">4 jeux de draps de bain</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-[color:var(--primary)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-sm">Accompagnement et conseils</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 bg-blue-50 p-5 rounded-lg border border-blue-100">
                  <p className="font-bold text-sm text-[color:var(--primary)] mb-3 text-center">Accompagnement et conseils inclus</p>
                  <div className="grid grid-cols-2 gap-4">
                    <ul className="space-y-1">
                      <li className="text-gray-700 text-sm flex items-center">
                        <svg className="h-5 w-5 text-[color:var(--primary)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        Juridiques
                      </li>
                      <li className="text-gray-700 text-sm flex items-center">
                        <svg className="h-5 w-5 text-[color:var(--primary)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        Fiscaux
                      </li>
                    </ul>
                    <ul className="space-y-1">
                      <li className="text-gray-700 text-sm flex items-center">
                        <svg className="h-5 w-5 text-[color:var(--primary)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        Financiers
                      </li>
                      <li className="text-gray-700 text-sm flex items-center">
                        <svg className="h-5 w-5 text-[color:var(--primary)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        Investissement
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <Link 
                    href="/contact" 
                    className="w-full block py-3 px-4 text-center rounded-lg bg-[color:var(--primary)] text-white font-medium hover:bg-[color:var(--primary-dark)] shadow-md hover:shadow-lg transition-all"
                  >
                    Nous contacter
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Pack Privilège */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl flex flex-col">
              <div className="p-6 border-b border-gray-100 flex flex-col" style={{ minHeight: "280px" }}>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🟨</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Pack Privilège</h2>
                <div className="text-3xl font-bold text-[color:var(--primary)] mb-4">
                  30% <span className="text-sm font-normal text-gray-500">TTC du CA Net</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Notre formule premium pour une prise en charge totale avec tous les services inclus
                </p>
                <div className="bg-[color:var(--accent)]/10 text-sm rounded-lg p-2">
                  <span className="font-bold text-[color:var(--primary)]">➡️ Inclut tout le contenu du pack &quot;Essentiel&quot;</span>
                </div>
                <div className="flex justify-center mt-3 mb-3">
                  <span className="bg-[color:var(--accent)] text-[color:var(--primary)] w-14 h-14 rounded-full flex items-center justify-center font-bold text-2xl shadow-md">+</span>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="bg-yellow-50/50 p-4 rounded-xl mb-4">
                  <div className="mb-4 text-center">
                    <span className="font-bold text-[color:var(--primary)] text-lg border-b-2 border-[color:var(--accent)] pb-1">Engagement : 1 an</span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Pack photos professionnelles</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">2 mois d&apos;internet offerts</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">3 mois de consommables offerts</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Linges de lit fournis</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Draps de bain fournis</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Accompagnement et conseils</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Conseils de décoration</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <Link 
                    href="/contact" 
                    className="w-full block py-3 px-4 text-center rounded-lg border-2 border-[color:var(--primary)] text-[color:var(--primary)] font-medium hover:bg-[color:var(--primary)]/5 transition-colors"
                  >
                    Nous contacter
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">
              Besoin d&apos;informations supplémentaires ou d&apos;une offre sur mesure ?
            </p>
            <Link 
              href="/contact" 
              className="btn-primary inline-block"
            >
              Contactez notre équipe
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 
