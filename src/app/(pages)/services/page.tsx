import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Services() {
  return (
    <>
      <Header />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-12">Our Services</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Business Strategy</h2>
              <p className="text-gray-600 mb-4">
                We help you develop comprehensive business strategies that align with your vision and goals. 
                Our consultants analyze market trends, competitive landscape, and internal capabilities to create 
                actionable roadmaps for success.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Market Analysis</li>
                <li>✓ Competitive Analysis</li>
                <li>✓ Strategic Planning</li>
                <li>✓ Growth Strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Operations Consulting</h2>
              <p className="text-gray-600 mb-4">
                Optimize your operations to reduce costs, improve efficiency, and enhance quality. 
                We conduct thorough assessments and implement best practices across all operational areas.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Process Optimization</li>
                <li>✓ Cost Reduction</li>
                <li>✓ Quality Improvement</li>
                <li>✓ Supply Chain Management</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Digital Transformation</h2>
              <p className="text-gray-600 mb-4">
                Modernize your business through strategic use of technology. We guide you through digital transformation 
                initiatives to enhance customer experience and operational efficiency.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Technology Strategy</li>
                <li>✓ Digital Roadmap</li>
                <li>✓ Change Management</li>
                <li>✓ Implementation Support</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Change Management</h2>
              <p className="text-gray-600 mb-4">
                Successfully navigate organizational change with our comprehensive change management services. 
                We help your team embrace new ways of working and maximize adoption of new initiatives.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Change Strategy</li>
                <li>✓ Communication Plans</li>
                <li>✓ Training & Development</li>
                <li>✓ Stakeholder Management</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
