import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Heart, Sparkles } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'جودة عالية',
      description: 'نستخدم أفضل المكونات الطازجة',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Users,
      title: 'فريق محترف',
      description: 'طهاة خبراء وطاقم خدمة متميز',
      color: 'from-blue-400 to-purple-500'
    },
    {
      icon: Heart,
      title: 'طعم أصيل',
      description: 'وصفات تراثية بلمسة عصرية',
      color: 'from-pink-400 to-red-500'
    },
    {
      icon: Sparkles,
      title: 'تجربة فريدة',
      description: 'أجواء راقية وخدمة استثنائية',
      color: 'from-green-400 to-teal-500'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold gradient-text mb-4"
          >
            عن مطعم الذواقة
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            رحلة طهي استثنائية تجمع بين النكهات الأصيلة والحداثة، حيث يلتقي التراث بالإبداع
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-dark mb-6"
            >
              قصتنا
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              منذ عام 2010، نقدم في مطعم الذواقة تجربة طعام لا تُنسى. بدأت رحلتنا كحلم صغير 
              في قلب المدينة، ونمت لتصبح وجهة مفضلة لعشاق الطعام الأصيل.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              نحن نؤمن بأن الطعام ليس مجرد وجبة، بل تجربة تجمع القلوب وتخلق الذكريات الجميلة. 
              كل طبق نقدمه يحكي قصة من التراث والشغف.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 pt-4"
            >
              <div className="flex -space-x-2 -space-x-reverse">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary border-4 border-white shadow-lg"
                  />
                ))}
              </div>
              <div>
                <p className="font-semibold text-dark">فريقنا من الطهاة</p>
                <p className="text-gray-600">خبرة تزيد عن 15 عاماً</p>
              </div>
            </motion.div>
          </motion.div>

          {/* 3D Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              animate={{ 
                rotateY: [0, 15, -15, 0],
                rotateX: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative perspective-1000"
            >
              <div className="w-full h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl backdrop-blur-sm border border-white/20 shadow-2xl transform-gpu">
                <div className="absolute inset-0 flex items-center justify-center text-8xl">
                  👨‍🍳
                </div>
                
                {/* Floating cooking elements */}
                {[
                  { emoji: '🔥', position: 'top-4 left-4', delay: 0 },
                  { emoji: '✨', position: 'top-4 right-4', delay: 1 },
                  { emoji: '🌟', position: 'bottom-4 left-4', delay: 2 },
                  { emoji: '💫', position: 'bottom-4 right-4', delay: 3 }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, rotate: 0 }}
                    animate={{ 
                      scale: [0, 1.2, 1],
                      rotate: [0, 180, 360],
                      y: [0, -10, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      delay: item.delay,
                      ease: "easeInOut"
                    }}
                    className={`absolute ${item.position} text-2xl`}
                  >
                    {item.emoji}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                rotateX: 5
              }}
              className="card-3d group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform-gpu">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h4 className="text-xl font-bold text-dark mb-4 text-center">
                  {feature.title}
                </h4>
                
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About