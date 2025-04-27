import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 pt-28 pb-16 sm:pb-24">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 transform blur-3xl opacity-70">
        <div className="aspect-[1097/1023] w-[68.5625rem] bg-gradient-to-r from-[#ff4694]/20 to-[#776fff]/20 opacity-25" />
      </div>
      <div className="absolute hidden lg:block bottom-0 left-0 -translate-y-1/4 -translate-x-1/3 transform">
        <div className="h-72 w-72 rounded-full bg-gradient-to-r from-[color:var(--primary-light)]/20 to-[color:var(--accent)]/10 blur-2xl"></div>
      </div>
      
      {/* Animated dots */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/3 h-4 w-4 rounded-full bg-[color:var(--primary-light)] opacity-20 animate-pulse-slow"></div>
        <div className="absolute left-3/4 top-1/2 h-3 w-3 rounded-full bg-[color:var(--accent)] opacity-30 animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute left-1/2 top-3/4 h-2 w-2 rounded-full bg-[color:var(--primary)] opacity-20 animate-pulse-slow animation-delay-2000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column: Text content */}
          <div className="max-w-2xl">
            <h1 className="font-bold tracking-tight">
              <span className="block text-4xl sm:text-5xl lg:text-6xl fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
                Conciergerie
              </span>
              <span className="mt-2 block text-[color:var(--primary)] fade-in-up opacity-0" style={{ animationDelay: '0.6s' }}>
                d&apos;entreprise
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-lg fade-in-up opacity-0" style={{ animationDelay: '0.9s' }}>
              Facilitez le quotidien et renforcez la qualité de vie au travail
              de vos collaborateurs avec nos services de conciergerie.
            </p>
            <div className="mt-10 flex items-center gap-x-6 fade-in-up opacity-0" style={{ animationDelay: '1.2s' }}>
              <Link href="/contact" className="btn-primary shine">
                Nous contacter
              </Link>
              <Link href="/services" className="btn-text group">
                <span>Nos services</span>
                <svg 
                  className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Right column: Image or illustration */}
          <div className="relative mt-8 lg:mt-0 fade-in-up opacity-0" style={{ animationDelay: '0.9s' }}>
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -top-10 -left-10 h-[calc(100%+5rem)] w-[calc(100%+5rem)] rounded-3xl bg-gradient-to-r from-[color:var(--primary-light)]/20 to-[color:var(--accent)]/10 blur-2xl"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl glass-card">
                <Image
                  src="/images/hero-image.jpg"
                  alt="Conciergerie d'entreprise"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating badges */}
                <div className="absolute -top-3 -right-3 bg-white rounded-lg p-2 shadow-lg glass-effect rotate-3 transform hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center gap-2">
                    <div className="bg-[color:var(--accent)] h-3 w-3 rounded-full"></div>
                    <span className="text-xs font-medium">Service premium</span>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg glass-effect transform hover:translate-y-1 transition-transform duration-300">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[color:var(--primary-light)] flex items-center justify-center">
                      <svg className="h-5 w-5 text-[color:var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500">SATISFACTION</p>
                      <p className="text-sm font-bold">98% de clients satisfaits</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 