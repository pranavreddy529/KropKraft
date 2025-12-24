import React, { useState } from 'react';
import { motion } from 'framer-motion';

const contactDetails = [
  {
    title: 'Venue',
    lines: [
      'Maruthi Heavens, Shaili Gardens,',
      'Sainikpuri, Secunderabad,',
      'Hyderabad, Telangana – 500094'
    ]
  },
  {
    title: 'Email Address',
    lines: ['info@kropkraft.com', 'contact@kropkraft.com']
  },
  {
    title: 'Phone Number',
    lines: ['(+91) 91338 78251']
  }
];

const services = [
  'Drone Sales',
  'Drone Services',
  'Training & Certification',
  'Maintenance & Support',
  'Government / Institutional Inquiry',
  'Other'
];

export default function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (form: HTMLFormElement) => {
    const data = new FormData(form);
    const newErrors: Record<string, string> = {};

    if (!data.get('business')) newErrors.business = 'Business name is required';
    if (!data.get('email') || !String(data.get('email')).includes('@'))
      newErrors.email = 'Valid email is required';
    if (!data.get('name')) newErrors.name = 'Full name is required';
    if (!data.get('phone') || String(data.get('phone')).length < 8)
      newErrors.phone = 'Valid phone number required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 text-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-700 to-green-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-lg text-green-100 max-w-3xl mx-auto">
            Engage with KropKraft Innovations for partnerships, services,
            training programs, and official collaborations.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-16 space-y-14">
        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {contactDetails.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: idx * 0.06 }}
              className="
                bg-white rounded-2xl border border-gray-200 p-6
                shadow-sm hover:shadow-lg
                transition-all
              "
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <div className="space-y-1 text-gray-600">
                {item.lines.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Form + Map */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Form */}
          <div className="bg-gradient-to-br from-green-700 to-green-600 rounded-2xl p-1 shadow-lg">
            <div className="bg-white rounded-2xl h-full p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>

              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (validate(e.currentTarget)) {
                    alert('Form submitted (connect backend later)');
                    e.currentTarget.reset();
                    setErrors({});
                  }
                }}
              >
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Business Name *
                  </label>
                  <input
                    name="business"
                    className={`w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-green-600 ${
                      errors.business ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.business && (
                    <p className="text-sm text-red-600 mt-1">{errors.business}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Email *</label>
                  <input
                    name="email"
                    type="email"
                    className={`w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-green-600 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600 mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      className={`w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-green-600 ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-600 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Phone Number *
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      className={`w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-green-600 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-600 mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Service Category
                  </label>
                  <select
                    name="service"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-green-600"
                  >
                    {services.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="
                    w-full bg-green-700 text-white rounded-lg py-3
                    font-semibold hover:bg-green-800
                    transition-colors shadow-md
                  "
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
            <iframe
              title="KropKraft Location"
              src="https://share.google/5KxKoeagvzabBaW1G"
              className="w-full h-full min-h-[420px]"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </main>
    </div>
  );
}
