
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-20 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 z-0" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80')" }}
      />
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-tertiary to-primary bg-clip-text text-transparent">
            Салон красоты Вертикаль
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Место, где красота и уход становятся настоящим искусством. 
            Наши опытные мастера помогут вам раскрыть вашу индивидуальность и 
            подчеркнуть естественную красоту.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="font-medium text-base">
              Записаться онлайн
            </Button>
            <Button variant="outline" size="lg" className="font-medium text-base">
              Наши услуги
            </Button>
          </div>
          
          <div className="mt-12 flex items-center gap-2 text-sm text-gray-600">
            <Sparkles size={16} className="text-primary" />
            <span>Скидка 15% на первое посещение</span>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-2/5 h-4/5 rounded-l-3xl overflow-hidden shadow-xl z-10">
        <img 
          src="https://images.unsplash.com/photo-1595867818082-083862f3d630?auto=format&fit=crop&q=80" 
          alt="Салон красоты" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
