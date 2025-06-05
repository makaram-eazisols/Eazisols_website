import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import MouseFollower from '../components/MouseFollower';
import AboutSection from '../components/AboutSection';
import Services from '../components/Services';
import Sections from '../components/Sections';


function Home() {
  return (
    <>
      <MouseFollower />
      <Navbar />
      <HeroSection />
      <Sections />
      <Services />
      <AboutSection />
      <ServicesSection />
      <Footer />
    </>
  );
}

export default Home;
