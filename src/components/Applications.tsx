import { Sprout, Droplet, Leaf, Wheat, Flower2, Apple } from 'lucide-react';
import { motion } from 'framer-motion';

interface ApplicationsProps {
  isDarkMode: boolean;
}

export function Applications({ isDarkMode }: ApplicationsProps) {
  const applications = [
    {
      icon: Droplet,
      title: 'Pesticide Spraying',
      description: 'Precise application with zero human contact with harmful chemicals'
    },
    {
      icon: Leaf,
      title: 'Fertiliser Spraying',
      description: 'Liquid nutrients and micro-nutrients for optimal crop growth'
    },
    {
      icon: Sprout,
      title: 'Growth Boosters',
      description: 'Targeted application of growth-promoting formulations'
    },
    {
      icon: Apple,
      title: 'Micro-Nutrients',
      description: 'Uniform distribution of essential trace elements'
    }
  ];

  const crops = [
    { name: 'Maize', icon: '🌽' },
    { name: 'Paddy', icon: '🌾' },
    { name: 'Red Chilli', icon: '🌶️' },
    { name: 'Cotton', icon: '🌸' },
    { name: 'Turmeric', icon: '🟡' },
    { name: 'Sugarcane', icon: '🎋' },
    { name: 'Vegetables', icon: '🥬' }
  ];

  return (
    <motion.section
      className="py-20 lg:py-32 bg-white dark:bg-gray-900 transition-colors duration-300"
      id="applications"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
            <span className="text-green-700 dark:text-green-400">Versatile Applications</span>
          </div>
          <h2 className="text-gray-900 dark:text-white mb-4">
            Applications & Multi-Crop Usability
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            One drone, endless possibilities. From pesticides to nutrients, across all major Indian crops.
          </p>
        </div>

        {/* Applications Grid */}
        <div className="mb-16">
          <h3 className="text-2xl text-gray-900 dark:text-white mb-8">
            Spraying Applications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, index) => {
              const Icon = app.icon;
              return (
                <motion.div 
                  key={index}
                  className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-green-100 dark:border-gray-600"
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="bg-white dark:bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Icon className="w-8 h-8 text-green-700 dark:text-green-400" />
                  </div>
                  <h4 className="text-gray-900 dark:text-white mb-2">
                    {app.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {app.description}
                  </p>
                  <button className="mt-3 text-sm text-green-700 dark:text-green-400 hover:underline">
                    Learn more
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Safety Highlight */}
        <motion.div
          className="bg-green-700 dark:bg-green-800 rounded-2xl p-8 mb-16 text-center"
          whileHover={{ y: -6 }}
        >
          <div className="max-w-2xl mx-auto">
            <Shield className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl text-white mb-3">
              Zero Human Contact with Chemicals
            </h3>
            <p className="text-green-100">
              Complete operator safety through remote operations. No exposure to harmful pesticides, fertilizers, or chemical formulations during application.
            </p>
          </div>
        </motion.div>

        {/* Crops Grid */}
        <div>
          <h3 className="text-2xl text-gray-900 dark:text-white mb-8 text-center">
            Compatible Crops
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {crops.map((crop, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-500"
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-4xl mb-3">{crop.icon}</div>
                <div className="text-gray-900 dark:text-white">
                  {crop.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Info Banner */}
        <motion.div
          className="mt-12 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 flex items-start space-x-4"
          whileHover={{ y: -4 }}
        >
          <div className="bg-blue-100 dark:bg-blue-900/40 p-2 rounded-lg flex-shrink-0">
            <svg className="w-6 h-6 text-blue-700 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h4 className="text-gray-900 dark:text-white mb-1">
              Customizable for Your Crops
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Our drones can be configured for various other crops and applications. Contact us to discuss your specific requirements.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

function Shield({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}
