import React from 'react';
import { Training } from '../components/Training';
import { ServiceSupport } from '../components/ServiceSupport';

type ServiceInfo = {
  title: string;
  description: string;
};

const services: ServiceInfo[] = [
  {
    title: 'BharatAero Spray',
    description: `
This service delivers cutting-edge drone spraying solutions for farms across India,
regardless of size, crop type, or terrain.

BharatAero Spray specializes in rapid and precise agrochemical application using
advanced drones, helping reduce labor costs, minimize crop loss, and maximize
field efficiency.

The pan-India network enables easy access in remote and urban areas.
`
  },
  {
    title: 'Green Wings',
    description: `
Eco-focused drone operations that cut input waste, protect soil health,
and deliver sustainable outcomes tailored to Indian farm conditions.
`
  },
  {
    title: 'Kisan360',
    description: `
A 360° farm support layer that includes mission planning, fleet utilization,
data capture, and timely advisory services to improve yields and
overall operational efficiency.
`
  },
  {
    title: 'Kisan Suraksha',
    description: `
A comprehensive reliability and safety program covering preventive maintenance,
operator readiness, regulatory compliance, and rapid-response support to
minimize downtime and ensure uninterrupted operations.
`
  }
];

function ServiceCard({ title, description }: ServiceInfo) {
  return (
    <div
      className="
        h-full
        bg-gradient-to-br from-green-50 via-white to-green-100/70
        dark:from-green-900/20 dark:via-gray-900 dark:to-green-900/20
        border border-green-200 dark:border-green-900/40
        rounded-3xl
        shadow-sm hover:shadow-lg
        transition-all duration-300
        p-6 sm:p-8
        flex flex-col
      "
    >
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
        {description}
      </p>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">

        {/* Services Intro + Cards */}
        <section>
          <div className="rounded-3xl bg-gradient-to-br from-green-50/80 via-white to-green-100/70 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 border border-green-100 dark:border-gray-800 shadow-lg p-6 sm:p-10">
            <div className="space-y-4">
              <span className="inline-flex px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-semibold">
                Our Services
              </span>

              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                Solutions built for Indian agriculture
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl">
                From precision spraying to full-spectrum farm support, these offerings
                are designed to keep agricultural operations efficient, safe, and
                sustainable across every season.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Training & Support (existing content preserved) */}
        <section className="space-y-4">
          <span className="inline-flex px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-semibold">
            Services
          </span>

          <h2 className="text-3xl font-extrabold">
            Training & Support
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            Everything you need to deploy, train, and maintain agri-drone operations
            with confidence and long-term reliability.
          </p>
        </section>

        <div className="space-y-12">
          <Training isDarkMode={false} />
          <ServiceSupport isDarkMode={false} />
        </div>

      </div>
    </div>
  );
}
