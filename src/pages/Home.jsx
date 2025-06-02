import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';


function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <Footer />
    </>
  );
}

export default Home;
