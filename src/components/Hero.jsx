import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Star, MapPin, Clock } from 'lucide-react'

const Hero = () => {
  const stats = [
    { icon: Star, value: '4.9', label: 'تقييم العملاء', en: 'Customer Rating' },
    { icon: MapPin, value: '3', label: 'فروع', en: 'Locations' },
    { icon: Clock, value: '24/7', label: 'خدمة', en: 'Service' }
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-bg opacity-90"></div>
      
      {/* Animated background shapes */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-10 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl"
      />
      
      <motion.div
        animate={{ 
          rotate: -360,
          scale: [1.2, 1, 1.2]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 left-20 w-48 h-48 bg-white/10 rounded-full blur-2xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              مطعم
              <span className="block text-accent"> الذواقة</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed"
            >
              استمتع بأفضل الأطباق الشرقية والعالمية في أجواء راقية مع خدمة متميزة
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300"
              >
                اطلع على القائمة
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300"
              >
                احجز طاولة الآن
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="bg-white/20 p-3 rounded-full">
                    <stat.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* 3D Food Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              {/* Placeholder for food image - you can replace with actual image */}
              <div className="w-full h-96 bg-gradient-to-br from-accent/30 to-white/20 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="text-6xl"
                >
                  🍽️
                </motion.div>
              </div>
              
              {/* Floating elements around the main image */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -top-10 -left-10 text-4xl"
              >
                🥘
              </motion.div>
              
              <motion.div
                animate={{ 
                  rotate: -360,
                  scale: [1.2, 1, 1.2]
                }}
                transition={{ 
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -bottom-5 -right-5 text-3xl"
              >
                🍖
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-sm mb-2">اكتشف المزيد</span>
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero