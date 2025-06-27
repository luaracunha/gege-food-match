
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    tipoEstabelecimento: '',
    numeroFuncionarios: '',
    mensagem: ''
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simular envio do formulário
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Nossa equipe entrará em contato em até 24 horas.",
    });

    // Reset do formulário
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      empresa: '',
      tipoEstabelecimento: '',
      numeroFuncionarios: '',
      mensagem: ''
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contato" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pronto para transformar seu recrutamento?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Converse com nosso time e descubra como o Gegê pode resolver suas dores de recrutamento. 
            Faremos uma análise gratuita das suas necessidades.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Informações de contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Fale com nosso time de consultores
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefone</h4>
                    <p className="text-gray-600">(11) 9999-9999</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">contato@gege.com.br</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                    <p className="text-gray-600">(11) 99999-9999</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-orange-50 border-orange-200">
              <CardContent className="p-6">
                <h4 className="font-bold text-gray-900 mb-2">🎯 Análise Gratuita</h4>
                <p className="text-gray-700 text-sm">
                  Nossos consultores farão uma análise completa das suas necessidades de recrutamento 
                  e mostrarão exatamente como o Gegê pode ajudar o seu negócio.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Formulário */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Solicite uma demonstração</CardTitle>
              <CardDescription>
                Preencha os dados abaixo e nossa equipe entrará em contato em até 24 horas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nome">Nome *</Label>
                    <Input
                      id="nome"
                      value={formData.nome}
                      onChange={(e) => handleChange('nome', e.target.value)}
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="telefone">Telefone *</Label>
                    <Input
                      id="telefone"
                      value={formData.telefone}
                      onChange={(e) => handleChange('telefone', e.target.value)}
                      placeholder="(11) 99999-9999"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="empresa">Nome da Empresa</Label>
                  <Input
                    id="empresa"
                    value={formData.empresa}
                    onChange={(e) => handleChange('empresa', e.target.value)}
                    placeholder="Nome do seu estabelecimento"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Tipo de Estabelecimento</Label>
                    <Select onValueChange={(value) => handleChange('tipoEstabelecimento', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="restaurante">Restaurante</SelectItem>
                        <SelectItem value="lanchonete">Lanchonete</SelectItem>
                        <SelectItem value="padaria">Padaria</SelectItem>
                        <SelectItem value="cafeteria">Cafeteria</SelectItem>
                        <SelectItem value="franquia">Franquia</SelectItem>
                        <SelectItem value="delivery">Delivery</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Número de Funcionários</Label>
                    <Select onValueChange={(value) => handleChange('numeroFuncionarios', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-5">1 a 5</SelectItem>
                        <SelectItem value="6-15">6 a 15</SelectItem>
                        <SelectItem value="16-30">16 a 30</SelectItem>
                        <SelectItem value="31-50">31 a 50</SelectItem>
                        <SelectItem value="50+">Mais de 50</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="mensagem">Mensagem</Label>
                  <Textarea
                    id="mensagem"
                    value={formData.mensagem}
                    onChange={(e) => handleChange('mensagem', e.target.value)}
                    placeholder="Conte-nos sobre suas principais dificuldades no recrutamento..."
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg"
                >
                  Falar com Consultor Agora
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Ao enviar este formulário, você concorda em ser contatado por nossa equipe para apresentação do produto.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
