import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CarRental</h3>
            <p className="text-gray-400">
              Providing quality car rental services since 2010. Your journey,
              our priority.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/carros"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Carros
                </Link>
              </li>
              <li>
                <Link
                  to="/locations"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Localizações
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Rua Principal, Cidade</li>
              <li>Telefone: (11) 1234-5678</li>
              <li>Email: info@carrental.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Siga-nos</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2023 CarRental. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
