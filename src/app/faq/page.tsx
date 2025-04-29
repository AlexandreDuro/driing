"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

// FAQ Item component with toggle functionality
function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div 
      className={`bg-white rounded-lg hover:shadow-md transition-all duration-300 overflow-hidden border ${isOpen ? 'border-[color:var(--accent)]' : 'border-gray-100'}`}
    >
      <button 
        onClick={onToggle}
        className="w-full text-left p-4 flex justify-between items-center focus:outline-none group"
      >
        <h3 className={`text-base font-medium ${isOpen ? 'text-[color:var(--primary)]' : 'text-gray-900'} group-hover:text-[color:var(--primary)]`}>
          {question}
        </h3>
        <div className={`flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full ${isOpen ? 'bg-[color:var(--accent)]' : 'bg-gray-100 group-hover:bg-[color:var(--accent)]/30'} transition-colors duration-300`}>
          <svg 
            className={`w-3 h-3 ${isOpen ? 'text-[color:var(--primary)]' : 'text-gray-500'} transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 pt-0 text-sm text-gray-600 border-t border-gray-100">
          {answer}
        </div>
      </div>
    </div>
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});
  
  const toggleItem = (index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="pt-32 pb-24 relative">
        {/* Yellow accent elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[color:var(--accent)]/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[color:var(--accent)]/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="inline-block bg-[color:var(--accent)]/20 text-[color:var(--primary)] px-4 py-1 rounded-full text-sm font-medium mb-3">Support client</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Questions fréquentes</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Retrouvez les réponses aux questions les plus posées concernant nos services de conciergerie.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* CTA on the left */}
            <div className="lg:w-1/3 sticky top-24 self-start">
              <div className="glass-card p-6 border-t-4 border-[color:var(--accent)]">
                <div className="w-12 h-12 rounded-full bg-[color:var(--accent)] flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[color:var(--primary)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Vous avez une autre question ?</h2>
                <p className="text-gray-600 mb-6">
                  Notre équipe est disponible pour répondre à toutes vos questions et vous accompagner dans votre projet.
                </p>
                <a 
                  href="/contact" 
                  className="btn-accent w-full text-center font-bold"
                  style={{ color: 'var(--primary)' }}
                >
                  Nous contacter
                </a>
              </div>
            </div>
            
            {/* Questions on the right */}
            <div className="lg:w-2/3 space-y-3">
              {faqItems.map((item, index) => (
                <FAQItem 
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={!!openItems[index]}
                  onToggle={() => toggleItem(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

const faqItems: FAQItem[] = [
  {
    question: "Qu&apos;est-ce qu&apos;une conciergerie d&apos;entreprise ?",
    answer: "Une conciergerie d&apos;entreprise est un service qui permet aux collaborateurs de déléguer leurs tâches personnelles quotidiennes. Cela leur permet de se concentrer pleinement sur leur travail tout en améliorant leur équilibre vie professionnelle/vie personnelle."
  },
  {
    question: "Quels services proposez-vous ?",
    answer: "Nous proposons une large gamme de services : pressing, cordonnerie, retouches, livraison de courses, services postaux, réservations (restaurants, voyages, spectacles), services à domicile, aide administrative, et bien d&apos;autres prestations personnalisées selon les besoins de votre entreprise."
  },
  {
    question: "Comment fonctionne la mise en place d&apos;une conciergerie ?",
    answer: "Après une analyse de vos besoins, nous définissons ensemble le périmètre des services, les horaires de présence et les modalités pratiques. Nous installons ensuite un espace dédié dans vos locaux et mettons à disposition un(e) concierge formé(e) qui devient l&apos;interlocuteur privilégié de vos collaborateurs."
  },
  {
    question: "Quel est le coût d&apos;une conciergerie d&apos;entreprise ?",
    answer: "Le coût dépend de plusieurs facteurs : taille de l&apos;entreprise, nombre de collaborateurs, fréquence de présence souhaitée et éventail des services proposés. Nous établissons un devis personnalisé après étude de vos besoins spécifiques."
  },
  {
    question: "Quelle est la différence entre une conciergerie et des avantages classiques ?",
    answer: "Contrairement aux avantages classiques souvent standardisés, la conciergerie offre des services personnalisés et évolutifs qui répondent aux besoins réels des collaborateurs. Elle crée également un lien humain grâce à la présence d&apos;un concierge dédié qui connaît les habitudes de chacun."
  },
  {
    question: "Comment mesurer le retour sur investissement d&apos;une conciergerie ?",
    answer: "Le ROI se mesure à travers plusieurs indicateurs : taux d&apos;utilisation des services, enquêtes de satisfaction, gain de temps pour les collaborateurs, impact sur le bien-être et la productivité, ainsi que l&apos;attractivité et la fidélisation des talents."
  },
  {
    question: "Proposez-vous des services en dehors des heures de bureau ?",
    answer: "Oui, nous pouvons adapter nos services pour répondre aux besoins en dehors des heures de bureau classiques, notamment via notre plateforme digitale qui permet de faire des demandes 24h/24 et 7j/7."
  },
  {
    question: "La conciergerie est-elle adaptée aux PME ?",
    answer: "Absolument ! Nous proposons des formules flexibles spécialement conçues pour les PME, avec des présences adaptées à la taille de l&apos;entreprise et un choix de services optimisé pour maximiser l&apos;impact auprès de vos collaborateurs."
  },
  {
    question: "Comment garantissez-vous la qualité des prestataires ?",
    answer: "Tous nos prestataires sont rigoureusement sélectionnés selon des critères stricts de qualité, fiabilité et éthique. Nous privilégions les artisans et commerces locaux et évaluons régulièrement leurs prestations pour maintenir un niveau d&apos;excellence."
  },
  {
    question: "Peut-on personnaliser les services selon notre secteur d&apos;activité ?",
    answer: "Tout à fait ! Nous adaptons notre offre aux spécificités de votre secteur d&apos;activité et à la culture de votre entreprise pour proposer des services parfaitement alignés avec vos valeurs et les besoins particuliers de vos équipes."
  }
]; 