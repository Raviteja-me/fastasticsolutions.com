import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

const navItems = [
  { title: 'About', path: '/about' },
  { title: 'Services', path: 'https://ravitejabeere.me/services' },
  { title: 'Pro Apps', path: '/pro-apps' },
  { title: 'Apps', path: 'https://ravitejabeere.me/showcase' },
  { title: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (path: string) => {
    if (path.startsWith('http')) {
      window.location.href = path;
    } else {
      navigate(path);
    }
    setIsOpen(false);
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full z-50 px-4 md:px-6 py-4 bg-[#0a0014]/80 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.button
              key={item.title}
              onClick={() => handleNavigation(item.path)}
              className="text-white hover:text-purple-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.title}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0014] absolute left-0 right-0 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.title}
                  onClick={() => handleNavigation(item.path)}
                  className="block w-full text-left text-white hover:text-purple-400 transition-colors py-2"
                  whileTap={{ scale: 0.95 }}
                >
                  {item.title}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;