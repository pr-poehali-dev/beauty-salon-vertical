
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Scissors, Paintbrush, Fingerprint, Smile } from 'lucide-react';

const services = [
  {
    icon: <Scissors size={32} className="text-primary" />,
    title: "Стрижки и укладки",
    description: "Создание индивидуального образа с учетом структуры волос, формы лица и ваших пожеланий."
  },
  {
    icon: <Paintbrush size={32} className="text-primary" />,
    title: "Окрашивание волос",
    description: "От натуральных оттенков до креативных решений с использованием премиальных красителей."
  },
  {
    icon: <Fingerprint size={32} className="text-primary" />,
    title: "Маникюр и педикюр",
    description: "Профессиональный уход за ногтями, современный дизайн и стойкое покрытие."
  },
  {
    icon: <Smile size={32} className="text-primary" />,
    title: "Косметология",
    description: "Процедуры для восстановления, омоложения и поддержания красоты кожи лица."
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы предлагаем полный спектр услуг, чтобы вы могли получить 
            идеальный образ в одном месте
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="mb-3">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="/services" 
            className="text-primary hover:text-secondary font-medium underline underline-offset-4"
          >
            Посмотреть все услуги и цены
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
