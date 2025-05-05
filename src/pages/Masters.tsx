
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MasterCard from "@/components/MasterCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const mastersData = [
  {
    id: "1",
    name: "Анна Сергеева",
    position: "Старший стилист",
    experience: 8,
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=500&auto=format&fit=crop&q=60",
    description: "Анна — опытный мастер, специализирующийся на сложных техниках окрашивания и создании индивидуального стиля.",
    specialties: ["Стрижки", "Окрашивание", "Укладки"],
    category: "hair"
  },
  {
    id: "2",
    name: "Елена Петрова",
    position: "Мастер маникюра",
    experience: 5,
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=500&auto=format&fit=crop&q=60",
    description: "Елена создаёт идеальный маникюр с учётом модных тенденций и индивидуальных пожеланий клиентов.",
    specialties: ["Маникюр", "Педикюр", "Дизайн ногтей"],
    category: "nails"
  },
  {
    id: "3",
    name: "Мария Иванова",
    position: "Косметолог",
    experience: 6,
    image: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?w=500&auto=format&fit=crop&q=60",
    description: "Специалист по уходовым и омолаживающим процедурам с медицинским образованием.",
    specialties: ["Уход за лицом", "Чистки", "Массаж лица"],
    category: "cosmetology"
  },
  {
    id: "4",
    name: "Ольга Смирнова",
    position: "Топ-стилист",
    experience: 10,
    image: "https://images.unsplash.com/photo-1534946006116-0dbaa02b4a84?w=500&auto=format&fit=crop&q=60",
    description: "Ольга — творческий и вдохновляющий мастер, работающий с волосами любой сложности и выполняющий креативные окрашивания.",
    specialties: ["Колористика", "Сложные техники", "Прически"],
    category: "hair"
  },
  {
    id: "5",
    name: "Дарья Козлова",
    position: "Мастер маникюра",
    experience: 3,
    image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=500&auto=format&fit=crop&q=60",
    description: "Дарья известна своими аккуратными работами и вниманием к деталям. Специализируется на минималистичном дизайне.",
    specialties: ["Маникюр", "Гель-лак", "Наращивание"],
    category: "nails"
  },
  {
    id: "6",
    name: "Светлана Гаврилова",
    position: "Косметолог-эстетист",
    experience: 7,
    image: "https://images.unsplash.com/photo-1605980776566-0486e6300561?w=500&auto=format&fit=crop&q=60",
    description: "Светлана специализируется на комплексном уходе за кожей и решении эстетических проблем с использованием новейших технологий.",
    specialties: ["Мезотерапия", "Пилинги", "Аппаратные процедуры"],
    category: "cosmetology"
  }
];

type CategoryType = "all" | "hair" | "nails" | "cosmetology";

const Masters = () => {
  const [category, setCategory] = useState<CategoryType>("all");
  
  const filteredMasters = category === "all" 
    ? mastersData 
    : mastersData.filter(master => master.category === category);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-4">Наши мастера</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Познакомьтесь с профессиональной командой салона красоты «Вертикаль». 
              Каждый мастер имеет высокую квалификацию и регулярно совершенствует свои навыки 
              на профессиональных тренингах и мастер-классах.
            </p>
          </div>
          
          <div className="mb-10">
            <Tabs defaultValue="all" className="w-full" onValueChange={(value) => setCategory(value as CategoryType)}>
              <div className="flex justify-center mb-8">
                <TabsList className="bg-accent/30">
                  <TabsTrigger value="all">Все мастера</TabsTrigger>
                  <TabsTrigger value="hair">Волосы</TabsTrigger>
                  <TabsTrigger value="nails">Ногти</TabsTrigger>
                  <TabsTrigger value="cosmetology">Косметология</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredMasters.map(master => (
                    <MasterCard key={master.id} {...master} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="hair" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredMasters.map(master => (
                    <MasterCard key={master.id} {...master} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="nails" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredMasters.map(master => (
                    <MasterCard key={master.id} {...master} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="cosmetology" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredMasters.map(master => (
                    <MasterCard key={master.id} {...master} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="bg-accent/30 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ищем таланты!</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Салон красоты «Вертикаль» всегда открыт для талантливых и целеустремленных мастеров, 
              которые хотят развиваться вместе с нами. Если вы любите свою профессию 
              и готовы дарить красоту нашим клиентам, присоединяйтесь к нашей команде!
            </p>
            <Button>Отправить резюме</Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Masters;
