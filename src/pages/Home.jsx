import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import MouseFollower from '../components/MouseFollower';


function Home() {
  return (
    <>
      <MouseFollower />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <Footer />
    </>
  );
}

export default Home;
