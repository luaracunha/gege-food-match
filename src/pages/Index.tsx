
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Users, Clock, Target, TrendingUp, MessageSquare, Brain, Shield } from "lucide-react";
import { useState } from "react";
import { ContactForm } from "@/components/ContactForm";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ProcessSection } from "@/components/ProcessSection";
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
            Falar com Consultor
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
            Receba toda semana <strong>10 candidatos qualificados</strong> para atendentes, garçons, cozinheiros e motoboys. 
            Automatizamos a triagem, você foca na contratação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg"
            >
              Quero Candidatos Qualificados
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToContact}
              className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg"
            >
              Ver Como Funciona
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 border-t border-orange-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fadeInUp">
              <div className="text-3xl font-bold text-orange-600 mb-2">10</div>
              <div className="text-gray-600">Candidatos/semana</div>
            </div>
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

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Social Proof */}
      <section className="bg-orange-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Junte-se a centenas de estabelecimentos que já contratam melhor
          </h2>
          <p className="text-gray-600 mb-8">
            Restaurantes, lanchonetes, padarias e cafeterias já descobriram como economizar tempo no recrutamento
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <span className="font-semibold text-gray-700">Restaurantes</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <span className="font-semibold text-gray-700">Lanchonetes</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <span className="font-semibold text-gray-700">Franquias</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <span className="font-semibold text-gray-700">Cafeterias</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <span className="font-semibold text-gray-700">Padarias</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Como vocês encontram os candidatos?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Utilizamos múltiplos canais como Indeed, redes sociais e parcerias para atrair candidatos. 
                  Nossa IA faz a triagem inicial e entrevista via WhatsApp para garantir qualidade.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quanto tempo leva para receber os primeiros candidatos?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Após o setup inicial (1-2 dias), você começa a receber candidatos qualificados em até 7 dias. 
                  O envio é semanal com 10 perfis selecionados.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">E se eu não gostar de nenhum candidato?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ajustamos continuamente o perfil baseado no seu feedback. Quanto mais específico você for 
                  sobre suas preferências, mais assertivos ficamos na seleção.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Funciona para qualquer tipo de estabelecimento de alimentação?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sim! Atendemos restaurantes, lanchonetes, padarias, cafeterias, franquias e qualquer negócio 
                  que precise de colaboradores operacionais no food service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 py-16 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para parar de se preocupar com recrutamento?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Converse com nosso time e descubra como o Gegê pode transformar a contratação no seu negócio
          </p>
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
          >
            Falar com Consultor Agora
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
