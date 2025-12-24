import { TrendingUp, DollarSign, Clock, Shield, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';

interface WhyAgriDronesProps {
  isDarkMode: boolean;
}

export function WhyAgriDrones({ isDarkMode }: WhyAgriDronesProps) {
  const benefits = [
    {
      icon: Users,
      title: 'Labour Shortage Solution',
      description: 'Address critical farm labour shortages with automated drone technology'
    },
    {
      icon: DollarSign,
      title: 'Reduce Costs',
      description: 'Combat rising pesticide and fertilizer costs with precise application'
    },
    {
      icon: Clock,
      title: 'Faster Operations',
      description: 'Complete spraying tasks in hours, not days, with autonomous flying'
    },
    {
      icon: Shield,
      title: 'Farmer Safety',
      description: 'Eliminate health hazards from manual pesticide and chemical exposure'
    },
    {
      icon: TrendingUp,
      title: 'Higher Accuracy',
      description: 'Uniform spraying with variable flow rates for better crop coverage'
    },
    {
      icon: Award,
      title: 'Government Support',
      description: 'Access subsidies and promotion programs for drone adoption'
    }
  ];

  const highlights = [
    { label: 'Time Saving', color: 'bg-blue-500' },
    { label: 'Money Saving', color: 'bg-green-500' },
    { label: 'Yield Improving', color: 'bg-yellow-500' },
    { label: 'Farmer Safety', color: 'bg-red-500' }
  ];

  return (
    <motion.section
      id="why-agri-drones"
      className="py-20 lg:py-32 bg-white dark:bg-gray-900 transition-colors duration-300"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
            <span className="text-green-700 dark:text-green-400">Why Choose Drone Technology</span>
          </div>
          <h2 className="text-gray-900 dark:text-white mb-4">
            Why Agricultural Drones?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Modern challenges require modern solutions. Agricultural drones transform farming with precision, efficiency, and safety.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div 
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-500"
                  whileHover={{ y: -6, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-green-700 dark:text-green-400" />
                  </div>
                  <h3 className="text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </p>
                  <button className="mt-3 text-sm text-green-700 dark:text-green-400 hover:underline">
                    Learn more
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Infographic Style */}
          <div className="space-y-8">
            <motion.div
              className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border border-gray-200 dark:border-gray-600"
              whileHover={{ y: -4 }}
            >
              <h3 className="text-gray-900 dark:text-white mb-6">
                Key Impact Areas
              </h3>
              
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`w-3 h-3 rounded-full ${highlight.color}`}></div>
                    <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg px-4 py-3 shadow-sm">
                      <span className="text-gray-900 dark:text-white">{highlight.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stats Card */}
            <motion.div
              className="bg-green-700 dark:bg-green-800 rounded-2xl p-8 text-white"
              whileHover={{ y: -4 }}
            >
              <h3 className="text-2xl mb-6">By The Numbers</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-green-600 dark:border-green-700">
                  <span className="text-green-100">Coverage Per Day</span>
                  <span className="text-2xl">25-30 Acres</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-green-600 dark:border-green-700">
                  <span className="text-green-100">Labour Cost Reduction</span>
                  <span className="text-2xl">Up to 80%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-100">Pesticide Savings</span>
                  <span className="text-2xl">30-40%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
