
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6">О салоне «Вертикаль»</h2>
            <p className="mb-4 text-gray-700">
              Салон красоты «Вертикаль» — это место, где каждый клиент получает индивидуальный 
              подход и профессиональную заботу. Мы работаем с 2015 года и за это время 
              завоевали доверие тысяч постоянных клиентов.
            </p>
            <p className="mb-6 text-gray-700">
              В нашем салоне работают только опытные мастера, которые регулярно повышают свою 
              квалификацию и следят за последними тенденциями в мире красоты. Мы используем 
              только проверенную косметику премиум-класса, гарантирующую безопасность и 
              видимый результат.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-accent/30 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-1">8+</div>
                <div className="text-sm text-gray-600">лет работы</div>
              </div>
              <div className="bg-accent/30 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-1">12</div>
                <div className="text-sm text-gray-600">мастеров</div>
              </div>
              <div className="bg-accent/30 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-1">5000+</div>
                <div className="text-sm text-gray-600">клиентов</div>
              </div>
            </div>
            
            <Button>О нас подробнее</Button>
          </div>
          
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=500" 
                alt="Салон красоты интерьер" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=500" 
                alt="Процедура в салоне" 
                className="w-full h-32 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="space-y-4 mt-6">
              <img 
                src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80&w=500" 
                alt="Работа мастера" 
                className="w-full h-32 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=500" 
                alt="Интерьер салона" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
