"use client";

import { StarIcon } from "./Icons";

interface StatItemProps {
  value: string;
  label: string;
  icon?: string;
  highlight?: boolean;
}

function StatItem({ value, label, icon, highlight = false }: StatItemProps) {
  return (
    <div className={`rounded-xl p-8 ${highlight ? 'bg-gradient-bg text-white' : 'bg-white'} card-shadow transition-all duration-300 hover:-translate-y-2`}>
      <div className="flex items-center justify-between mb-4">
        <div className={`text-3xl md:text-4xl font-bold ${highlight ? 'text-white' : 'text-[color:var(--primary)]'}`}>
          {value}
        </div>
        {icon && (
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${highlight ? 'bg-white/20' : 'bg-[color:var(--secondary)]'}`}>
            <span className={highlight ? 'text-white' : 'text-[color:var(--primary)]'}>
              {icon}
            </span>
          </div>
        )}
      </div>
      <div className={highlight ? 'text-white/90' : 'text-gray-700'}>
        {label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-[color:var(--secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[color:var(--primary)] font-semibold uppercase tracking-wide">
            En chiffres
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Notre performance en chiffres
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des résultats concrets qui témoignent de notre expertise et de notre engagement envers nos clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          <StatItem 
            value="82%" 
            label="Taux d'occupation moyen à l'année, bien au-dessus de la moyenne du marché"
            icon="📈"
          />
          <StatItem 
            value="100%" 
            label="Taux de réponse dans l'heure garantie pour une communication optimale"
            icon="⏱️"
            highlight={true}
          />
          <StatItem 
            value="4.93★" 
            label="Note moyenne sur plus de 200 commentaires client"
            icon="🏆"
          />
        </div>
        
        <div className="mt-20 text-center">
          <div className="bg-white p-8 md:p-10 rounded-xl inline-block card-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Ce que disent nos clients
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-[color:var(--secondary)] rounded-lg p-6 max-w-md text-left">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[color:var(--primary)] text-white flex items-center justify-center font-bold text-xl">
                    P
                  </div>
                  <div className="ml-4">
                    <div className="font-medium">Pauline</div>
                    <div className="flex text-yellow-400">
                      <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">
                  &ldquo;Séjour super, super bien localisé avec accès à 5min du rer. Le logement est super, j&apos;ai adoré la salle de bain. L&apos;équipe a été très arrangeante quant à l&apos;heure d&apos;arrivée, et très accueillante. Je recommande +++++&rdquo;
                </p>
              </div>
              
              <div className="bg-[color:var(--secondary)] rounded-lg p-6 max-w-md text-left hidden md:block">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[color:var(--primary)] text-white flex items-center justify-center font-bold text-xl">
                    F
                  </div>
                  <div className="ml-4">
                    <div className="font-medium">Feriel</div>
                    <div className="flex text-yellow-400">
                      <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">
                  &ldquo;Propre, calme et pas loin des transports. L&apos;équipe a été très réactive à notre arrivée et a su répondre à toutes nos attentes. Je recommanderai sans hésiter!&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 