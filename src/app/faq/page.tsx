import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Questions fréquentes</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Retrouvez les réponses aux questions les plus posées concernant nos services de conciergerie.
            </p>
          </div>
          
          <div className="space-y-8">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Vous avez une autre question ?</h2>
            <p className="text-gray-600 mb-8">
              N&apos;hésitez pas à nous contacter directement, nous serons ravis de vous répondre.
            </p>
            <a 
              href="/contact" 
              className="btn-primary inline-block"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

const faqItems = [
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