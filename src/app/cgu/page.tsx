"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CGU() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="pt-32 pb-24 relative">
        {/* Yellow accent elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[color:var(--accent)]/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[color:var(--accent)]/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <span className="inline-block bg-[color:var(--accent)]/20 text-[color:var(--primary)] px-4 py-1 rounded-full text-sm font-medium mb-3">Conditions d&apos;utilisation</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Conditions Générales d&apos;Utilisation</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Veuillez lire attentivement ces conditions avant d&apos;utiliser notre site et nos services.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Présentation</h2>
            <p className="text-gray-700 mb-4">
              Les présentes Conditions Générales d&apos;Utilisation (ci-après dénommées « CGU ») ont pour objet de définir les modalités et conditions d&apos;utilisation du site internet driing.fr (ci-après dénommé « le Site ») et des services proposés par SIVY MATHIS, société à responsabilité limitée au capital non communiqué, immatriculée au Registre du Commerce et des Sociétés sous le numéro 938 204 716, dont le siège social est situé au 12 RUE DES MEUNIERS, 22230 TREMOREL (ci-après dénommée « Driing Conciergerie »).
            </p>
            <p className="text-gray-700 mb-4">
              En accédant au Site et en utilisant nos services, vous acceptez sans réserve les présentes CGU. Si vous n&apos;acceptez pas ces conditions, veuillez ne pas utiliser notre Site et nos services.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services proposés</h2>
            <p className="text-gray-700 mb-4">
              Driing Conciergerie propose des services de gestion locative et de conciergerie pour les propriétaires de biens immobiliers mis en location courte durée sur des plateformes telles qu&apos;Airbnb, Booking.com, etc.
            </p>
            <p className="text-gray-700 mb-4">
              Ces services comprennent notamment :
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>La création et l&apos;optimisation des annonces</li>
              <li>La gestion des réservations</li>
              <li>L&apos;accueil des voyageurs</li>
              <li>Le ménage et l&apos;entretien du bien</li>
              <li>La gestion des urgences</li>
              <li>L&apos;analyse des performances</li>
            </ul>
            <p className="text-gray-700 mb-4">
              La description détaillée de nos services est disponible sur notre Site ou dans le contrat de prestation de services conclu entre Driing Conciergerie et ses clients.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Accès au Site et aux services</h2>
            <p className="text-gray-700 mb-4">
              L&apos;accès au Site est gratuit et ouvert à tout utilisateur disposant d&apos;un accès à Internet. Les frais d&apos;accès à Internet sont à la charge de l&apos;utilisateur.
            </p>
            <p className="text-gray-700 mb-4">
              Driing Conciergerie s&apos;efforce de maintenir le Site accessible 24h/24 et 7j/7. Toutefois, l&apos;accès peut être temporairement suspendu, sans préavis, en raison d&apos;opérations de maintenance, de mises à jour ou pour toute autre raison technique.
            </p>
            <p className="text-gray-700 mb-4">
              Pour bénéficier de nos services de conciergerie, l&apos;utilisateur doit contacter Driing Conciergerie via le formulaire de contact du Site ou par email. La fourniture de nos services est soumise à la conclusion d&apos;un contrat spécifique entre Driing Conciergerie et le client.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Propriété intellectuelle</h2>
            <p className="text-gray-700 mb-4">
              L&apos;ensemble des éléments constituant le Site (textes, graphismes, images, photographies, vidéos, logos, etc.) est la propriété exclusive de Driing Conciergerie ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
            </p>
            <p className="text-gray-700 mb-4">
              Toute reproduction, représentation, modification, publication, adaptation, totale ou partielle de ces éléments, quel que soit le moyen ou le procédé utilisé, est strictement interdite sans l&apos;autorisation écrite préalable de Driing Conciergerie.
            </p>
            <p className="text-gray-700 mb-4">
              Le non-respect de cette interdiction constitue une contrefaçon susceptible d&apos;engager la responsabilité civile et pénale du contrefacteur.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Protection des données personnelles</h2>
            <p className="text-gray-700 mb-4">
              Les informations collectées sur le Site font l&apos;objet d&apos;un traitement informatique destiné à la gestion des demandes des utilisateurs et à la fourniture de nos services.
            </p>
            <p className="text-gray-700 mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez de droits concernant vos données personnelles. Pour plus d&apos;informations sur la collecte et le traitement de vos données, veuillez consulter notre <a href="/politique-de-confidentialite" className="text-[color:var(--primary)] hover:underline">Politique de Confidentialité</a>.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Responsabilité</h2>
            <p className="text-gray-700 mb-4">
              Les informations présentes sur le Site sont fournies à titre indicatif et non contractuel. Driing Conciergerie s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur le Site, mais ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité de ces informations.
            </p>
            <p className="text-gray-700 mb-4">
              Driing Conciergerie ne saurait être tenue responsable :
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Des interruptions ou dysfonctionnements du Site</li>
              <li>Des erreurs matérielles ou techniques contenues sur le Site</li>
              <li>De l&apos;utilisation faite par les utilisateurs des informations présentes sur le Site</li>
              <li>Des dommages directs ou indirects résultant de l&apos;accès ou de l&apos;utilisation du Site</li>
              <li>Du contenu des sites tiers vers lesquels des liens hypertextes peuvent renvoyer depuis le Site</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Obligations de l&apos;utilisateur</h2>
            <p className="text-gray-700 mb-4">
              En utilisant le Site, l&apos;utilisateur s&apos;engage à :
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Ne pas utiliser le Site à des fins illégales ou interdites par les présentes CGU</li>
              <li>Ne pas tenter de perturber le fonctionnement normal du Site</li>
              <li>Ne pas diffuser de contenu illicite, diffamatoire, injurieux ou contraire à l&apos;ordre public et aux bonnes mœurs</li>
              <li>Respecter les droits de propriété intellectuelle de Driing Conciergerie</li>
              <li>Fournir des informations exactes et complètes lors de ses échanges avec Driing Conciergerie</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Liens hypertextes</h2>
            <p className="text-gray-700 mb-4">
              Le Site peut contenir des liens hypertextes vers d&apos;autres sites internet. Ces liens sont fournis à titre informatif et Driing Conciergerie n&apos;exerce aucun contrôle sur ces sites et leur contenu.
            </p>
            <p className="text-gray-700 mb-4">
              La mise en place de liens hypertextes pointant vers le Site est autorisée sous réserve :
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Que ces liens ne portent pas atteinte à l&apos;image de Driing Conciergerie</li>
              <li>Qu&apos;ils s&apos;ouvrent dans une nouvelle fenêtre du navigateur</li>
              <li>Qu&apos;ils ne suggèrent aucune affiliation ou partenariat sans autorisation préalable</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Driing Conciergerie se réserve le droit de demander la suppression de tout lien pointant vers le Site.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Modifications des CGU</h2>
            <p className="text-gray-700 mb-4">
              Driing Conciergerie se réserve le droit de modifier les présentes CGU à tout moment. Les modifications prennent effet dès leur publication sur le Site.
            </p>
            <p className="text-gray-700 mb-4">
              Il est recommandé aux utilisateurs de consulter régulièrement la version en vigueur des CGU. Le fait de continuer à utiliser le Site après la publication des CGU modifiées vaut acceptation de ces modifications.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Droit applicable et juridiction compétente</h2>
            <p className="text-gray-700 mb-4">
              Les présentes CGU sont régies par le droit français.
            </p>
            <p className="text-gray-700 mb-4">
              En cas de litige relatif à l&apos;interprétation ou à l&apos;exécution des présentes CGU, les parties s&apos;efforceront de trouver une solution amiable. À défaut d&apos;accord amiable, le litige sera soumis aux tribunaux français compétents.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact</h2>
            <p className="text-gray-700 mb-4">
              Pour toute question relative aux présentes CGU, vous pouvez nous contacter par e-mail à l&apos;adresse suivante : contact@driing-conciergerie.fr
            </p>
            <p className="text-gray-700 mb-4">
              Date de dernière mise à jour : Mai 2025
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 