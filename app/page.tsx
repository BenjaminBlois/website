import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FractionalAccounting from './components/FractionalAccounting';
import ServicesPreview from './components/ServicesPreview';
import OurServices from './components/OurServices';
import Testimonials from './components/Testimonials';
import IndustriesPreview from './components/IndustriesPreview';
import HowWeWork from './components/HowWeWork';
import Integrations from './components/Integrations';
import BlogPosts from './components/BlogPosts';
import CTASection from './components/CTASection';
import BuiltForYourBusiness from './components/BuiltForYourBusiness';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <BuiltForYourBusiness />
      <ServicesPreview />
      <OurServices />
      <IndustriesPreview />
      <HowWeWork />
      <Integrations />
      <BlogPosts />
      <CTASection />
      <Testimonials />
      <FractionalAccounting />
      <Footer />
    </main>
  );
}
