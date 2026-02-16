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

      {/* Single smooth gradient: white → palette → footer dark */}
      <div
        style={{
          background: 'linear-gradient(to bottom, #ffffff 0%, #e8eefc 8%, #98B9F2 20%, #6F9CEE 35%, #306BAC 55%, #1E2F6A 75%, #141B41 90%)',
        }}
      >
        <Testimonials />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}
