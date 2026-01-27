import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function IndustriesPage() {
  const industries = [
    {
      name: 'Private Equity Backed Firms',
      description: 'We understand the unique reporting requirements and investor expectations of PE-backed companies. Our team ensures your financials meet the highest standards for due diligence and ongoing reporting.',
      expertise: ['Investor reporting', 'Due diligence support', 'Scalable financial infrastructure'],
    },
    {
      name: 'Construction Companies',
      description: 'Specialized knowledge in job costing, WIP accounting, retainage, and project profitability. We help construction businesses track margins accurately and manage cash flow effectively.',
      expertise: ['Job costing', 'WIP & retainage', 'Project profitability'],
    },
    {
      name: 'Consulting Firms',
      description: 'Expertise in project-based revenue recognition, time tracking, and client profitability analysis. We help consulting firms optimize their billing and understand true project margins.',
      expertise: ['Project-based accounting', 'Time tracking integration', 'Client profitability'],
    },
    {
      name: 'Ecommerce Businesses',
      description: 'Deep understanding of COGS, inventory management, multi-channel sales, and platform integrations. We help ecommerce businesses get accurate margins and scale efficiently.',
      expertise: ['COGS accuracy', 'Inventory management', 'Multi-channel reporting'],
    },
    {
      name: 'Manufacturers',
      description: 'Specialized in cost accounting, inventory valuation, and production efficiency metrics. We help manufacturers understand true product costs and optimize operations.',
      expertise: ['Cost accounting', 'Inventory valuation', 'Production metrics'],
    },
    {
      name: 'Marketing Agencies',
      description: 'Expertise in client profitability, project-based billing, and agency-specific KPIs. We help agencies understand which clients and projects drive real profitability.',
      expertise: ['Client profitability', 'Project billing', 'Agency KPIs'],
    },
    {
      name: 'Nonprofits',
      description: 'Understanding of fund accounting, grant reporting, and compliance requirements. We help nonprofits maintain transparency and meet donor expectations.',
      expertise: ['Fund accounting', 'Grant reporting', 'Compliance'],
    },
    {
      name: 'Service Businesses',
      description: 'Specialized knowledge in service-based revenue recognition, utilization metrics, and service profitability. We help service businesses optimize pricing and resource allocation.',
      expertise: ['Service revenue', 'Utilization metrics', 'Pricing optimization'],
    },
    {
      name: 'Software Companies',
      description: 'Expertise in SaaS metrics, revenue recognition (ASC 606), and software-specific financial modeling. We help software companies understand unit economics and growth metrics.',
      expertise: ['SaaS metrics', 'ASC 606 compliance', 'Unit economics'],
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        {/* Intro Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#313d46] mb-6">
                Industries We Serve
              </h1>
              <p className="text-lg text-[#393f41]">
                We specialize in these industries and understand their unique financial needs. Our industry-specific expertise ensures you get the right data and insights for your business.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-[#313d46] mb-3">
                    {industry.name}
                  </h3>
                  <p className="text-[#393f41] mb-4">{industry.description}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-[#313d46] mb-2">
                      Our Expertise:
                    </h4>
                    <ul className="space-y-1">
                      {industry.expertise.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-[#50a744] mr-2 font-bold">•</span>
                          <span className="text-sm text-[#393f41]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
