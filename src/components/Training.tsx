import { GraduationCap, FileCheck, Users, Award } from 'lucide-react';

interface TrainingProps {
  isDarkMode: boolean;
}

export function Training({ isDarkMode }: TrainingProps) {
  const steps = [
    {
      number: '01',
      icon: GraduationCap,
      title: 'Comprehensive Pilot Training',
      description: 'Expert-led training programs covering all aspects of drone operations, safety protocols, and maintenance procedures',
      features: ['Hands-on practice', 'Theory & practical sessions', 'Safety protocols']
    },
    {
      number: '02',
      icon: FileCheck,
      title: 'DGCA-Approved Curriculum',
      description: 'Certified training program that meets all regulatory requirements set by the Directorate General of Civil Aviation',
      features: ['Official certification', 'Regulatory compliance', 'Industry standards']
    },
    {
      number: '03',
      icon: Users,
      title: 'RPTO Tie-ups',
      description: 'Partnerships with Remote Pilot Training Organizations for comprehensive skill development and certification',
      features: ['Authorized centers', 'Professional instructors', 'Quality assurance']
    },
    {
      number: '04',
      icon: Award,
      title: 'On-Field Demonstrations',
      description: 'Practical field demonstrations to understand real-world applications and operational best practices',
      features: ['Live operations', 'Real farm conditions', 'Expert guidance']
    }
  ];

  return (
    <section id="training-and-support" className="py-20 lg:py-32 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
            <span className="text-green-700 dark:text-green-400">Professional Training</span>
          </div>
          <h2 className="text-gray-900 dark:text-white mb-4">
            Training & Certification
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Comprehensive training programs to ensure you're fully equipped to operate agricultural drones safely and effectively.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-500 via-green-600 to-green-700 dark:from-green-600 dark:via-green-700 dark:to-green-800"></div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="relative">
                  {/* Desktop Layout */}
                  <div className={`hidden lg:grid lg:grid-cols-2 gap-8 items-center ${isEven ? '' : 'dir-rtl'}`}>
                    {/* Content */}
                    <div className={`${isEven ? 'text-right' : 'text-left'}`}>
                      <div className={`bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 ${isEven ? 'ml-auto' : 'mr-auto'}`}>
                        <div className={`flex items-center ${isEven ? 'justify-end' : 'justify-start'} mb-4`}>
                          <span className="text-4xl text-green-700 dark:text-green-400 opacity-30 mr-4">
                            {step.number}
                          </span>
                          <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                            <Icon className="w-6 h-6 text-green-700 dark:text-green-400" />
                          </div>
                        </div>
                        <h3 className="text-gray-900 dark:text-white mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {step.description}
                        </p>
                        <ul className={`space-y-2 ${isEven ? 'text-right' : 'text-left'}`}>
                          {step.features.map((feature, fIndex) => (
                            <li key={fIndex} className={`flex items-center ${isEven ? 'justify-end' : 'justify-start'} text-sm text-gray-700 dark:text-gray-300`}>
                              <svg className={`w-4 h-4 text-green-600 dark:text-green-400 ${isEven ? 'ml-2 order-1' : 'mr-2'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Spacer for opposite side */}
                    <div></div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="lg:hidden">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center mb-4">
                        <span className="text-3xl text-green-700 dark:text-green-400 opacity-30 mr-3">
                          {step.number}
                        </span>
                        <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                          <Icon className="w-6 h-6 text-green-700 dark:text-green-400" />
                        </div>
                      </div>
                      <h3 className="text-gray-900 dark:text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {step.description}
                      </p>
                      <ul className="space-y-2">
                        {step.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                            <svg className="w-4 h-4 text-green-600 dark:text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center Circle - Desktop */}
                  <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-green-600 dark:bg-green-700 rounded-full border-4 border-white dark:border-gray-900 shadow-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Training Image/Visual Section */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/drone training.jpeg"
              alt="Drone Training Session"
              className="w-full h-80 object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl text-gray-900 dark:text-white">
              Start Your Journey Today
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Join hundreds of certified drone pilots who have transformed their agricultural operations through our comprehensive training programs. Get certified, get equipped, and get flying.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-green-700 dark:bg-green-600 text-white rounded-lg hover:bg-green-800 dark:hover:bg-green-700 transition-colors shadow-md">
                Enroll in Training
              </button>
              <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                View Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
