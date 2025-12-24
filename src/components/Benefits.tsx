import { DollarSign, Zap, Droplets, Cloud, Clock, Shield, TrendingUp, Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface BenefitsProps {
  isDarkMode: boolean;
}

export function Benefits({ isDarkMode }: BenefitsProps) {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Saves up to 80% Labour Cost',
      description: 'Dramatically reduce manual labour expenses with automated operations'
    },
    {
      icon: Zap,
      title: 'Covers 4 Acres per Battery',
      description: '25-30 acres per day with multiple battery cycles for maximum productivity'
    },
    {
      icon: Droplets,
      title: 'Reduces 30-40% Pesticide',
      description: 'Precision spraying minimizes waste and environmental impact'
    },
    {
      icon: Cloud,
      title: 'Works in All Conditions',
      description: 'Operates effectively in wet, muddy, and uneven field conditions'
    },
    {
      icon: Clock,
      title: 'Faster Operations',
      description: 'Complete critical spraying during peak season without delays'
    },
    {
      icon: Shield,
      title: 'Farmer Safety First',
      description: 'Eliminates direct chemical exposure, protecting farmer health'
    },
    {
      icon: TrendingUp,
      title: 'Increases Yield',
      description: 'Better crop protection leads to improved harvest quality and quantity'
    }
  ];

  const comparison = [
    {
      aspect: 'Coverage per day',
      drone: '25-30 acres',
      manual: '1-2 acres',
      droneAdvantage: true
    },
    {
      aspect: 'Labour required',
      drone: '1 operator',
      manual: '10-15 workers',
      droneAdvantage: true
    },
    {
      aspect: 'Cost per acre',
      drone: '₹200-300',
      manual: '₹800-1200',
      droneAdvantage: true
    },
    {
      aspect: 'Pesticide usage',
      drone: '30-40% less',
      manual: 'Standard amount',
      droneAdvantage: true
    },
    {
      aspect: 'Time to complete 10 acres',
      drone: '4-5 hours',
      manual: '5-7 days',
      droneAdvantage: true
    },
    {
      aspect: 'Health risk to operators',
      drone: 'Zero contact',
      manual: 'Direct exposure',
      droneAdvantage: true
    }
  ];

  return (
    <motion.section
      id="benefits"
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
            <span className="text-green-700 dark:text-green-400">Measurable Impact</span>
          </div>
          <h2 className="text-gray-900 dark:text-white mb-4">
            Benefits to Farmers & Cost Savings
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Real results that transform your farming operations and bottom line.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg flex-shrink-0">
                    <Icon className="w-6 h-6 text-green-700 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {benefit.description}
                    </p>
                  </div>
                </div>
                <button className="mt-3 text-sm text-green-700 dark:text-green-400 hover:underline">
                  View details
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison Section */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <motion.div
            className="bg-gradient-to-r from-green-700 to-green-600 dark:from-green-800 dark:to-green-700 p-6 text-center"
            whileHover={{ y: -2 }}
          >
            <h3 className="text-2xl text-white">
              Drone Spraying vs Manual Spraying
            </h3>
            <p className="text-green-100 mt-2">
              See the clear advantage of drone technology
            </p>
          </motion.div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="px-6 py-4 text-left text-gray-900 dark:text-white">
                    Comparison Aspect
                  </th>
                  <th className="px-6 py-4 text-center bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400">
                    Drone Spraying
                  </th>
                  <th className="px-6 py-4 text-center text-gray-700 dark:text-gray-400">
                    Manual Spraying
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <td className="px-6 py-4 text-gray-900 dark:text-white">
                      {item.aspect}
                    </td>
                    <td className="px-6 py-4 text-center bg-green-50 dark:bg-green-900/20">
                      <div className="flex items-center justify-center space-x-2">
                        <Check className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                        <span className="text-gray-900 dark:text-white">{item.drone}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <X className="w-5 h-5 text-red-500 dark:text-red-400 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">{item.manual}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary Footer */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              The choice is clear: <span className="text-green-700 dark:text-green-400">Drone technology delivers superior results at lower costs</span>
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
