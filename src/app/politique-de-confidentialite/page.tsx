"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="pt-32 pb-24 relative">
        {/* Yellow accent elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[color:var(--accent)]/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[color:var(--accent)]/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <span className="inline-block bg-[color:var(--accent)]/20 text-[color:var(--primary)] px-4 py-1 rounded-full text-sm font-medium mb-3">Protection des données</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Politique de Confidentialité</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Informations concernant la collecte et le traitement de vos données personnelles.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              La protection de vos données personnelles est une priorité pour SIVY MATHIS, exploitant de Driing Conciergerie. Cette politique de confidentialité a pour objectif de vous informer sur la manière dont nous collectons, utilisons et protégeons vos données personnelles lorsque vous utilisez notre site internet et nos services.
            </p>
            <p className="text-gray-700 mb-4">
              Cette politique est conforme au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Identité du responsable du traitement</h2>
            <p className="text-gray-700 mb-4">
              Le responsable du traitement des données personnelles est la société SIVY MATHIS, SARL immatriculée au RCS sous le numéro 938 204 716, dont le siège social est situé au 12 RUE DES MEUNIERS, 22230 TREMOREL.
            </p>
            <p className="text-gray-700 mb-4">
              Pour toute question relative à la protection de vos données personnelles, vous pouvez nous contacter par e-mail à l&apos;adresse suivante : contact@driing.fr
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Données collectées</h2>
            <p className="text-gray-700 mb-4">
              Nous collectons et traitons les données suivantes :
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li><strong>Données d&apos;identification :</strong> nom, prénom, adresse e-mail, numéro de téléphone.</li>
              <li><strong>Données relatives à votre bien immobilier :</strong> adresse, caractéristiques, photos.</li>
              <li><strong>Données de connexion :</strong> adresse IP, date et heure de connexion, pages consultées.</li>
              <li><strong>Données de communication :</strong> échanges par e-mail, formulaires de contact.</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Finalités du traitement</h2>
            <p className="text-gray-700 mb-4">
              Vos données personnelles sont collectées et traitées pour les finalités suivantes :
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Gestion de la relation client et fourniture de nos services de conciergerie.</li>
              <li>Traitement des demandes d&apos;information et des réservations.</li>
              <li>Communication relative à nos services et offres commerciales.</li>
              <li>Amélioration de notre site web et de nos services.</li>
              <li>Respect de nos obligations légales et réglementaires.</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Base juridique du traitement</h2>
            <p className="text-gray-700 mb-4">
              Le traitement de vos données personnelles est fondé sur :
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>L&apos;exécution du contrat lorsque vous utilisez nos services.</li>
              <li>Votre consentement lorsque vous remplissez nos formulaires de contact.</li>
              <li>Notre intérêt légitime à améliorer nos services et à vous proposer des offres adaptées.</li>
              <li>Le respect de nos obligations légales.</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Destinataires des données</h2>
            <p className="text-gray-700 mb-4">
              Vos données personnelles sont destinées à :
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Notre personnel autorisé dans le cadre de leurs fonctions.</li>
              <li>Nos prestataires de services (hébergement, maintenance, comptabilité, etc.) qui agissent en tant que sous-traitants.</li>
              <li>Les plateformes de location (Airbnb, Booking.com, etc.) lorsque cela est nécessaire pour la fourniture de nos services.</li>
              <li>Les autorités administratives ou judiciaires lorsque la loi l&apos;exige.</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Nous ne vendons ni ne louons vos données personnelles à des tiers.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Durée de conservation</h2>
            <p className="text-gray-700 mb-4">
              Nous conservons vos données personnelles pour la durée nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, dans le respect des obligations légales et réglementaires qui nous incombent.
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Données clients : pendant la durée de la relation contractuelle, puis archivées selon les délais légaux de prescription (généralement 5 ans).</li>
              <li>Données de prospection : 3 ans à compter du dernier contact.</li>
              <li>Données de connexion : 13 mois maximum.</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Vos droits</h2>
            <p className="text-gray-700 mb-4">
              Conformément à la réglementation en vigueur, vous disposez des droits suivants sur vos données personnelles :
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li><strong>Droit d&apos;accès :</strong> vous pouvez obtenir une copie des données vous concernant.</li>
              <li><strong>Droit de rectification :</strong> vous pouvez demander la correction des données inexactes.</li>
              <li><strong>Droit à l&apos;effacement :</strong> vous pouvez demander la suppression de vos données.</li>
              <li><strong>Droit à la limitation du traitement :</strong> vous pouvez demander la limitation du traitement de vos données.</li>
              <li><strong>Droit à la portabilité :</strong> vous pouvez récupérer vos données dans un format structuré.</li>
              <li><strong>Droit d&apos;opposition :</strong> vous pouvez vous opposer au traitement de vos données.</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Pour exercer ces droits, vous pouvez nous contacter par e-mail à contact@driing.fr ou par courrier à l&apos;adresse du siège social.
            </p>
            <p className="text-gray-700 mb-4">
              Vous disposez également du droit d&apos;introduire une réclamation auprès de la Commission Nationale de l&apos;Informatique et des Libertés (CNIL).
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Sécurité des données</h2>
            <p className="text-gray-700 mb-4">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre toute perte, accès non autorisé, divulgation, altération ou destruction.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Modification de la politique de confidentialité</h2>
            <p className="text-gray-700 mb-4">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page et, si nécessaire, notifiée par e-mail.
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