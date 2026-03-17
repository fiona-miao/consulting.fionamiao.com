import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Pricing() {
  const plans = [
    {
      name: 'Consultation',
      price: '$200',
      duration: '/hour',
      features: ['1-on-1 sessions', 'Expert advice', 'Initial assessment']
    },
    {
      name: 'Project-Based',
      price: 'Custom',
      duration: 'pricing',
      features: ['Full project scope', 'Strategic roadmap', 'Implementation support'],
      highlighted: true
    },
    {
      name: 'Retainer',
      price: '$3,000',
      duration: '/month',
      features: ['Weekly consultations', 'Priority support', 'Ongoing advisory']
    }
  ];

  return (
    <>
      <Header />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4 text-center">Pricing Plans</h1>
          <p className="text-gray-600 text-center mb-12">Select the plan that best fits your needs</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-lg shadow-md p-8 transform transition hover:scale-105 ${
                  plan.highlighted ? 'bg-blue-600 text-white ring-2 ring-blue-600' : 'bg-white'
                }`}
              >
                <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-sm">{plan.duration}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className={plan.highlighted ? 'text-white' : 'text-gray-600'}>
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-2 rounded font-bold transition ${
                    plan.highlighted
                      ? 'bg-white text-blue-600 hover:bg-gray-100'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
