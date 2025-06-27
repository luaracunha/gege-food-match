
import { Card, CardContent } from "@/components/ui/card";
import { Clock, DollarSign, Users, TrendingUp, Shield, Zap } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Economize 80% do tempo",
      description: "Não precisa mais passar horas triando currículos e fazendo contatos iniciais."
    },
    {
      icon: Users,
      title: "Candidatos pré-qualificados",
      description: "Todos já passaram por nossa triagem e testes comportamentais antes de chegar até você."
    },
    {
      icon: Zap,
      title: "Processo automatizado",
      description: "Da divulgação da vaga até a entrega dos candidatos, tudo funciona no automático."
    },
    {
      icon: TrendingUp,
      title: "Menor rotatividade",
      description: "Candidatos melhor selecionados = funcionários que ficam mais tempo na empresa."
    },
    {
      icon: Shield,
      title: "Especialização food service",
      description: "Entendemos as necessidades específicas do seu setor e buscamos o perfil certo."
    },
    {
      icon: DollarSign,
      title: "ROI comprovado",
      description: "O tempo economizado e a qualidade das contratações pagam o investimento rapidamente."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por que escolher o Gegê?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais do que uma ferramenta de recrutamento, somos seu parceiro estratégico para ter sempre a equipe ideal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow animate-fadeInUp border-t-4 border-t-orange-500">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Imagine sua semana sem se preocupar com vagas em aberto
            </h3>
            <p className="text-gray-600 mb-4">
              Enquanto você cuida do seu negócio, o Gegê trabalha nos bastidores encontrando, 
              triando e preparando os melhores candidatos para você.
            </p>
            <p className="text-lg font-medium text-orange-600">
              É isso que chamamos de recrutamento inteligente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
