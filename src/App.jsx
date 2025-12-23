import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from "./ui/toaster";

function App() {
  return (
    <>
      <Helmet>
        <title>Sejahtera Service - Service Electronic</title>
        <meta name="description" content="Layanan service electronic terpercaya untuk smartphone, laptop, tablet, dan perangkat elektronik lainnya. Teknisi berpengalaman, garansi, dan booking online mudah." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Header />
        <Hero />
        <Services />
        <Gallery />
        <Booking />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;