
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PhoneCall, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="font-bold text-2xl text-primary">
            Вертикаль
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-primary transition duration-200">
            Главная
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-primary transition duration-200">
            Услуги
          </Link>
          <Link to="/masters" className="text-gray-700 hover:text-primary transition duration-200">
            Мастера
          </Link>
          <Link to="/gallery" className="text-gray-700 hover:text-primary transition duration-200">
            Галерея
          </Link>
          <Link to="/contacts" className="text-gray-700 hover:text-primary transition duration-200">
            Контакты
          </Link>
        </nav>

        <div className="hidden md:flex items-center">
          <Button className="flex items-center gap-2">
            <PhoneCall size={16} />
            Записаться
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <Link to="/" className="text-gray-700 py-2 hover:text-primary transition duration-200" onClick={toggleMenu}>
              Главная
            </Link>
            <Link to="/services" className="text-gray-700 py-2 hover:text-primary transition duration-200" onClick={toggleMenu}>
              Услуги
            </Link>
            <Link to="/masters" className="text-gray-700 py-2 hover:text-primary transition duration-200" onClick={toggleMenu}>
              Мастера
            </Link>
            <Link to="/gallery" className="text-gray-700 py-2 hover:text-primary transition duration-200" onClick={toggleMenu}>
              Галерея
            </Link>
            <Link to="/contacts" className="text-gray-700 py-2 hover:text-primary transition duration-200" onClick={toggleMenu}>
              Контакты
            </Link>
            <Button className="flex items-center gap-2 w-full justify-center">
              <PhoneCall size={16} />
              Записаться
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
