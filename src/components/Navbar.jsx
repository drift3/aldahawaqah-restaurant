import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChefHat } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'الرئيسية', href: '#home', en: 'Home' },
    { name: 'عن المطعم', href: '#about', en: 'About' },
    { name: 'القائمة', href: '#menu', en: 'Menu' },
    { name: 'معرض الصور', href: '#gallery', en: 'Gallery' },
    { name: 'تواصل معنا', href: '#contact', en: 'Contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 space-x-reverse"
          >
            <ChefHat className="h-8 w-8 text-primary" />
            <div className="text-xl font-bold gradient-text">
              مطعم الذواقة
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8 space-x-reverse">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-dark hover:text-primary transition-colors duration-300 font-medium"
                  onClick={() => {
                    document.querySelector(item.href)?.scrollIntoView({
                      behavior: 'smooth'
                    })
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-secondary transition-colors duration-300"
              >
                احجز طاولة
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ x: 10 }}
                  className="block px-3 py-2 text-dark hover:text-primary hover:bg-gray-50 transition-all duration-300 font-medium"
                  onClick={() => {
                    setIsOpen(false)
                    document.querySelector(item.href)?.scrollIntoView({
                      behavior: 'smooth'
                    })
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button
                whileHover={{ x: 10 }}
                className="w-full text-right bg-primary text-white px-3 py-2 font-medium hover:bg-secondary transition-colors duration-300"
              >
                احجز طاولة
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar