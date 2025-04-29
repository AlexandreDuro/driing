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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Tarifs et forfaits</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des solutions adaptées à vos besoins avec un engagement sur la qualité de service et la rentabilité de votre bien.
            </p>
            <p className="text-sm text-gray-500 mt-4">💼 Les pourcentages sont HT (Hors Taxes)</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Pack Essentiel */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl">
              <div className="p-6 border-b border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🟩</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Pack Essentiel</h2>
                <div className="text-3xl font-bold text-[color:var(--primary)] mb-4">
                  20% <span className="text-sm font-normal text-gray-500">du CA Net</span>
                </div>
                <p className="text-gray-600 text-sm">L&apos;essentiel pour démarrer l&apos;optimisation de votre bien</p>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3">
                  {[
                    "Création et optimisation des annonces",
                    "Diffusion de l'annonce sur les meilleurs canaux",
                    "Gestion des réseaux et du calendrier",
                    "Analyses mensuelles",
                    "Accueil et assistance des voyageurs 24h/24 et 7j/7",
                    "Ménage, blanchisserie, maintenance et entretien",
                    "Gestion intelligente des prix (→ augmentation des revenus)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
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
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-[color:var(--primary)] relative transform hover:scale-105 transition-all duration-300 -translate-y-6">
              <div className="absolute top-0 inset-x-0 bg-[color:var(--primary)] text-white text-center py-2 text-sm">
                <span className="font-bold">Option recommandée</span>
              </div>
              
              <div className="p-6 border-b border-gray-100 pt-12">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🟦</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Pack Sérénité</h2>
                <div className="text-3xl font-bold text-[color:var(--primary)] mb-4">
                  20% <span className="text-sm font-normal text-gray-500">du CA Net</span>
                </div>
                <div className="bg-[color:var(--accent)]/10 text-sm rounded-lg p-2 mb-4">
                  <span className="font-bold text-[color:var(--primary)]">➡️ Inclut tout le contenu du pack &quot;Essentiel&quot;</span>
                </div>
                <p className="text-gray-600 text-sm">➡️ C&apos;est ce pack qu&apos;il faut vendre en priorité</p>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[color:var(--primary)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm">Engagement : 6 mois</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[color:var(--primary)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm">Pack photos pro offert (1 par objet)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[color:var(--primary)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm">1 mois d&apos;internet offert</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[color:var(--primary)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm">Consommables offerts à partir du 1er mois</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[color:var(--primary)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm font-medium">Accompagnement et conseils :</span>
                  </li>
                  <ul className="pl-7 space-y-2">
                    <li className="flex items-start">
                      <svg className="h-4 w-4 text-[color:var(--primary)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Juridiques</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-4 w-4 text-[color:var(--primary)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Fiscaux</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-4 w-4 text-[color:var(--primary)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Financiers</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-4 w-4 text-[color:var(--primary)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">Investissement</span>
                    </li>
                  </ul>
                </ul>
                
                <div className="mt-8">
                  <Link 
                    href="/contact" 
                    className="w-full block py-3 px-4 text-center rounded-lg bg-[color:var(--primary)] text-white font-medium hover:bg-[color:var(--primary-dark)] shadow-md hover:shadow-lg transition-all"
                  >
                    Demander un devis
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Pack Privilège */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl">
              <div className="p-6 border-b border-gray-100">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🟨</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Pack Privilège</h2>
                <div className="text-3xl font-bold text-[color:var(--primary)] mb-4">
                  25% <span className="text-sm font-normal text-gray-500">du CA Net</span>
                </div>
                <div className="bg-[color:var(--accent)]/10 text-sm rounded-lg p-2 mb-4">
                  <span className="font-bold text-[color:var(--primary)]">➡️ Inclut tout le contenu des packs &quot;Essentiel&quot; et &quot;Sérénité&quot;</span>
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3">
                  {[
                    "Photos professionnelles",
                    "Linge de lit et draps de bain fournis",
                    "3 mois de consommables offerts",
                    "Accompagnement à la création de société (SCI, etc.)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                  
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm font-medium">Conseils :</span>
                  </li>
                  <ul className="pl-7 space-y-2">
                    {[
                      "Juridiques",
                      "Fiscaux",
                      "Comptables",
                      "Décoration",
                      "Rebranding du bien"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-4 w-4 text-yellow-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <li className="flex items-start pt-4">
                    <svg className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm">Engagement : 1 an</span>
                  </li>
                </ul>
                
                <div className="mt-8 bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                  <p className="font-medium text-sm text-gray-800 mb-2">Contenu supplémentaire :</p>
                  <ul className="pl-2 space-y-1">
                    {[
                      "Pack photo pro offert",
                      "2 mois d'internet offerts",
                      "2 mois de consommables offerts",
                      "2 jeux de linges de lit",
                      "4 jeux de draps de bain",
                      "Conseil juridique inclus"
                    ].map((item, i) => (
                      <li key={i} className="text-sm text-gray-700 flex">
                        <span className="mr-2">{i+1}.</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8">
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