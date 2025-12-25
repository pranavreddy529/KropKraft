import React, { useState } from 'react';
import { Mail, Phone, Globe, MapPin, Send, CalendarClock, NotebookPen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactProps {
  isDarkMode: boolean;
}

function InputField({
  label,
  id,
  name,
  value,
  onChange,
  required,
  type = 'text',
  placeholder,
  icon,
  min
}: {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  required?: boolean;
  type?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  min?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-gray-700 dark:text-gray-300 mb-2">
        {label}
      </label>
      <div className="relative">
        {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2">{icon}</div>}
        <input
          type={type}
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          min={min}
          className={`w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:focus:ring-green-600 focus:border-transparent text-gray-900 dark:text-white transition-colors ${icon ? 'pl-10' : ''}`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export function Contact({ isDarkMode }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    cropType: '',
    message: '',
    preferredDateTime: '',
    purpose: ''
  });
  const [showDemo, setShowDemo] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    setShowDemo(false);
  };

  const minDateTime = () => {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset()); // ensure local ISO
    return now.toISOString().slice(0, 16);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@kropkraft.com',
      link: 'mailto:info@kropkraft.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 95734 87561',
      link: 'tel:+919573487561'
    },
    {
      icon: Globe,
      label: 'Website',
      value: 'www.kropkraftinnovations.com',
      link: 'https://www.kropkraftinnovations.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'PAN-India operations',
      link: null
    }
  ];

  const crops = [
    'Maize', 'Paddy', 'Red Chilli', 'Cotton', 'Turmeric', 'Sugarcane', 'Vegetables', 'Other'
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white dark:bg-gray-900 transition-colors duration-300 relative">
      <AnimatePresence>
        {showDemo && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-2xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 relative"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
            >
              <button
                onClick={() => setShowDemo(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
                aria-label="Close modal"
              >
                ×
              </button>
              <div className="mb-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm">
                  Request / Schedule Your Demo
                </div>
                <h3 className="text-2xl font-semibold mt-3 text-gray-900 dark:text-white">Book a session</h3>
                <p className="text-gray-600 dark:text-gray-400">Tell us when and where to meet you.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <InputField label="Name *" id="demo-name" name="name" value={formData.name} onChange={handleChange} required />
                  <InputField label="Contact *" id="demo-phone" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <InputField label="Email *" id="demo-email" name="email" value={formData.email} onChange={handleChange} required type="email" />
                  <InputField
                    label="Preferred Date & Time *"
                    id="preferredDateTime"
                    name="preferredDateTime"
                    type="datetime-local"
                    min={minDateTime()}
                    value={formData.preferredDateTime}
                    onChange={handleChange}
                    required
                    icon={<CalendarClock className="w-4 h-4 text-green-600" />}
                  />
                </div>
                <InputField label="Location *" id="demo-location" name="location" value={formData.location} onChange={handleChange} required placeholder="City, State" />
                <InputField label="Purpose *" id="purpose" name="purpose" value={formData.purpose} onChange={handleChange} required placeholder="Demo, purchase, training..." icon={<NotebookPen className="w-4 h-4 text-green-600" />} />
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-green-700 dark:bg-green-600 text-white rounded-lg hover:bg-green-800 dark:hover:bg-green-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group"
                >
                  <span>Schedule Demo</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
            <span className="text-green-700 dark:text-green-400">Get in Touch</span>
          </div>
          <h2 className="text-gray-900 dark:text-white mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Ready to transform your farming operations? Reach out to us for a free demo or any inquiries.
          </p>
          <div className="mt-6">
            <button
              onClick={() => setShowDemo(true)}
              className="px-6 py-3 bg-green-700 dark:bg-green-600 text-white rounded-lg hover:bg-green-800 dark:hover:bg-green-700 transition-all shadow-lg hover:shadow-xl"
            >
              Request / Schedule Your Demo
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Our team is here to help you make the right choice for your agricultural needs. Contact us through any of the channels below.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div 
                    key={index}
                    className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg flex-shrink-0">
                        <Icon className="w-6 h-6 text-green-700 dark:text-green-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                          {info.label}
                        </div>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-gray-900 dark:text-white hover:text-green-700 dark:hover:text-green-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-gray-900 dark:text-white">
                            {info.value}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1623211269755-569fec0536d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmYXJtZXIlMjBmaWVsZHxlbnwxfHx8fDE3NjUzNDE2NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Indian Farmer"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl text-gray-900 dark:text-white mb-6">
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <InputField
                label="Name *"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                />

              <div className="grid sm:grid-cols-2 gap-4">
                <InputField
                  label="Phone *"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                  />
                <InputField
                  label="Email *"
                    id="email"
                    name="email"
                  type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
              </div>

              <div>
                <InputField
                  label="Location *"
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City, State"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <InputField
                  label="Preferred Time *"
                  id="preferredDateTime"
                  name="preferredDateTime"
                  type="datetime-local"
                  min={minDateTime()}
                  required
                  value={formData.preferredDateTime}
                  onChange={handleChange}
                  icon={<CalendarClock className="w-4 h-4 text-green-600" />}
                />
                <InputField
                  label="Purpose *"
                  id="purpose"
                  name="purpose"
                  required
                  value={formData.purpose}
                  onChange={handleChange}
                  placeholder="Demo, purchase, training..."
                  icon={<NotebookPen className="w-4 h-4 text-green-600" />}
                />
              </div>

              <div>
                <label htmlFor="cropType" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Crop Type *
                </label>
                <select
                  id="cropType"
                  name="cropType"
                  required
                  value={formData.cropType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:focus:ring-green-600 focus:border-transparent text-gray-900 dark:text-white transition-colors"
                >
                  <option value="">Select your crop type</option>
                  {crops.map((crop) => (
                    <option key={crop} value={crop}>{crop}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:focus:ring-green-600 focus:border-transparent text-gray-900 dark:text-white transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-green-700 dark:bg-green-600 text-white rounded-lg hover:bg-green-800 dark:hover:bg-green-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
