"use client";

interface StatItemProps {
  value: string;
  label: string;
  icon?: string;
  highlight?: boolean;
}

function StatItem({ value, label, icon, highlight = false }: StatItemProps) {
  return (
    <div className={`rounded-xl p-8 ${highlight ? 'bg-[color:var(--accent)] text-[color:var(--primary)]' : 'bg-white'} card-shadow transition-all duration-300 hover:-translate-y-2`}>
      <div className="flex items-center justify-between mb-4">
        <div className={`text-3xl md:text-4xl font-bold ${highlight ? 'text-[color:var(--primary)]' : 'text-[color:var(--primary)]'}`}>
          {value}
        </div>
        {icon && (
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${highlight ? 'bg-white' : 'bg-[color:var(--secondary)]'}`}>
            <span className={highlight ? 'text-[color:var(--primary)]' : 'text-[color:var(--primary)]'}>
              {icon}
            </span>
          </div>
        )}
      </div>
      <div className={highlight ? 'text-[color:var(--primary-dark)] font-medium' : 'text-gray-700'}>
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
          <span className="inline-block bg-[color:var(--accent)]/20 text-[color:var(--primary)] px-4 py-1 rounded-full text-sm font-medium mb-3">
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
            highlight={true}
          />
          <StatItem 
            value="100%" 
            label="Taux de réponse dans l'heure garantie pour une communication optimale"
            icon="⏱️"
            highlight={true}
          />
          <StatItem 
            value="4.94★" 
            label="Note moyenne sur plus de 150 commentaires client"
            icon="🏆"
            highlight={true}
          />
        </div>
      </div>
    </section>
  );
} 