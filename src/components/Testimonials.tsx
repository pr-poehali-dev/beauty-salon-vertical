
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Елена Петрова",
    avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80&w=150",
    initials: "ЕП",
    content: "Посещаю салон регулярно уже больше года. Мастера всегда внимательны к пожеланиям и профессионально подходят к работе. Особенно нравится окрашивание волос – цвет держится долго и выглядит естественно.",
    rating: 5
  },
  {
    name: "Анна Иванова",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150",
    initials: "АИ",
    content: "Хожу к мастеру Ольге на маникюр. Работа всегда на высоте, покрытие держится долго, а дизайн всегда получается именно таким, как я хочу. В салоне приятная атмосфера и всегда предлагают чай/кофе.",
    rating: 5
  },
  {
    name: "Мария Соколова",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=150",
    initials: "МС",
    content: "Недавно сделала процедуру по уходу за лицом. Результат превзошел все ожидания! Кожа выглядит свежей и отдохнувшей. Спасибо мастеру за профессионализм и индивидуальный подход.",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Отзывы наших клиентов</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мнения тех, кто уже оценил качество наших услуг
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback className="bg-primary text-white">{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        className={`${i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"}`} 
                      />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="/reviews" 
            className="text-primary hover:text-secondary font-medium underline underline-offset-4"
          >
            Читать все отзывы
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
