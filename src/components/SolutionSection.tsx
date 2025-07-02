
import { Card, CardContent } from "@/components/ui/card";
import { Bot, MessageSquare, Target, CheckCircle2 } from "lucide-react";

export const SolutionSection = () => {
  const features = [
    {
      icon: Target,
      title: "Divulgação constante",
      description: "Suas vagas ficam sempre ativas nos principais canais de recrutamento, atraindo candidatos continuamente."
    },
    {
      icon: Bot,
      title: "IA que entrevista",
      description: "Nossa inteligência artificial conversa com cada candidato via WhatsApp, fazendo triagem e testes comportamentais."
    },
    {
      icon: MessageSquare,
      title: "Base aquecida",
      description: "Mantemos os candidatos engajados com conteúdos relevantes enquanto você não precisa deles."
    },
    {
      icon: CheckCircle2,
      title: "Entrega semanal",
      description: "Toda semana você recebe candidatos qualificados, prontos para entrevista presencial."
    }
  ];

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
            Como a Gegê resolve isso?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A Gegê é uma <strong>recrutadora virtual especializada em food service</strong>. 
            Ela faz toda a parte chata do processo e entrega só o que importa: candidatos qualificados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-fadeInUp">
              <CardContent className="p-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Como funciona na prática?
            </h3>
          </div>

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
                    <h4 className="text-xl font-semibold text-gray-900">{step.title}</h4>
                    <span className="text-sm text-orange-600 font-medium bg-orange-100 px-3 py-1 rounded-full">
                      {step.time}
                    </span>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-orange-100 to-amber-100 p-8 rounded-2xl max-w-3xl mx-auto text-center">
          <h4 className="text-xl font-bold text-gray-900 mb-4">
            Resultado: você sempre tem candidatos qualificados esperando
          </h4>
          <p className="text-gray-700">
            Nunca mais vai ficar com vaga em aberto por semanas. Nunca mais vai perder tempo 
            triando currículo por currículo. Seu foco volta para o que realmente importa: fazer seu negócio crescer.
          </p>
        </div>
      </div>
    </section>
  );
};
