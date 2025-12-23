import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SS</span>
              </div>
              <div>
                <span className="text-xl font-bold">Sejahtera Service</span>
                <p className="text-xs text-red-400">Service Electronic Terpercaya</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Solusi terpercaya untuk semua kebutuhan service dan perbaikan perangkat elektronik Anda dengan teknisi profesional dan berpengalaman.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-lg font-bold mb-4 block">Layanan Kami</span>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-red-400 transition-colors">
                  Service Smartphone
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-red-400 transition-colors">
                  Service Laptop
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-red-400 transition-colors">
                  Service Tablet
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-red-400 transition-colors">
                  Service Monitor
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-red-400 transition-colors">
                  Service Komputer
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-red-400 transition-colors">
                  Recovery Data
                </button>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-lg font-bold mb-4 block">Menu</span>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-red-400 transition-colors">
                  Beranda
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-red-400 transition-colors">
                  Layanan
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')} className="text-gray-400 hover:text-red-400 transition-colors">
                  Galeri
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('booking')} className="text-gray-400 hover:text-red-400 transition-colors">
                  Booking
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-red-400 transition-colors">
                  Kontak
                </button>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-lg font-bold mb-4 block">Hubungi Kami</span>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                <p className="text-gray-400 text-sm">
                  Jl. Anggrek Grendeng, Purwokerto Utara<br />
                  Banyumas Kode Pos 53122
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                <div className="text-gray-400 text-sm">
                  <p>(+62) 813-9281-3981</p>
                  <p>0813-9281-3981</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                <div className="text-gray-400 text-sm">
                  <p>info@sejahteraservice.com</p>
                  <p>support@sejahteraservice.com</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Sejahtera Service. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;