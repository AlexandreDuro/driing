"use client";

import { useState } from "react";
import { CheckmarkIcon } from "./Icons";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    submitted: false,
    loading: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ loading: true, submitted: false });
    
    // Simulate form submission
    setTimeout(() => {
      setFormState({ loading: false, submitted: true });
    }, 1000);
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[color:var(--primary)] font-semibold uppercase tracking-wide">
            Contactez-nous
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Audit gratuit de votre bien
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vous souhaitez optimiser la rentabilité de votre bien ? Demandez un audit gratuit et sans engagement.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch rounded-xl overflow-hidden card-shadow">
          <div className="lg:w-2/5 bg-[color:var(--accent)] text-[color:var(--primary)] p-10 md:p-12">
            <h3 className="text-2xl font-bold mb-6">
              Ce que nous proposons
            </h3>
            
            <ul className="space-y-4 mb-8">
              {[
                "Déco et photos de qualité professionnelle", 
                "Optimisation de l'occupation", 
                "Gestion des entrées et sorties", 
                "Revenus automatiques",
                "Tarification dynamique",
                "Tranquillité d'esprit totale"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="text-[color:var(--primary)]">
                    <CheckmarkIcon />
                  </div>
                  <span className="ml-2 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="p-6 bg-white rounded-lg mt-10">
              <div className="text-2xl font-bold mb-1 text-[color:var(--primary)]">
                À partir de 15%
              </div>
              <div className="text-sm text-[color:var(--primary-dark)] mb-4">
                de commission sur les revenus générés
              </div>
              <div className="flex items-center">
                <div className="flex text-yellow-500 mr-2">★★★★★</div>
                <span className="text-[color:var(--primary)]">4,94/5 sur plus de 150 avis</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5 bg-white p-10 md:p-12">
            {formState.submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Demande reçue !</h3>
                <p className="text-gray-600 mb-6">
                  Nous avons bien reçu votre demande d&apos;audit. Notre équipe vous contactera dans les plus brefs délais.
                </p>
                <button 
                  onClick={() => setFormState({ loading: false, submitted: false })}
                  className="text-[color:var(--primary)] font-medium"
                >
                  Envoyer une nouvelle demande
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      Prénom
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[color:var(--primary)] focus:border-[color:var(--primary)] transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[color:var(--primary)] focus:border-[color:var(--primary)] transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[color:var(--primary)] focus:border-[color:var(--primary)] transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[color:var(--primary)] focus:border-[color:var(--primary)] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Adresse du bien
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[color:var(--primary)] focus:border-[color:var(--primary)] transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">
                    Type de bien
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[color:var(--primary)] focus:border-[color:var(--primary)] transition-colors"
                    required
                  >
                    <option value="">Sélectionnez un type</option>
                    <option value="studio">Studio</option>
                    <option value="apartment-1">Appartement 1 chambre</option>
                    <option value="apartment-2">Appartement 2 chambres</option>
                    <option value="apartment-3">Appartement 3 chambres</option>
                    <option value="house">Maison</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={formState.loading}
                    className="w-full bg-[color:var(--primary)] hover:bg-[color:var(--primary-dark)] text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {formState.loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Envoi en cours...
                      </>
                    ) : "Recevoir mon audit gratuit"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 