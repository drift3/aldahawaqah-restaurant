import React from 'react'
import { motion } from 'framer-motion'
import { 
  ChefHat, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Twitter,
  Instagram,
  MessageCircle,
  Heart,
  ArrowUp
} from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    services: [
      { name: 'حجز الطاولات', href: '#booking' },
      { name: 'خدمة التوصيل', href: '#delivery' },
      { name: 'المناسبات الخاصة', href: '#events' },
      { name: 'الطلبات المسبقة', href: '#preorder' }
    ],
    menu: [
      { name: 'الأطباق الرئيسية', href: '#menu' },
      { name: 'المقبلات', href: '#appetizers' },
      { name: 'الحلويات', href: '#desserts' },
      { name: 'المشروبات', href: '#drinks' }
    ],
    info: [
      { name: 'عن المطعم', href: '#about' },
      { name: 'فريق العمل', href: '#team' },
      { name: 'شهادات الجودة', href: '#certificates' },
      { name: 'الوظائف', href: '#careers' }
    ]
  }

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', color: '#1877f2', href: '#' },
    { icon: Twitter, name: 'Twitter', color: '#1da1f2', href: '#' },
    { icon: Instagram, name: 'Instagram', color: '#e4405f', href: '#' },
    { icon: MessageCircle, name: 'WhatsApp', color: '#25d366', href: '#' }
  ]

  return (
    <footer className="bg-gradient-to-br from-dark via-gray-900 to-black text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            animate={{ 
              rotate: 360,
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2
            }}
            className={`absolute w-32 h-32 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 blur-xl`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Restaurant Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <ChefHat className="h-10 w-10 text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold gradient-text">
                    مطعم الذواقة
                  </h3>
                  <p className="text-gray-400 text-sm">
                    نكهات أصيلة، تجربة استثنائية
                  </p>
                </div>
              </motion.div>
              
              <p className="text-gray-300 leading-relaxed">
                منذ عام 2010، نقدم أشهى الأطباق العربية والعالمية بجودة عالية 
                وخدمة متميزة في أجواء راقية تناسب جميع المناسبات.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {[
                  { icon: Phone, text: '+966 11 234 5678' },
                  { icon: Mail, text: 'info@aldhawaqah.com' },
                  { icon: MapPin, text: 'الرياض، المملكة العربية السعودية' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6 text-white">
                خدماتنا
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <motion.li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 10, color: '#d97706' }}
                      className="text-gray-400 hover:text-primary transition-all duration-300 text-sm block"
                    >
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6 text-white">
                القائمة
              </h4>
              <ul className="space-y-3">
                {footerLinks.menu.map((link, index) => (
                  <motion.li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 10, color: '#d97706' }}
                      className="text-gray-400 hover:text-primary transition-all duration-300 text-sm block"
                    >
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Info & Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h4 className="text-xl font-bold mb-6 text-white">
                  معلومات إضافية
                </h4>
                <ul className="space-y-3">
                  {footerLinks.info.map((link, index) => (
                    <motion.li key={link.name}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 10, color: '#d97706' }}
                        className="text-gray-400 hover:text-primary transition-all duration-300 text-sm block"
                      >
                        {link.name}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h5 className="text-lg font-bold mb-4 text-white">
                  اشترك في النشرة الإخبارية
                </h5>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="بريدك الإلكتروني"
                    className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary hover:bg-secondary px-4 py-2 rounded-lg transition-colors duration-300"
                  >
                    <Mail className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Working Hours & Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-white/10 mt-12 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Working Hours */}
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-semibold text-white">أوقات العمل</p>
                  <p className="text-gray-400 text-sm">يومياً: 11:00 ص - 12:00 ص</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm">تابعنا:</span>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      backgroundColor: social.color
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:border-transparent transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-gray-400 text-sm flex items-center gap-2"
              >
                © 2024 مطعم الذواقة. جميع الحقوق محفوظة
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              </motion.p>

              <div className="flex items-center gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-primary transition-colors duration-300">
                  سياسة الخصوصية
                </a>
                <a href="#" className="hover:text-primary transition-colors duration-300">
                  الشروط والأحكام
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ 
            scale: 1.1,
            backgroundColor: '#d97706'
          }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 w-14 h-14 bg-primary/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 z-50"
          style={{ display: 'flex' }}
        >
          <ArrowUp className="w-6 h-6 text-white" />
        </motion.button>
      </div>
    </footer>
  )
}

export default Footer