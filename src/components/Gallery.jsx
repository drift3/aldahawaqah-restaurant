import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Heart, Share2, Download, ZoomIn, Filter } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')
  const [favorites, setFavorites] = useState([])

  const filters = [
    { id: 'all', name: 'الكل', en: 'All' },
    { id: 'food', name: 'الأطباق', en: 'Food' },
    { id: 'restaurant', name: 'المطعم', en: 'Restaurant' },
    { id: 'events', name: 'المناسبات', en: 'Events' }
  ]

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'طبق مندي لحم شهي',
      category: 'food',
      title: 'مندي لحم أصيل',
      description: 'لحم ضاني طري مع أرز بالزعفران'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'أرز مندي بالدجاج',
      category: 'food',
      title: 'مندي دجاج طازج',
      description: 'دجاج مشوي مع الأرز العطر'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1603496987351-f84a3ba5ec85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'مشاوي طازجة',
      category: 'food',
      title: 'مشاوي مشكلة',
      description: 'تشكيلة كباب ولحم مشوي'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'مقبلات عربية متنوعة',
      category: 'food',
      title: 'مقبلات شرقية',
      description: 'تشكيلة من المقبلات الطازجة'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'أجواء المطعم الداخلية',
      category: 'restaurant',
      title: 'أجواء فاخرة',
      description: 'تصميم داخلي أنيق ومريح'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'طاولات المطعم',
      category: 'restaurant',
      title: 'قاعة الطعام',
      description: 'طاولات مريحة وإضاءة مثالية'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'حمص بالطحينة',
      category: 'food',
      title: 'حمص طازج',
      description: 'حمص كريمي بالطحينة والزيت'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'بقلاوة بالفستق',
      category: 'food',
      title: 'حلويات شرقية',
      description: 'بقلاوة طازجة بالفستق والعسل'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'قهوة عربية',
      category: 'food',
      title: 'قهوة أصيلة',
      description: 'قهوة عربية بالهيل والزعفران'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'أجواء المطعم الخارجية',
      category: 'restaurant',
      title: 'التراس الخارجي',
      description: 'جلسات خارجية بإطلالة رائعة'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'كنافة نابلسية',
      category: 'food',
      title: 'كنافة طازجة',
      description: 'كنافة بالجبنة والقطر العطر'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'مناسبة خاصة',
      category: 'events',
      title: 'احتفال عائلي',
      description: 'لحظات مميزة مع العائلة'
    }
  ]

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter)

  const toggleFavorite = (imageId) => {
    setFavorites(prev => 
      prev.includes(imageId) 
        ? prev.filter(id => id !== imageId)
        : [...prev, imageId]
    )
  }

  const openImage = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeImage = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
            معرض الصور
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            استكشف تشكيلة من أشهى الأطباق وأجواء المطعم الراقية من خلال معرض الصور التفاعلي
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2 text-gray-600 mb-4 md:mb-0">
            <Filter className="w-5 h-5" />
            <span className="font-medium">تصفية حسب:</span>
          </div>
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                style={{ aspectRatio: index % 5 === 0 ? '1/1.3' : '1/1' }}
                onClick={() => openImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4 left-4">
                    <h3 className="text-white font-bold text-lg mb-1">
                      {image.title}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      {image.description}
                    </p>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleFavorite(image.id)
                      }}
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300 rounded-full p-2"
                    >
                      <Heart 
                        className={`w-5 h-5 transition-colors ${
                          favorites.includes(image.id) 
                            ? 'text-red-400 fill-current' 
                            : 'text-white'
                        }`} 
                      />
                    </button>
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary to-secondary text-white font-bold px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300"
          >
            عرض المزيد من الصور
          </motion.button>
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeImage}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain rounded-2xl"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-200">
                  {selectedImage.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex gap-3">
                <button
                  onClick={() => toggleFavorite(selectedImage.id)}
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300 rounded-full p-3"
                >
                  <Heart 
                    className={`w-6 h-6 transition-colors ${
                      favorites.includes(selectedImage.id) 
                        ? 'text-red-400 fill-current' 
                        : 'text-white'
                    }`} 
                  />
                </button>
                <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300 rounded-full p-3">
                  <Share2 className="w-6 h-6 text-white" />
                </button>
                <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300 rounded-full p-3">
                  <Download className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={closeImage}
                className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300 rounded-full p-3"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery