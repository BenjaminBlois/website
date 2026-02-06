import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ServicesPreview from './components/ServicesPreview';
import IndustriesPreview from './components/IndustriesPreview';
import HowWeWork from './components/HowWeWork';
import CTASection from './components/CTASection';
import BuiltForYourBusiness from './components/BuiltForYourBusiness';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <BuiltForYourBusiness />
      <ServicesPreview />
      <HowWeWork />
      <IndustriesPreview />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
