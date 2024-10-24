import Header from './components/Header'
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import ServicesSection from './components/ServicesSection';
import AboutUsSection from './components/AboutUsSection';
import ContactForm from './components/ContactForm';

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ServicesSection/>
        <AboutUsSection/>
        <ContactForm/>
      </main>
      <Footer />
    </div>
  );
}
