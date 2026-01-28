import Navigation from '../components/Navigation';
import OurServices from '../components/OurServices';
import Footer from '../components/Footer';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#313d46] mb-4">
              Our Services
            </h1>
            <p className="text-lg text-[#393f41] max-w-3xl mx-auto">
              Comprehensive accounting and financial services tailored to your business needs.
            </p>
          </div>
        </div>
        <OurServices />
      </div>
      <Footer />
    </main>
  );
}
