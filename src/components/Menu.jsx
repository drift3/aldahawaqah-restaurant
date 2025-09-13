import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Clock, DollarSign, Heart } from 'lucide-react'

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('main')
  const [favorites, setFavorites] = useState([])

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
        name: 'مندي لحم',
        enName: 'Lamb Mandi',
        description: 'لحم ضاني طري مع أرز بالزعفران والتوابل الخاصة',
        price: '65',
        rating: 4.9,
        time: '35 دقيقة',
        image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        popular: true
      },
      {
        id: 2,
        name: 'مندي دجاج',
        enName: 'Chicken Mandi',
        description: 'دجاج طازج مشوي مع أرز بالزعفران والتوابل العربية',
        price: '45',
        rating: 4.8,
        time: '30 دقيقة',
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 3,
        name: 'كباب مشكل',
        enName: 'Mixed Kebab',
        description: 'تشكيلة من الكباب المشوي مع الخضار والأرز',
        price: '55',
        rating: 4.7,
        time: '25 دقيقة',
        image: 'https://images.unsplash.com/photo-1603496987351-f84a3ba5ec85?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        popular: true
      },
      {
        id: 4,
        name: 'محاشي ورق عنب',
        enName: 'Stuffed Grape Leaves',
        description: 'ورق عنب محشي بالأرز واللحمة والتوابل',
        price: '38',
        rating: 4.6,
        time: '20 دقيقة',
        image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      }
    ],
    appetizers: [
      {
        id: 11,
        name: 'حمص بالطحينة',
        enName: 'Hummus with Tahini',
        description: 'حمص طازج مع الطحينة وزيت الزيتون',
        price: '18',
        rating: 4.5,
        time: '5 دقائق',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 12,
        name: 'متبل باذنجان',
        enName: 'Eggplant Mutabal',
        description: 'باذنجان مشوي مع الطحينة والثوم',
        price: '22',
        rating: 4.4,
        time: '10 دقائق',
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 13,
        name: 'تبولة طازجة',
        enName: 'Fresh Tabbouleh',
        description: 'بقدونس وطماطم وبرغل مع عصير الليمون',
        price: '25',
        rating: 4.7,
        time: '8 دقائق',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 14,
        name: 'فتوش مشكل',
        enName: 'Mixed Fattoush',
        description: 'سلطة فتوش بالخضار الطازجة والخبز المحمص',
        price: '28',
        rating: 4.6,
        time: '10 دقائق',
        image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      }
    ],
    desserts: [
      {
        id: 21,
        name: 'بقلاوة بالفستق',
        enName: 'Pistachio Baklava',
        description: 'بقلاوة طازجة محشية بالفستق والعسل',
        price: '32',
        rating: 4.9,
        time: '5 دقائق',
        image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        popular: true
      },
      {
        id: 22,
        name: 'كنافة نابلسية',
        enName: 'Nabulsi Knafeh',
        description: 'كنافة طازجة بالجبنة والقطر',
        price: '35',
        rating: 4.8,
        time: '8 دقائق',
        image: 'https://images.unsplash.com/photo-1623428187425-5f9de6c4e8c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 23,
        name: 'مهلبية بالفستق',
        enName: 'Pistachio Muhallabia',
        description: 'مهلبية كريمية مع الفستق المطحون',
        price: '28',
        rating: 4.6,
        time: '5 دقائق',
        image: 'https://images.unsplash.com/photo-1562450965-c52b1cc51145?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 24,
        name: 'قطايف بالقشطة',
        enName: 'Qatayef with Cream',
        description: 'قطايف محشية بالقشطة والفستق',
        price: '30',
        rating: 4.7,
        time: '7 دقائق',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      }
    ],
    drinks: [
      {
        id: 31,
        name: 'شاي أحمر بالنعناع',
        enName: 'Mint Red Tea',
        description: 'شاي أحمر طازج بأوراق النعناع الطبيعي',
        price: '12',
        rating: 4.5,
        time: '3 دقائق',
        image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 32,
        name: 'قهوة عربية',
        enName: 'Arabic Coffee',
        description: 'قهوة عربية أصيلة بالهيل والزعفران',
        price: '15',
        rating: 4.8,
        time: '5 دقائق',
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        popular: true
      },
      {
        id: 33,
        name: 'عصير ليموناضة',
        enName: 'Fresh Lemonade',
        description: 'عصير ليمون طازج بالنعناع والسكر',
        price: '18',
        rating: 4.4,
        time: '2 دقيقة',
        image: 'https://images.unsplash.com/photo-1546173159-315724a31696?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 34,
        name: 'عصير مانجو طازج',
        enName: 'Fresh Mango Juice',
        description: 'عصير مانجو طبيعي 100% بدون إضافات',
        price: '22',
        rating: 4.7,
        time: '3 دقائق',
        image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      }
    ]
  }

  const toggleFavorite = (itemId) => {
    setFavorites(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    )
  }

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
            className="text-5xl font-bold mb-6 gradient-text"
          >
            قائمة الطعام
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            اكتشف تشكيلة واسعة من الأطباق الشهية المحضرة بأجود المكونات وأكثر الطرق إبداعاً
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
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
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group relative"
              >
                {/* Popular Badge */}
                {item.popular && (
                  <div className="absolute top-4 right-4 z-10 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                    الأكثر طلباً
                  </div>
                )}

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(item.id)}
                  className="absolute top-4 left-4 z-10 bg-white/80 hover:bg-white transition-colors duration-300 rounded-full p-2"
                >
                  <Heart 
                    className={`w-5 h-5 transition-colors duration-300 ${
                      favorites.includes(item.id) 
                        ? 'text-red-500 fill-current' 
                        : 'text-gray-400'
                    }`} 
                  />
                </button>

                {/* Food Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-gray-500 text-sm">{item.enName}</p>
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      {item.price} ر.س
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Rating and Time */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-medium">{item.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{item.time}</span>
                    </div>
                  </div>

                  {/* Order Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    إضافة للطلب
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(217, 119, 6, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg px-12 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            عرض القائمة كاملة
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Menu