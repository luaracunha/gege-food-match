
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Clock, Users, TrendingDown } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    {
      icon: Users,
      title: "Falta de candidatos qualificados",
      description: "Você posta a vaga e só aparece gente sem experiência ou que não tem o perfil certo para o seu negócio."
    },
    {
      icon: Clock,
      title: "Tempo perdido na triagem",
      description: "Horas ligando, mandando mensagem e fazendo entrevistas com pessoas que nem vão aparecer."
    },
    {
      icon: TrendingDown,
      title: "Alta rotatividade",
      description: "Contrata, treina, a pessoa sai em pouco tempo. O ciclo se repete e você fica sempre correndo atrás."
    },
    {
      icon: AlertTriangle,
      title: "Equipe sobrecarregada",
      description: "Enquanto a vaga fica em aberto, quem fica paga o pato. Funcionários sobrecarregados, atendimento prejudicado."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Reconhece esses problemas?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sabemos que encontrar bons funcionários para o food service é uma das maiores dores de cabeça de quem tem restaurante, lanchonete ou qualquer negócio de alimentação.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <Card key={index} className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow animate-fadeInUp">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <problem.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{problem.title}</h3>
                    <p className="text-gray-600">{problem.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto border-l-4 border-l-orange-500">
            <p className="text-lg font-medium text-gray-900 mb-2">
              E se eu te dissesse que existe uma forma de resolver tudo isso?
            </p>
            <p className="text-gray-600">
              Imagine receber toda semana uma lista de candidatos já triados, testados e prontos para entrevista presencial. É isso que o Gegê faz por você.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
