import { MapPin, Wrench, Package, Zap, Phone, CheckCircle } from 'lucide-react';

interface ServiceSupportProps {
  isDarkMode: boolean;
}

export function ServiceSupport({ isDarkMode }: ServiceSupportProps) {
  const services = [
    {
      icon: MapPin,
      title: 'PAN-India Service Team',
      description: 'Extensive network of service centers and technicians across all states'
    },
    {
      icon: Phone,
      title: 'AMC & On-Call Support',
      description: 'Annual Maintenance Contracts and 24/7 helpline for immediate assistance'
    },
    {
      icon: Package,
      title: 'Spare Parts Availability',
      description: 'Comprehensive inventory of genuine parts for quick replacements'
    },
    {
      icon: Wrench,
      title: 'Quick Repair & Maintenance',
      description: 'Expert technicians ensure minimal downtime with fast turnaround'
    },
    {
      icon: Zap,
      title: 'Free Demo & Consultation',
      description: 'On-field demonstrations and expert guidance before purchase'
    },
    {
      icon: CheckCircle,
      title: 'Training & Onboarding',
      description: 'Complete operator training and ongoing technical support'
    }
  ];

  const regions = [
    'North India',
    'South India',
    'East India',
    'West India',
    'Central India',
    'Northeast India'
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
            <span className="text-green-700 dark:text-green-400">Nationwide Support</span>
          </div>
          <h2 className="text-gray-900 dark:text-white mb-4">
            Service & Support – PAN-India Coverage
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Wherever you are in India, our dedicated support team is ready to assist you with expert service and genuine parts.
          </p>
        </div>

        {/* Map Visual */}
        <div className="mb-16 relative">
          <div className="bg-gradient-to-br from-green-100 to-blue-100 dark:from-gray-900 dark:to-gray-700 rounded-2xl p-12 relative overflow-hidden border border-gray-200 dark:border-gray-600">
            {/* India Map Placeholder */}
            <div className="relative z-10 text-center">
              <MapPin className="w-20 h-20 text-green-700 dark:text-green-400 mx-auto mb-6" />
              <h3 className="text-3xl text-gray-900 dark:text-white mb-4">
                PAN-India Operations
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Our extensive network ensures you receive prompt support and service regardless of your location
              </p>
              
              {/* Region Tags */}
              <div className="flex flex-wrap justify-center gap-3">
                {regions.map((region, index) => (
                  <div 
                    key={index}
                    className="px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-md border border-green-200 dark:border-green-700 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full"></div>
                      <span className="text-gray-900 dark:text-white">{region}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                </pattern>
                <rect width="100" height="100" fill="url(#grid)" />
              </svg>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-500"
              >
                <div className="bg-green-100 dark:bg-green-900/30 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-green-700 dark:text-green-400" />
                </div>
                <h3 className="text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-green-700 to-green-600 dark:from-green-800 dark:to-green-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl mb-4">Schedule a Free Demo</h3>
            <p className="text-green-100 mb-6">
              See the Krishak 2I in action on your farm. Our experts will demonstrate all features and answer your questions.
            </p>
            <button className="px-6 py-3 bg-white text-green-700 rounded-lg hover:bg-green-50 transition-colors shadow-md">
              Book Free Demo
            </button>
          </div>

          <div className="bg-gradient-to-br from-blue-700 to-blue-600 dark:from-blue-800 dark:to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl mb-4">Get Support Now</h3>
            <p className="text-blue-100 mb-6">
              Our support team is available 24/7 to help with any questions or technical issues you may have.
            </p>
            <button className="px-6 py-3 bg-white text-blue-700 rounded-lg hover:bg-blue-50 transition-colors shadow-md">
              Contact Support
            </button>
          </div>
        </div>

        {/* Support Stats */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl text-green-700 dark:text-green-400 mb-2">24/7</div>
            <div className="text-gray-600 dark:text-gray-400">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-green-700 dark:text-green-400 mb-2">500+</div>
            <div className="text-gray-600 dark:text-gray-400">Service Centers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-green-700 dark:text-green-400 mb-2">&lt;24h</div>
            <div className="text-gray-600 dark:text-gray-400">Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-green-700 dark:text-green-400 mb-2">98%</div>
            <div className="text-gray-600 dark:text-gray-400">Customer Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
