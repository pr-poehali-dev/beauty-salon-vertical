
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-tertiary-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Вертикаль</h3>
            <p className="text-gray-300 mb-4">
              Салон красоты, где каждый клиент получает индивидуальный подход и 
              профессиональное обслуживание.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="hover:text-primary transition">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="hover:text-primary transition">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li><Link to="/services/haircuts" className="text-gray-300 hover:text-primary transition">Стрижки и укладки</Link></li>
              <li><Link to="/services/coloring" className="text-gray-300 hover:text-primary transition">Окрашивание</Link></li>
              <li><Link to="/services/manicure" className="text-gray-300 hover:text-primary transition">Маникюр и педикюр</Link></li>
              <li><Link to="/services/cosmetology" className="text-gray-300 hover:text-primary transition">Косметология</Link></li>
              <li><Link to="/services/makeup" className="text-gray-300 hover:text-primary transition">Макияж</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Режим работы</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>Пн-Пт:</span>
                <span>9:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Сб:</span>
                <span>10:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Вс:</span>
                <span>10:00 - 18:00</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-primary" />
                <a href="tel:+71234567890" className="text-gray-300 hover:text-primary">+7 (123) 456-78-90</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-primary" />
                <a href="mailto:info@verticalsalon.ru" className="text-gray-300 hover:text-primary">info@verticalsalon.ru</a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-primary shrink-0" />
                <span className="text-gray-300">г. Москва, ул. Примерная, д. 123</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between">
          <p>© 2024 Салон красоты «Вертикаль». Все права защищены.</p>
          <div className="mt-2 md:mt-0">
            <Link to="/privacy" className="hover:text-primary">Политика конфиденциальности</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
