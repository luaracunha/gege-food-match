
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </section>
  );
};
