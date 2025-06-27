
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Setup inicial",
      description: "Conversamos com você para entender exatamente o perfil que precisa: experiência, disponibilidade, características comportamentais.",
      time: "1 dia"
    },
    {
      number: "2",
      title: "Divulgação contínua",
      description: "Suas vagas ficam ativas 24/7 nos principais canais. Candidatos começam a se candidatar imediatamente.",
      time: "Contínuo"
    },
    {
      number: "3",
      title: "Triagem inteligente",
      description: "Nossa IA conversa com cada candidato no WhatsApp, fazendo perguntas específicas e testes comportamentais.",
      time: "Automático"
    },
    {
      number: "4",
      title: "Entrega semanal",
      description: "Toda semana você recebe candidatos qualificados com pontuação e resumo do perfil de cada um.",
      time: "Semanal"
    },
    {
      number: "5",
      title: "Você contrata",
      description: "Escolhe quem quer entrevistar, agenda e foca apenas na decisão final. Nós cuidamos do resto.",
      time: "Quando quiser"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Como funciona na prática?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um processo simples e eficiente que transforma a forma como você contrata.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start mb-8 last:mb-0">
              <div className="flex-shrink-0 mr-6">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
              </div>
              <Card className="flex-1 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                    <span className="text-sm text-orange-600 font-medium bg-orange-100 px-3 py-1 rounded-full">
                      {step.time}
                    </span>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="flex justify-center mt-4">
                  <ArrowRight className="w-6 h-6 text-orange-400 transform rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-orange-100 to-amber-100 p-8 rounded-2xl max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Resultado: você sempre tem candidatos qualificados esperando
          </h3>
          <p className="text-gray-700">
            Nunca mais vai ficar com vaga em aberto por semanas. Nunca mais vai perder tempo 
            triando currículo por currículo. Seu foco volta para o que realmente importa: fazer seu negócio crescer.
          </p>
        </div>
      </div>
    </section>
  );
};
