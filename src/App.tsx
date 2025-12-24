import { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Krishak2I } from './components/Krishak2I';
import { SafetyTechnology } from './components/SafetyTechnology';
import { Applications } from './components/Applications';
import { Benefits } from './components/Benefits';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const bannerImages = [
    '/banners/banner-hero.png',
    '/banners/banner-logo-strip.png',
    '/banners/banner-mountains.png'
  ];

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="relative min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
        <BackgroundBanners images={bannerImages} />
        <div className="relative z-10">
          <Navigation isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <div className="pt-4">
            <BannerCarousel images={bannerImages} />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pt-12 pb-16" id="home">
            <Hero isDarkMode={isDarkMode} />
            <section id="applications">
              <Applications isDarkMode={isDarkMode} />
            </section>
            <section id="benefits">
              <Benefits isDarkMode={isDarkMode} />
            </section>
            <Krishak2I isDarkMode={isDarkMode} />
            <SafetyTechnology isDarkMode={isDarkMode} />
            <Contact isDarkMode={isDarkMode} />
          </div>
          <Footer isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
}

function BackgroundBanners({ images }: { images: string[] }) {
  return (
    <div className="absolute inset-0 -z-10 opacity-20">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${images[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        initial={{ opacity: 0.6, scale: 1.05 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${images[1] || images[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        initial={{ y: '-20%' }}
        animate={{ y: '20%' }}
        transition={{ duration: 18, repeat: Infinity, repeatType: 'reverse' }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${images[2] || images[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        initial={{ backgroundPosition: '0% 0%' }}
        animate={{ backgroundPosition: '100% 100%' }}
        transition={{ duration: 24, repeat: Infinity, repeatType: 'reverse' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white dark:from-gray-900 dark:via-gray-900/85 dark:to-gray-900" />
    </div>
  );
}

function BannerCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images?.length) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images]);

  if (!images?.length) return null;

  return (
    <div className="w-full">
      <div
        className="relative h-48 md:h-56 lg:h-64 mx-0 sm:mx-4 md:mx-8 lg:mx-12 overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl bg-white"
      >
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <div key={i} className="w-full h-full flex-shrink-0">
              <img
                src={src}
                alt={`Banner ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-3 right-4 flex gap-2 z-10">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === index ? 'bg-gray-900' : 'bg-gray-400/70'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


