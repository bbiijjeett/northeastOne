import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <div className="text-emerald-500">
                {/* <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="14" fill="currentColor" />
                  <path d="M16 8L20 14H12L16 8Z" fill="white" />
                  <path d="M16 24L20 18H12L16 24Z" fill="white" />
                </svg> */}
                <img src={logo} alt="Logo" className="h-8 w-8 object-contain bg-white rounded-full" />
              </div>
              <span className="ml-2 text-white">Northeast One</span>
            </div>
            <p className="text-sm mb-4">
              Your trusted local tour operator since 2015. Creating memorable experiences across India with passion and professionalism.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/tours" className="hover:text-emerald-400 transition-colors">
                  Tours
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition-colors">
                  Contact & FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Paltan Bazar, Guwahati, Assam 781008</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+918119827173" className="hover:text-emerald-400 transition-colors">
                  +91 81198 27173
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@tourmitra.com" className="hover:text-emerald-400 transition-colors">
                  info@neone.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Northeast One. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
