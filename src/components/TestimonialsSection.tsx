
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      business: "Restaurante Popular - São Paulo",
      text: "Antes eu passava horas por semana só procurando garçom. Agora recebo candidatos prontos toda semana. Economizei tempo e contratei pessoas muito melhores.",
      rating: 5
    },
    {
      name: "Ana Oliveira",
      business: "Lanchonete do Bairro - Rio de Janeiro",
      text: "O que mais me impressionou foi a qualidade dos candidatos. Todos tinham experiência na área e vieram prontos para trabalhar. Recomendo muito!",
      rating: 5
    },
    {
      name: "Roberto Santos",
      business: "Franquia de Lanches - Belo Horizonte",
      text: "Com 3 unidades, estava sempre com vaga em aberto em alguma loja. O Gegê resolveu esse problema. Agora tenho um banco de candidatos sempre pronto.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que nossos clientes falam
          </h2>
          <p className="text-xl text-gray-600">
            Veja como o Gegê transformou o recrutamento de outros estabelecimentos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow animate-fadeInUp">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-orange-600">{testimonial.business}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
