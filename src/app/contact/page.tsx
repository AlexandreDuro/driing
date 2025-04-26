import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 pb-8 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">
            Contactez Driing Conciergerie
          </h1>
        </div>
      </div>
      <ContactSection />
      <Footer />
    </main>
  );
} 