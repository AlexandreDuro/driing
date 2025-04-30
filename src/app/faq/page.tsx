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
    question: "Qu'est-ce qu'une conciergerie Airbnb ?",
    answer: "Une conciergerie Airbnb est un service professionnel qui prend en charge la gestion complète de votre bien mis en location courte durée. Cela inclut l'accueil des voyageurs, le ménage, la maintenance, et l&apos;optimisation de votre annonce pour maximiser vos revenus."
  },
  {
    question: "Quels services proposez-vous exactement ?",
    answer: "Nous proposons une gestion clé en main qui comprend : création et optimisation des annonces, gestion des réservations, accueil des voyageurs, ménage professionnel, entretien du bien, services de conciergerie 24/7, tarification dynamique, et analyse mensuelle des performances de votre bien."
  },
  {
    question: "Comment fonctionne votre commission ?",
    answer: "Notre commission est un pourcentage prélevé sur les revenus générés par votre bien. Elle commence à 20% pour le pack Essentiel et varie selon le niveau de service choisi. Cette commission couvre l'ensemble de nos prestations sans frais cachés supplémentaires."
  },
  {
    question: "Quel est le taux d'occupation moyen que vous obtenez ?",
    answer: "Notre taux d'occupation moyen est de 82%, bien au-dessus de la moyenne du marché. Cela est rendu possible grâce à notre expertise en optimisation d'annonces, notre stratégie de tarification dynamique et notre excellente réputation qui attire davantage de voyageurs."
  },
  {
    question: "Dois-je signer un contrat d'engagement ?",
    answer: "Oui, nous établissons un contrat qui définit clairement les termes de notre collaboration. La durée d'engagement dépend du pack choisi : pas d'engagement pour le pack Essentiel, 6 mois pour le pack Sérénité, et 1 an pour le pack Privilège."
  },
  {
    question: "Comment serai-je informé(e) des réservations ?",
    answer: "Vous aurez accès à un tableau de bord en ligne où vous pourrez consulter en temps réel le calendrier des réservations, les revenus générés et les commentaires des voyageurs. Nous vous envoyons également un rapport mensuel détaillant les performances de votre bien."
  },
  {
    question: "Que se passe-t-il en cas de dommages causés par un voyageur ?",
    answer: "Nous documentons rigoureusement l'état de votre bien avant et après chaque séjour. En cas de dommages, nous vous assistons dans les démarches auprès d'Airbnb pour obtenir une compensation via leur garantie hôte. Nous pouvons également gérer les réparations nécessaires."
  },
  {
    question: "Puis-je utiliser mon bien quand je le souhaite ?",
    answer: "Absolument ! Vous restez propriétaire et pouvez bloquer votre calendrier pour utiliser votre bien quand vous le souhaitez. Il vous suffit de nous informer à l'avance afin que nous puissions ajuster le calendrier de réservations en conséquence."
  },
  {
    question: "Couvrez-vous uniquement Airbnb ou aussi d&apos;autres plateformes ?",
    answer: "Nous diffusons votre annonce sur plusieurs plateformes (Airbnb, Booking.com, Expedia, etc.) pour maximiser votre visibilité et votre taux d'occupation. Notre système synchronise automatiquement les calendriers pour éviter les doubles réservations."
  },
  {
    question: "Comment démarrer avec Driing Conciergerie ?",
    answer: "Le processus est simple : contactez-nous pour un audit gratuit de votre bien, nous établissons ensemble un prévisionnel de revenus, signons le contrat, puis nous prenons en charge la création des annonces et l'organisation de votre espace. Vous pouvez commencer à générer des revenus en quelques jours seulement !"
  }
]; 