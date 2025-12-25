import {
  Mail,
  Phone,
  Globe,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube
} from 'lucide-react';
import logo from 'figma:asset/999f7d87dcd4c7523b3fa732ceafd6b9ae0a089a.png';

interface FooterProps {
  isDarkMode: boolean;
}

export function Footer({ isDarkMode }: FooterProps) {
  const quickLinks = [
    'Home',
    'Why Agri Drones',
    'Krishak 2I Drone',
    'Benefits',
    'Training & Support',
    'Contact'
  ];

  const services = [
    'Drone Spraying',
    'Drone Sales',
    'Pilot Training',
    'DGCA Certification',
    'Farm Automation',
    'Service & Support'
  ];

  const resources = [
    'Download Brochure',
    'Product Specifications',
    'Training Schedule',
    'FAQs',
    'Blog',
    'Case Studies'
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', link: '#' },
    { icon: Twitter, label: 'Twitter', link: '#' },
    { icon: Linkedin, label: 'LinkedIn', link: '#' },
    { icon: Instagram, label: 'Instagram', link: '#' },
    { icon: Youtube, label: 'YouTube', link: '#' }
  ];

  const contactDetails = [
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
      value: 'www.kropkraft.com',
      link: 'https://www.kropkraft.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'PAN-India operations',
      link: null
    }
  ];

  const scrollToSection = (item: string) => {
    const sectionId = item
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace('&', 'and');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-green-700 dark:bg-green-700 transition-colors duration-300">
      
      <div className="absolute inset-0 bg-black/15" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-100">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <img src={logo} alt="KropKraft Innovations" className="h-12 mb-6" />
              <p className="text-gray-100 font-semibold mb-4">
                Revolutionizing Indian agriculture with cutting-edge drone
                technology. Providing complete farm automation solutions
                optimized for Indian farming conditions.
              </p>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      aria-label={social.label}
                      className="bg-green-800/70 p-2 rounded-lg hover:bg-green-900 transition-colors"
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link)}
                      className="text-gray-100 hover:text-green-200 transition-colors font-semibold"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-100 hover:text-green-200 transition-colors font-semibold"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-100 hover:text-green-200 transition-colors font-semibold"
                    >
                      {resource}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Connect Section */}
          <div className="mt-12 pt-8 border-t border-green-400/40">
            <h3 className="text-white mb-6 font-bold text-lg">
              Connect With Us
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactDetails.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-green-800 p-2 rounded-lg flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold mb-1">
                        {detail.label}
                      </div>
                      {detail.link ? (
                        <a
                          href={detail.link}
                          className="text-gray-100 hover:text-green-200 transition-colors font-semibold"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <div className="text-gray-100 font-semibold">
                          {detail.value}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-green-400/40">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-green-100 font-bold text-sm">
              © {new Date().getFullYear()} KropKraft Innovations. All rights
              reserved.
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'].map(
                (item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-green-100 hover:text-green-200 transition-colors font-bold"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
