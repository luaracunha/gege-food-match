
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ContactForm } from "@/components/ContactForm";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

const Index = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <header className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-orange-600">Gegê</div>
          <Button onClick={scrollToContact} className="bg-orange-600 hover:bg-orange-700 text-white">
            Falar com consultor
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto animate-fadeInUp">
          <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Especializado em Food Service
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Pare de perder tempo
            <span className="text-orange-600 block">procurando funcionários</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Receba semanalmente candidatos qualificados para as vagas mais buscadas no mercado: atendentes, garçons, cozinheiros e motoboys. 
            Automatizamos a triagem e você foca na contratação!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg"
            >
              Quero candidatos qualificados
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToContact}
              className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg"
            >
              Ver como funciona
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 border-t border-orange-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fadeInUp">
              <div className="text-3xl font-bold text-orange-600 mb-2">80%</div>
              <div className="text-gray-600">Redução no tempo de triagem</div>
            </div>
            <div className="animate-fadeInUp">
              <div className="text-3xl font-bold text-orange-600 mb-2">24h</div>
              <div className="text-gray-600">Para primeiro contato</div>
            </div>
            <div className="animate-fadeInUp">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600">Focado em food service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <ProblemSection />

      {/* Solution Section */}
      <SolutionSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 py-16 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para parar de se preocupar com recrutamento?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Converse com nosso time e descubra como a Gegê pode transformar a contratação no seu negócio
          </p>
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
          >
            Falar com consultor agora
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="text-xl font-bold text-orange-400 mb-4">Gegê</div>
          <p className="text-gray-400">
            Recrutamento inteligente para food service
          </p>
          <p className="text-gray-500 text-sm mt-4">
            © 2024 Gegê. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
