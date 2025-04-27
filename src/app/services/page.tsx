import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/FeaturesSection";
import ContactSection from "@/components/ContactSection";

export default function Services() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 pb-8 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
            Nos Services
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center">
            Une gamme complète de services pour optimiser votre bien immobilier et maximiser vos revenus.
          </p>
        </div>
      </div>
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Gestion locative complète</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-indigo-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Création d&apos;annonces optimisées
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-indigo-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Gestion des réservations
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-indigo-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Tarification dynamique
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-indigo-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Suivi et communication avec les voyageurs
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Conciergerie premium</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-indigo-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Accueil personnalisé des voyageurs
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-indigo-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Ménage et préparation du logement
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-indigo-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Gestion du linge (draps, serviettes)
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-indigo-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Assistance 24/7 pour les voyageurs
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Valorisation immobilière</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-indigo-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Conseils d&apos;aménagement et de décoration
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-indigo-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Reportage photo professionnel
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-indigo-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Petits travaux et réparations
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-indigo-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Mise en valeur du bien pour maximiser les revenus
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Services sur mesure</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-indigo-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Gestion des imprévus
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-indigo-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Conciergerie événementielle
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-indigo-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Services personnalisés selon vos besoins
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-indigo-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Solutions adaptées à votre situation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </main>
  );
} 