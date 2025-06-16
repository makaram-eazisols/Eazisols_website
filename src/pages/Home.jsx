import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import MouseFollower from '../components/MouseFollower';
import AboutSection from '../components/AboutSection';
import Services from '../components/Services';
import Sections from '../components/Sections';
import Status from '../components/Status';
import Features from '../components/Features';
import Portfolio from '../components/Portfolio';
import NewsLetter from '../components/NewsLetter';
import Clients from '../components/Clients';
import Show from '../components/Show';
import ContactUs from '../components/ContactUs';



function Home() {
  return (
    <>
      <MouseFollower />
      <Navbar />
      <HeroSection />
      <Sections />
      <Services />
      <AboutSection />
      <Status />
      <Features />
      <Portfolio />
      <NewsLetter />
      <Clients />
      <ContactUs />
      <Show />
      {/* <ServicesSection /> */}
      <Footer />
    </>
  );
}

export default Home;
