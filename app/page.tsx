import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ServicesPreview from './components/ServicesPreview';
import OurServices from './components/OurServices';
import Testimonials from './components/Testimonials';
import IndustriesPreview from './components/IndustriesPreview';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ServicesPreview />
      <OurServices />
      <Testimonials />
      <IndustriesPreview />
      <CTASection />
      <Footer />
    </main>
  );
}
