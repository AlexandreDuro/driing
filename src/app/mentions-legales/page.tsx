"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="pt-32 pb-24 relative">
        {/* Yellow accent elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[color:var(--accent)]/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[color:var(--accent)]/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <span className="inline-block bg-[color:var(--accent)]/20 text-[color:var(--primary)] px-4 py-1 rounded-full text-sm font-medium mb-3">Informations juridiques</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Mentions Légales</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Informations légales concernant Driing Conciergerie et l&apos;exploitation du site web.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Présentation du site</h2>
            <p className="text-gray-700 mb-4">
              Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l&apos;économie numérique, dite L.C.E.N., nous portons à la connaissance des utilisateurs et visiteurs du site les informations suivantes :
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Informations légales :</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li><strong>Dénomination sociale :</strong> SIVY MATHIS</li>
              <li><strong>Statut juridique :</strong> Société à responsabilité limitée (SARL)</li>
              <li><strong>Adresse :</strong> 12 RUE DES MEUNIERS, 22230 TREMOREL</li>
              <li><strong>SIREN :</strong> 938 204 716</li>
              <li><strong>SIRET :</strong> 938 204 716 00014</li>
              <li><strong>Code APE :</strong> 68.20B - Location de terrains et d&apos;autres biens immobiliers</li>
              <li><strong>Capital social :</strong> Non communiqué</li>
              <li><strong>Date de création :</strong> 03/12/2024</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Le site driing.fr est exploité par :</h3>
            <p className="text-gray-700 mb-6">
              La société SIVY MATHIS, SARL au capital non communiqué, immatriculée au Registre du Commerce et des Sociétés sous le numéro 938 204 716, dont le siège social est situé au 12 RUE DES MEUNIERS, 22230 TREMOREL.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Hébergement</h2>
            <p className="text-gray-700 mb-4">
              L&apos;hébergeur du site driing.fr est la société [Nom de l&apos;hébergeur], [Forme juridique], dont le siège social est situé à [Adresse de l&apos;hébergeur].
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Directeur de la publication</h2>
            <p className="text-gray-700 mb-4">
              Le Directeur de la publication est [Nom du directeur de publication], en qualité de [Fonction] de la société SIVY MATHIS.
            </p>
            <p className="text-gray-700 mb-4">
              Pour contacter le directeur de la publication, veuillez utiliser l&apos;adresse e-mail suivante : contact@driing.fr
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Propriété intellectuelle</h2>
            <p className="text-gray-700 mb-4">
              Toute reproduction ou représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l&apos;autorisation expresse de l&apos;exploitant du site Internet est interdite et constituerait une contrefaçon sanctionnée par les articles L 335-2 et suivants du Code de la propriété intellectuelle.
            </p>
            <p className="text-gray-700 mb-4">
              Les marques, logos, signes et tout autre contenu du site font l&apos;objet d&apos;une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d&apos;auteur.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Responsabilité</h2>
            <p className="text-gray-700 mb-4">
              Les informations fournies sur ce site le sont à titre indicatif et ne sauraient engager la responsabilité de la société SIVY MATHIS. Malgré tous les soins apportés à la gestion du site et à l&apos;actualisation des informations, la présence d&apos;erreurs ou d&apos;omissions ne pourra être totalement exclue.
            </p>
            <p className="text-gray-700 mb-4">
              Les liens hypertextes mis en place dans le cadre du présent site internet en direction d&apos;autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de SIVY MATHIS.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact</h2>
            <p className="text-gray-700 mb-4">
              Pour toute question relative à ce site, vous pouvez nous contacter par e-mail à l&apos;adresse suivante : contact@driing.fr
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 