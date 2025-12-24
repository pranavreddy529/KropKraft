import { Shield, Radio, Home, Eye, Zap, Lock } from 'lucide-react';

interface SafetyTechnologyProps {
  isDarkMode: boolean;
}

export function SafetyTechnology({ isDarkMode }: SafetyTechnologyProps) {
  const safetyFeatures = [
    {
      icon: Shield,
      title: 'Crash-Resilient Build',
      description: 'Robust construction designed to withstand impacts and harsh field conditions'
    },
    {
      icon: Radio,
      title: 'Geofenced Operations',
      description: 'Virtual boundaries ensure the drone operates only in designated safe zones'
    },
    {
      icon: Home,
      title: 'Return-to-Home (RTH)',
      description: 'Automatic return function when battery is low or signal is lost'
    },
    {
      icon: Eye,
      title: 'Obstacle Avoidance',
      description: 'Advanced sensors detect and avoid obstacles in real-time during flight'
    },
    {
      icon: Zap,
      title: 'Safe Near Power Lines',
      description: 'Designed to fly safely near and under high-voltage transmission lines'
    },
    {
      icon: Lock,
      title: 'Secure Operations',
      description: 'Encrypted communication and fail-safe mechanisms for reliable performance'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-black dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-green-900/30 rounded-full mb-4">
            <span className="text-green-400">Advanced Safety & Technology</span>
          </div>
          <h2 className="text-white mb-4">
            Built for Safety, Engineered for Reliability
          </h2>
          <p className="text-xl text-gray-300">
            Multiple layers of safety features and cutting-edge technology ensure worry-free operations in any condition.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {safetyFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group relative bg-gray-800 dark:bg-gray-800/50 rounded-xl p-6 hover:bg-gray-750 dark:hover:bg-gray-700/50 transition-all duration-300 border border-gray-700 dark:border-gray-600 hover:border-green-500 dark:hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full -mr-16 -mt-16 group-hover:bg-green-500/10 transition-colors"></div>
                <div className="relative">
                  <div className="bg-green-900/30 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-800/40 transition-colors">
                    <Icon className="w-7 h-7 text-green-400" />
                  </div>
                  <h3 className="text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Highlight Banner */}
        <div className="mt-16 bg-gradient-to-r from-green-700 to-green-600 dark:from-green-800 dark:to-green-700 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl text-white mb-4">
            Industry-Leading Safety Standards
          </h3>
          <p className="text-green-100 text-lg max-w-3xl mx-auto mb-8">
            Our drones meet and exceed all regulatory requirements, featuring redundant safety systems and real-time monitoring for complete peace of mind.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-white">
            <div className="flex items-center space-x-2">
              <CheckIcon />
              <span>DGCA Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckIcon />
              <span>Multi-Layer Safety</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckIcon />
              <span>Real-Time Monitoring</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckIcon />
              <span>Fail-Safe Systems</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}
