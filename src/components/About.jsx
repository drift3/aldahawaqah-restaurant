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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            رحلة طعام أصيلة تجمع بين التراث والحداثة في كل طبق نقدمه
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-dark mb-6">
                قصة مطعم الذواقة
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  منذ عام 2010، نحن نقدم أفضل الأطباق العربية والشرق أوسطية 
                  بجودة عالية وأسعار مناسبة. رحلتنا بدأت بحلم بسيط: تقديم الطعام 
                  الأصيل الذي يجمع العائلة والأصدقاء حول مائدة واحدة.
                </p>
                <p>
                  نفتخر بكوننا من أوائل المطاعم التي تجمع بين الأصالة والحداثة، 
                  حيث نحافظ على الوصفات التراثية ونضيف إليها لمسات عصرية تناسب 
                  ذوق العصر الحالي.
                </p>
                <p>
                  اليوم، نخدم آلاف العملاء الذين يثقون بنا ويختارونا لمناسباتهم 
                  الخاصة، ونستمر في السعي لتطوير خدماتنا وتقديم تجربة طعام لا تُنسى.
                </p>
              </div>
            </div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-6 py-8 border-t border-gray-200"
            >
              {[
                { number: '15+', label: 'سنة خبرة' },
                { number: '50K+', label: 'عميل راضي' },
                { number: '200+', label: 'طبق متنوع' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-3xl font-bold gradient-text mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Restaurant Images Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Main large image */}
              <motion.div
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="col-span-2 relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="أجواء المطعم الداخلية"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 right-4 text-white">
                  <h4 className="text-lg font-bold">أجواء فاخرة</h4>
                  <p className="text-sm opacity-90">تصميم أنيق ومريح</p>
                </div>
              </motion.div>
              
              {/* Smaller images */}
              <motion.div
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="قاعة الطعام"
                  className="w-full h-32 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-2 right-2 text-white text-xs">
                  <p className="font-semibold">قاعة الطعام</p>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="التراس الخارجي"
                  className="w-full h-32 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-2 right-2 text-white text-xs">
                  <p className="font-semibold">التراس الخارجي</p>
                </div>
              </motion.div>
            </div>

            {/* Chef Badge */}
            <motion.div
              animate={{ 
                y: [0, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-6 -left-6 bg-white rounded-full p-4 shadow-xl border-4 border-primary/20"
            >
              <div className="text-center">
                <div className="text-2xl mb-1">👨‍🍳</div>
                <p className="text-xs font-bold text-primary">شيف محترف</p>
              </div>
            </motion.div>

            {/* Quality Badge */}
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary to-secondary rounded-full p-3 shadow-xl"
            >
              <div className="text-center text-white">
                <div className="text-lg mb-1">⭐</div>
                <p className="text-xs font-bold">جودة عالية</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
              className="bg-white rounded-3xl p-8 text-center shadow-lg border border-gray-100 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} mb-6`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-dark mb-3 group-hover:gradient-text transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(217, 119, 6, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            احجز طاولتك الآن
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default About