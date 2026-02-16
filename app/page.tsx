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

      {/* Shared ambient layer — radial orbs + grain bleed across sections */}
      <div className="relative">
        {/* Radial color orbs that span and bleed across sections */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle 700px at 5% 15%, rgba(48,107,172,0.18) 0%, transparent 55%), radial-gradient(circle 600px at 95% 40%, rgba(145,142,244,0.16) 0%, transparent 50%), radial-gradient(circle 800px at 50% 70%, rgba(111,156,238,0.14) 0%, transparent 55%), radial-gradient(circle 500px at 20% 90%, rgba(152,185,242,0.18) 0%, transparent 50%), linear-gradient(180deg, #EDF1FB 0%, #F0F3FC 40%, #EDF1FB 70%, #ffffff 100%)',
          }}
        />
        {/* Noise grain that spans all sections */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '256px 256px',
          }}
        />
        <ServicesPreview />
        <HowWeWork />
        <IndustriesPreview />
      </div>

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
