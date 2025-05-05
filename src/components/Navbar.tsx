
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PhoneCall, Menu, X, ChevronDown, Clock, CalendarDays } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Отслеживаем скролл для изменения стиля шапки
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Верхняя полоса с информацией */}
      <div className="hidden md:block bg-tertiary text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center">
              <Clock size={14} className="mr-1.5" />
              <span>Пн-Вс: 9:00-20:00</span>
            </div>
            <div className="flex items-center">
              <PhoneCall size={14} className="mr-1.5" />
              <a href="tel:+71234567890">+7 (123) 456-78-90</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://instagram.com" className="hover:text-primary-light transition" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
              </svg>
            </a>
            <a href="https://facebook.com" className="hover:text-primary-light transition" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Основная шапка */}
      <header 
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' 
            : 'bg-white/80 backdrop-blur-sm py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="font-extrabold text-2xl md:text-3xl">
              <span className="bg-gradient-to-r from-tertiary to-primary bg-clip-text text-transparent">
                ВЕРТИКАЛЬ
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-gray-700 hover:text-primary transition-colors py-2">
              Главная
            </Link>
            <div className="relative group">
              <button className="flex items-center font-medium text-gray-700 hover:text-primary transition-colors py-2">
                Услуги
                <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute left-0 top-full bg-white shadow-lg rounded-md p-3 min-w-48 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 transform origin-top scale-95 group-hover:scale-100">
                <div className="grid grid-cols-2 gap-2">
                  <Link to="/services/haircuts" className="text-sm py-2 px-3 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md">
                    Стрижки и укладки
                  </Link>
                  <Link to="/services/coloring" className="text-sm py-2 px-3 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md">
                    Окрашивание волос
                  </Link>
                  <Link to="/services/manicure" className="text-sm py-2 px-3 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md">
                    Маникюр и педикюр
                  </Link>
                  <Link to="/services/cosmetology" className="text-sm py-2 px-3 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-md">
                    Косметология
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/masters" className="font-medium text-gray-700 hover:text-primary transition-colors py-2">
              Мастера
            </Link>
            <Link to="/gallery" className="font-medium text-gray-700 hover:text-primary transition-colors py-2">
              Галерея
            </Link>
            <Link to="/contacts" className="font-medium text-gray-700 hover:text-primary transition-colors py-2">
              Контакты
            </Link>
          </nav>

          <div className="hidden md:flex items-center">
            <Button className="bg-gradient-to-r from-tertiary to-primary hover:opacity-90 transition-opacity flex items-center gap-2 shadow-md shadow-primary/20">
              <CalendarDays size={16} />
              Записаться
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-700" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} className="text-primary" /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t animate-in slide-in-from-top">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 font-medium py-2 px-3 hover:bg-primary/10 hover:text-primary rounded-md" onClick={toggleMenu}>
                Главная
              </Link>
              <div className="border-b pb-2">
                <div className="font-medium px-3 py-2 text-gray-700">Услуги</div>
                <div className="pl-4 space-y-2 mt-1">
                  <Link to="/services/haircuts" className="block py-2 px-3 text-gray-600 hover:bg-primary/10 hover:text-primary rounded-md" onClick={toggleMenu}>
                    Стрижки и укладки
                  </Link>
                  <Link to="/services/coloring" className="block py-2 px-3 text-gray-600 hover:bg-primary/10 hover:text-primary rounded-md" onClick={toggleMenu}>
                    Окрашивание волос
                  </Link>
                  <Link to="/services/manicure" className="block py-2 px-3 text-gray-600 hover:bg-primary/10 hover:text-primary rounded-md" onClick={toggleMenu}>
                    Маникюр и педикюр
                  </Link>
                  <Link to="/services/cosmetology" className="block py-2 px-3 text-gray-600 hover:bg-primary/10 hover:text-primary rounded-md" onClick={toggleMenu}>
                    Косметология
                  </Link>
                </div>
              </div>
              <Link to="/masters" className="text-gray-700 font-medium py-2 px-3 hover:bg-primary/10 hover:text-primary rounded-md" onClick={toggleMenu}>
                Мастера
              </Link>
              <Link to="/gallery" className="text-gray-700 font-medium py-2 px-3 hover:bg-primary/10 hover:text-primary rounded-md" onClick={toggleMenu}>
                Галерея
              </Link>
              <Link to="/contacts" className="text-gray-700 font-medium py-2 px-3 hover:bg-primary/10 hover:text-primary rounded-md" onClick={toggleMenu}>
                Контакты
              </Link>
              
              <div className="pt-2 border-t">
                <Button className="w-full bg-gradient-to-r from-tertiary to-primary hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  <CalendarDays size={16} />
                  Записаться онлайн
                </Button>
                
                <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1.5" />
                    <span>Пн-Вс: 9:00-20:00</span>
                  </div>
                  <div className="flex items-center">
                    <PhoneCall size={14} className="mr-1.5" />
                    <a href="tel:+71234567890">+7 (123) 456-78-90</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
