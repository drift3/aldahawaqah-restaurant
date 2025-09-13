import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Clock, DollarSign } from 'lucide-react'

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('main')

  const categories = [
    { id: 'main', name: 'الأطباق الرئيسية', en: 'Main Dishes' },
    { id: 'appetizers', name: 'المقبلات', en: 'Appetizers' },
    { id: 'desserts', name: 'الحلويات', en: 'Desserts' },
    { id: 'drinks', name: 'المشروبات', en: 'Drinks' }
  ]

  const menuItems = {
    main: [
      {
        id: 1,
        name: 'كباب لحم مشوي',
        enName: 'Grilled Meat Kebab',
        description: 'قطع لحم مشوية بالتوابل الخاصة مع الخضار والأرز',
        price: '45',
        rating: 4.8,
        time: '25 دقيقة',
        image: '🥩',
        popular: true
      },
      {
        id: 2,
        name: 'دجاج مشوي بالأعشاب',
        enName: 'Herb Grilled Chicken',
        description: 'دجاج طازج مشوي بالأعشاب الطبيعية والليمون',
        price: '38',
        rating: 4.9,
        time: '20 دقيقة',
        image: '🍗'
      },
      {
        id: 3,
        name: 'سمك سلمون مقلي',
        enName: 'Pan-Fried Salmon',
        description: 'سمك السلمون الطازج مع صوص الزبدة والليمون',
        price: '55',
        rating: 4.7,
        time: '18 دقيقة',
        image: '🐟'
      }
    ],
    appetizers: [
      {
        id: 4,
        name: 'حمص بالطحينة',
        enName: 'Hummus with Tahini',
        description: 'حمص كريمي بالطحينة وزيت الزيتون',
        price: '15',
        rating: 4.6,
        time: '5 دقائق',
        image: '🫘'
      },
      {
        id: 5,
        name: 'سلطة فتوش',
        enName: 'Fattoush Salad',
        description: 'خضار طازجة مع الخبز المحمص والسماق',
        price: '18',
        rating: 4.5,
        time: '8 دقائق',
        image: '🥗'
      }
    ],
    desserts: [
      {
        id: 6,
        name: 'كنافة بالجبن',
        enName: 'Cheese Kanafeh',
        description: 'كنافة طازجة بالجبن والقطر',
        price: '22',
        rating: 4.9,
        time: '15 دقيقة',
        image: '🧀'
      },
      {
        id: 7,
        name: 'بقلاوة بالفستق',
        enName: 'Pistachio Baklava',
        description: 'بقلاوة محشوة بالفستق والعسل',
        price: '25',
        rating: 4.8,
        time: '10 دقائق',
        image: '🥜'
      }
    ],
    drinks: [
      {
        id: 8,
        name: 'شاي بالنعناع',
        enName: 'Mint Tea',
        description: 'شاي أخضر طازج بالنعناع الطبيعي',
        price: '8',
        rating: 4.4,
        time: '3 دقائق',
        image: '🍵'
      },
      {
        id: 9,
        name: 'عصير ليمون طازج',
        enName: 'Fresh Lemonade',
        description: 'عصير ليمون طبيعي بالنعناع والثلج',
        price: '12',
        rating: 4.6,
        time: '2 دقيقة',
        image: '🍋'
      }
    ]
  }

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-white to-gray-50">
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
            قائمة الطعام
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            اكتشف تشكيلة واسعة من الأطباق الشهية المحضرة بعناية فائقة
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {menuItems[activeCategory]?.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.03,
                  rotateY: 5,
                  rotateX: 5
                }}
                className="card-3d group relative"
              >
                {/* Popular Badge */}
                {item.popular && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute -top-3 -right-3 z-10"
                  >
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      الأكثر طلباً
                    </div>
                  </motion.div>
                )}

                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform-gpu">
                  {/* Food Image/Emoji */}
                  <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <motion.div
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="text-6xl group-hover:scale-110 transition-transform duration-300"
                    >
                      {item.image}
                    </motion.div>
                    
                    {/* Floating stars */}
                    {[1, 2, 3].map((star) => (
                      <motion.div
                        key={star}
                        animate={{ 
                          y: [0, -10, 0],
                          rotate: [0, 180, 360],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          delay: star * 0.5,
                          ease: "easeInOut"
                        }}
                        className={`absolute text-yellow-400 text-sm ${
                          star === 1 ? 'top-4 left-4' :
                          star === 2 ? 'top-8 right-8' :
                          'bottom-4 left-8'
                        }`}
                      >
                        ⭐
                      </motion.div>
                    ))}
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-dark mb-1">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500 english-text">
                          {item.enName}
                        </p>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="text-2xl font-bold gradient-text"
                      >
                        {item.price} ر.س
                      </motion.div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold">{item.rating}</span>
                      </div>
                      
                      <div className="flex items-center gap-1 text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{item.time}</span>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-xl font-semibold hover:from-secondary hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      إضافة للطلب
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(217, 119, 6, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary to-secondary text-white px-12 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            اطلع على القائمة الكاملة
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Menu