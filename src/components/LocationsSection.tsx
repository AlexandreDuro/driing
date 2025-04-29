"use client";

import { HomeIcon } from "./Icons";
import Image from "next/image";

export default function LocationsSection() {
  return (
    <section className="py-20 bg-white" id="secteurs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[color:var(--primary)] font-semibold uppercase tracking-wide">
            Zones d&apos;activité
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Nos secteurs d&apos;intervention
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nos équipes d&apos;experts sont présentes dans les régions suivantes pour vous offrir un service de qualité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {/* Location Cards */}
          <LocationCard 
            title="Rennes" 
            description="Une ville dynamique avec un fort potentiel locatif, idéale pour les investissements immobiliers."
            imageUrl="/images/locations/1.jpg"
            imageText="Image de Rennes"
          />
          
          <LocationCard 
            title="Saint-Brieuc" 
            description="Une destination prisée avec un marché locatif attractif, en pleine croissance."
            imageUrl="/images/locations/2.jpg"
            imageText="Image de Saint-Brieuc"
          />
          
          <LocationCard 
            title="De Pléneuf à Saint-Malo" 
            description="La côte d&apos;Émeraude, une région très recherchée pour les locations saisonnières tout au long de l&apos;année."
            imageUrl="/images/locations/3.jpg"
            imageText="Image de Pléneuf à Saint-Malo"
          />
        </div>
        
        <div className="mt-20 bg-[color:var(--secondary)] rounded-2xl p-8 md:p-12 card-shadow">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Comment ça marche ?
            </h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Nous simplifions chaque étape, de la remise des clés à l&apos;analyse des performances, pour vous garantir un rendement maximal et une tranquillité d&apos;esprit totale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            <ProcessStep 
              number="1" 
              title="Remise des clés" 
              description="Rendez-vous sur place pour réaliser l&apos;état des lieux, signer le contrat et remettre les clés."
            />
            <ProcessStep 
              number="2" 
              title="Gestion intégrale" 
              description="Nous gérons chaque aspect pour que vous profitiez pleinement de vos revenus passifs."
            />
            <ProcessStep 
              number="3" 
              title="Analyse des performances" 
              description="Recevez un audit mensuel avec les nuits louées, taux de remplissage et autres indicateurs clés."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface LocationCardProps {
  title: string;
  description: string;
  imageText: string;
  imageUrl: string;
  highlight?: boolean;
}

function LocationCard({ title, description, imageText, imageUrl, highlight = false }: LocationCardProps) {
  return (
    <div className={`rounded-xl overflow-hidden card-shadow transition-all duration-300 hover:-translate-y-2 ${highlight ? 'relative z-10 md:-mt-4 md:-mb-4 md:scale-105' : ''}`}>
      <div className="relative h-56 w-full bg-gray-200 overflow-hidden">
        {/* Image component */}
        <Image 
          src={imageUrl}
          alt={imageText}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
        
        {highlight && (
          <div className="absolute top-4 right-4 bg-[color:var(--primary)] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            Populaire
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="text-white font-medium text-lg">
              Découvrir {title}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6 bg-white">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-700">{description}</p>
          </div>
          <div className="w-8 h-8 text-[color:var(--primary)]">
            <HomeIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-4">
        <div className="w-12 h-12 rounded-full bg-[color:var(--primary)] text-white flex items-center justify-center font-bold text-lg">
          {number}
        </div>
      </div>
      <div>
        <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
} 