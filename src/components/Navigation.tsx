import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import logo from 'figma:asset/999f7d87dcd4c7523b3fa732ceafd6b9ae0a089a.png';

interface NavigationProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

type DropdownItem = { label: string; targetId: string };

type MenuItem =
  | { label: string; onClick: () => void; dropdown?: never; targetId?: never }
  | { label: string; dropdown: DropdownItem[]; onClick?: never; targetId?: never };

export function Navigation({ isDarkMode, toggleTheme }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [brochureOpen, setBrochureOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const navRef = useRef<HTMLDivElement | null>(null);

  const closeAll = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
    setBrochureOpen(false);
  };

  const menuItems: MenuItem[] = [
    {
      label: 'Home',
      onClick: () => {
        if (location.pathname !== '/') {
          navigate('/');
          setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        closeAll();
      }
    },
    {
      label: 'About Us',
      onClick: () => {
        window.location.href = '/about.html';
        closeAll();
      }
    },
    {
      label: 'Drones',
      dropdown: [
        { label: 'Benefits', targetId: 'benefits' },
        { label: 'Uses', targetId: 'applications' }
      ]
    },
    {
      label: 'Services',
      onClick: () => {
        navigate('/services');
        closeAll();
      }
    },
    {
      label: 'Contact Us',
      onClick: () => {
        navigate('/contact');
        closeAll();
      }
    }
  ];

  const scrollTo = (id: string) => {
    const doScroll = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      closeAll();
    };

    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      setTimeout(doScroll, 180);
    } else {
      doScroll();
    }
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      window.location.href = '/';
    } else {
      window.location.reload();
    }
  };

  // 1) Close menus on outside click + ESC
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        closeAll();
      }
    };

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeAll();
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keyup', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keyup', handleEsc);
    };
  }, []);

  // 2) Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // 3) Close menu on resize to desktop (rotation / resize edge case)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        setBrochureOpen(false);
        setOpenDropdown(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div ref={navRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={handleLogoClick} className="flex items-center" aria-label="Go home" type="button">
            <img src={logo} alt="KropKraft Innovations" className="h-16 w-auto" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10 2xl:gap-12 text-lg">
            {menuItems.map((item) =>
              'dropdown' in item ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <motion.button
                    type="button"
                    onClick={() => setOpenDropdown((prev) => (prev === item.label ? null : item.label))}
                    className="inline-flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-500 transition-colors"
                  >
                    {item.label}
                    <motion.span
                      animate={{ rotate: openDropdown === item.label ? 180 : 0 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.span>
                  </motion.button>

                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                        className="absolute left-0 mt-3 w-48 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg p-2 space-y-1"
                      >
                        {item.dropdown.map((opt) => (
                          <button
                            key={opt.label}
                            onClick={() => scrollTo(opt.targetId)}
                            className="w-full text-left px-3 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-gray-800 transition-colors"
                            type="button"
                          >
                            {opt.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className="text-gray-700 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-500 transition-colors"
                  type="button"
                >
                  {item.label}
                </button>
              )
            )}
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
              type="button"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Desktop CTA group */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Brochure Dropdown (Desktop) */}
              <div className="relative">
                <button
                  onClick={() => setBrochureOpen((prev) => !prev)}
                  className="px-4 py-2 text-green-700 dark:text-green-400 border border-green-700 dark:border-green-500 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors font-medium"
                  type="button"
                >
                  Download Brochure
                </button>

                <AnimatePresence>
                  {brochureOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                      className="absolute right-0 mt-2 w-56 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg z-50 overflow-hidden"
                    >
                      <a
                        href="/brochures/kropkraft-brochure-en.pdf"
                        download
                        onClick={() => setBrochureOpen(false)}
                        className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
                      >
                        English Brochure (PDF)
                      </a>
                      <a
                        href="/brochures/kropkraft-brochure-hi.pdf"
                        download
                        onClick={() => setBrochureOpen(false)}
                        className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
                      >
                        Hindi Brochure (PDF)
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Request Demo */}
              <button
                onClick={() => scrollTo('contact')}
                className="px-6 py-2 bg-green-700 dark:bg-green-600 text-white rounded-lg hover:bg-green-800 dark:hover:bg-green-700 transition-colors shadow-md hover:shadow-lg"
                type="button"
              >
                Request a Free Demo
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 lg:hidden"
              aria-label="Toggle menu"
              type="button"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-800 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="flex flex-col space-y-3">
              {menuItems.map((item) =>
                'dropdown' in item ? (
                  <div key={item.label} className="space-y-2">
                    <button
                      onClick={() => setOpenDropdown((prev) => (prev === item.label ? null : item.label))}
                      className="w-full flex items-center justify-between text-left px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      type="button"
                    >
                      <span>{item.label}</span>
                      <motion.span
                        animate={{ rotate: openDropdown === item.label ? 180 : 0 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                          className="mx-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm overflow-hidden"
                        >
                          {item.dropdown.map((opt) => (
                            <button
                              key={opt.label}
                              onClick={() => scrollTo(opt.targetId)}
                              className="w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-800 transition-colors"
                              type="button"
                            >
                              {opt.label}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <button
                    key={item.label}
                    onClick={item.onClick}
                    className="text-left px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    type="button"
                  >
                    {item.label}
                  </button>
                )
              )}

              {/* Mobile CTA area */}
              <div className="px-4 pt-3 mt-2 border-t border-gray-200 dark:border-gray-800 flex flex-col gap-3">
                {/* Brochure Dropdown (Mobile) */}
                <div className="relative">
                  <button
                    onClick={() => setBrochureOpen((prev) => !prev)}
                    className="w-full text-left px-4 py-3 text-green-700 dark:text-green-400 border border-green-700 dark:border-green-500 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors font-medium"
                    type="button"
                  >
                    Download Brochure
                  </button>

                  <AnimatePresence>
                    {brochureOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                        className="mt-2 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg overflow-hidden"
                      >
                        <a
                          href="/brochures/kropkraft-brochure-en.pdf"
                          download
                          onClick={() => {
                            setBrochureOpen(false);
                            closeAll();
                          }}
                          className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
                        >
                          English Brochure (PDF)
                        </a>
                        <a
                          href="/brochures/kropkraft-brochure-hi.pdf"
                          download
                          onClick={() => {
                            setBrochureOpen(false);
                            closeAll();
                          }}
                          className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
                        >
                          Hindi Brochure (PDF)
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  onClick={() => {
                    scrollTo('contact');
                    closeAll();
                  }}
                  className="w-full px-6 py-3 bg-green-700 dark:bg-green-600 text-white rounded-lg hover:bg-green-800 dark:hover:bg-green-700 transition-colors shadow-md"
                  type="button"
                >
                  Request a Free Demo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
