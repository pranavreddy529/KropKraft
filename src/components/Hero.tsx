import { ArrowRight, PlayCircle } from 'lucide-react';
import droneImage from 'figma:asset/5ef44719c733a5b69def45fd57a337f772f2cdce.png';
import backdropImage from 'figma:asset/19fd9c4c0c3ed3ff1a927a2b7bd87e8872383944.png';

interface HeroProps {
  isDarkMode: boolean;
}

export function Hero({ isDarkMode }: HeroProps) {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Backdrop Image as Watermark */}
      <div className="absolute inset-0 opacity-5 dark:opacity-[0.02] pointer-events-none">
        <img 
          src={backdropImage}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Revolutionizing Indian <span className="text-green-700 dark:text-green-500">Agriculture</span> With <span className="text-green-700 dark:text-green-500">Drone Technology</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300">
              KropKraft Innovations provides cutting-edge drone spraying, sales, training, and complete farm automation solutions optimized for Indian farming conditions. Experience precision agriculture with our flagship <span className="text-green-700 dark:text-green-400">Krishak 2I (10L)</span> agri drone.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="group px-8 py-4 bg-green-700 dark:bg-green-600 text-white rounded-xl hover:bg-green-800 dark:hover:bg-green-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Request a Free Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all flex items-center justify-center space-x-2">
                <PlayCircle className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div>
                <div className="text-3xl text-green-700 dark:text-green-400 mb-1">4 Acres</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Per Battery</div>
              </div>
              <div>
                <div className="text-3xl text-green-700 dark:text-green-400 mb-1">80%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Cost Savings</div>
              </div>
              <div>
                <div className="text-3xl text-green-700 dark:text-green-400 mb-1">30-40%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Less Pesticide</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={droneImage}
                alt="Agricultural Drone in Action"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 max-w-xs border border-gray-100 dark:border-gray-700">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-green-700 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-900 dark:text-white mb-1">DGCA Approved</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Certified Training & Operations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute top-0 right-0 -z-10 opacity-10 dark:opacity-5">
        <svg width="404" height="404" fill="none" viewBox="0 0 404 404">
          <defs>
            <pattern id="hero-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-green-700" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#hero-pattern)" />
        </svg>
      </div>
    </section>
  );
}