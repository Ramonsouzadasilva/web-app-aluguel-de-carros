import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold">
          CarRental
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-gray-300 transition-colors">
            Home
          </Link>
          <Link to="/carros" className="hover:text-gray-300 transition-colors">
            Carros
          </Link>
          <Link
            to="/locations"
            className="hover:text-gray-300 transition-colors"
          >
            Localizações
          </Link>
          <Link to="/contact" className="hover:text-gray-300 transition-colors">
            Contato
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-2 bg-black">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link
              to="/carros"
              className="hover:text-gray-300 transition-colors"
            >
              Carros
            </Link>
            <Link
              to="/locations"
              className="hover:text-gray-300 transition-colors"
            >
              Localizações
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-300 transition-colors"
            >
              Contato
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
