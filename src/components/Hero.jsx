import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Shield, Wrench } from 'lucide-react';
import { Button } from '../ui/button';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-red-800">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <span className="text-sm font-semibold">✨ Layanan Service Elektronik Profesional</span>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Service Electronic
              <span className="block text-red-100">Cepat & Terpercaya</span>
            </h1>

            <p className="text-xl text-red-50 mb-8 leading-relaxed">
              Teknisi berpengalaman siap menangani berbagai kerusakan elektronik Anda. Garansi service, spare part original, dan harga transparan.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                onClick={() => scrollToSection('booking')}
                size="lg"
                className="bg-white text-red-600 hover:bg-red-50 font-semibold px-8 py-6 text-lg"
              >
                Booking Sekarang
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold px-8 py-6 text-lg"
              >
                Hubungi Kami
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-red-200" />
                <span className="text-sm">Garansi Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-red-200" />
                <span className="text-sm">Proses Cepat</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-red-200" />
                <span className="text-sm">Teknisi Ahli</span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="w-5 h-5 text-red-200" />
                <span className="text-sm">Spare Part Original</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img alt="Professional technician repairing electronic devices in modern workshop" className="w-full h-[500px] object-cover" src="https://images.unsplash.com/photo-1658212662417-a2a76efe25df" />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">5000+</p>
                  <p className="text-sm text-gray-600">Pelanggan Puas</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;