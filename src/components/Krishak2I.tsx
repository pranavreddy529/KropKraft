import { Battery, MapPin, Droplets, Smartphone, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface Krishak2IProps {
  isDarkMode: boolean;
}

export function Krishak2I({ isDarkMode }: Krishak2IProps) {
  const features = [
    {
      icon: Droplets,
      title: '10-Liter Capacity',
      description: 'Advanced agriculture drone with industry-leading tank capacity for extended operations'
    },
    {
      icon: MapPin,
      title: 'Fully Autonomous',
      description: 'Autonomous flying and spraying with GPS precision for consistent coverage'
    },
    {
      icon: CheckCircle,
      title: 'Indian Conditions',
      description: 'Specifically designed for tough Indian farm conditions and diverse terrains'
    }
  ];

  const highlights = [
    {
      icon: Battery,
      title: 'Up to 4 Acres Per Battery',
      description: 'Extended flight time for maximum productivity without frequent recharging'
    },
    {
      icon: MapPin,
      title: 'Autonomous Spot Spraying',
      description: 'Target affected zones precisely with intelligent mapping technology'
    },
    {
      icon: Droplets,
      title: 'Variable Flow Rate',
      description: 'Adjustable spraying for uniform application across different crop types'
    },
    {
      icon: Smartphone,
      title: 'Mobile Controller',
      description: 'Easy-to-operate interface via smartphone for complete mission control'
    }
  ];

  return (
    <motion.section
      id="krishak-2i-drone"
      className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
            <span className="text-green-700 dark:text-green-400">Our Flagship Product</span>
          </div>
          <h2 className="text-gray-900 dark:text-white mb-4">
            Krishak 2I (10L) Agri Drone
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Engineered for excellence, built for Indian agriculture. The Krishak 2I combines cutting-edge technology with practical farming needs.
          </p>
        </div>

        {/* Product Showcase */}
        <div className="mb-16">
          <motion.div
            className="relative bg-gradient-to-br from-green-600 to-green-800 dark:from-green-700 dark:to-green-900 rounded-3xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.01 }}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
              <div className="text-white space-y-6">
                <h3 className="text-3xl lg:text-4xl">
                  Advanced Agricultural Drone Technology
                </h3>
                <p className="text-green-100 text-lg">
                  The Krishak 2I represents the pinnacle of agricultural drone engineering, delivering unmatched performance and reliability for modern Indian farmers.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg">10L Capacity</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg">Fully Autonomous</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg">GPS Enabled</span>
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg">Made for India</span>
                </div>
              </div>
              <div className="relative h-64 lg:h-80">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <div className="text-white/60 text-center">
                    <svg className="w-32 h-32 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <p>Product Visualization</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="bg-green-100 dark:bg-green-900/30 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-green-700 dark:text-green-400" />
                </div>
                <h3 className="text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
                <button className="mt-4 text-sm text-green-700 dark:text-green-400 hover:underline">
                  Explore details
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Key Highlights */}
        <div>
          <h3 className="text-2xl text-gray-900 dark:text-white mb-8 text-center">
            Key Highlights
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div 
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-500"
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-green-700 dark:text-green-400" />
                  </div>
                  <h4 className="text-gray-900 dark:text-white mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {highlight.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
