import { motion } from 'framer-motion';
import { ArrowLeft, Leaf, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const galleryImages = [
  '/banners/banner-hero.png',
  '/banners/banner-logo-strip.png',
  '/banners/banner-mountains.png',
  '/banners/banner-hero.png',
  '/banners/banner-logo-strip.png',
  '/banners/banner-mountains.png'
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-flex px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 text-sm font-medium">
              About Krishak 2I
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
              Building premium agri-drone experiences for Indian farms
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Krishak 2I blends robust engineering with farmer-first design. From autonomous spraying to
              nationwide service, we craft every touchpoint to deliver reliability, safety, and measurable ROI.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: 'Pilot Hours', value: '20k+' },
                { label: 'States Covered', value: '18' },
                { label: 'Avg. Uptime', value: '98%' }
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-green-200 dark:border-green-800 bg-white dark:bg-gray-900 p-4 shadow-sm"
                >
                  <div className="text-2xl text-green-700 dark:text-green-400 font-semibold">{item.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl bg-white/70 dark:bg-gray-900/70 backdrop-blur"
          >
            <div className="grid grid-cols-3 gap-1">
              {galleryImages.map((src, idx) => (
                <div key={src} className="relative aspect-[4/3] overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.05 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className="w-full h-full bg-gray-200 dark:bg-gray-800 bg-center bg-cover"
                      style={{ backgroundImage: `url(${src})` }}
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute bottom-2 left-2 text-xs text-white/90 bg-black/40 px-2 py-1 rounded-full backdrop-blur">
                    Drone {idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {[
            {
              icon: Shield,
              title: 'Reliability by Design',
              desc: 'Rugged build quality, tested across wet fields, uneven terrain, and long spray hours.'
            },
            {
              icon: Leaf,
              title: 'Precision for Crops',
              desc: 'Variable flow, uniform droplet sizes, and spot spraying to reduce chemical drift.'
            },
            {
              icon: Users,
              title: 'Farmer-Centric Support',
              desc: 'PAN-India service, quick spares, AMC, and RPTO-aligned training for every operator.'
            }
          ].map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4 }}
                className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="inline-flex p-3 rounded-xl bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{card.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

