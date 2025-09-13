import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const galleryItems = [
    {
      id: 1,
      emoji: '🥘',
      title: 'أطباق شرقية أصيلة',
      description: 'تشكيلة من الأطباق التراثية المحضرة بعناية',
      category: 'أطباق رئيسية'
    },
    {
      id: 2,
      emoji: '🍖',
      title: 'لحوم مشوية فاخرة',
      description: 'أجود أنواع اللحوم المشوية على الفحم',
      category: 'شوي'
    },
    {
      id: 3,
      emoji: '🥗',
      title: 'سلطات طازجة',
      description: 'خضار ورقية طازجة مع صلصات مميزة',
      category: 'سلطات'
    },
    {
      id: 4,
      emoji: '🍰',
      title: 'حلويات شرقية',
      description: 'حلويات تراثية بنكهات أصيلة',
      category: 'حلويات'
    },
    {
      id: 5,
      emoji: '🍵',
      title: 'مشروبات ساخنة',
      description: 'تشكيلة من الشاي والقهوة العربية',
      category: 'مشروبات'
    },
    {
      id: 6,
      emoji: '🥙',
      title: 'مقبلات متنوعة',
      description: 'مجموعة رائعة من المقبلات الشهية',
      category: 'مقبلات'
    }
  ]

  const openModal = (index) => {
    setCurrentIndex(index)
    setSelectedImage(galleryItems[index])
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryItems.length
    setCurrentIndex(nextIndex)
    setSelectedImage(galleryItems[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1
    setCurrentIndex(prevIndex)
    setSelectedImage(galleryItems[prevIndex])
  }

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <Camera className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              معرض الصور
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            استمتع بمشاهدة تشكيلة من أشهى الأطباق وأجمل اللحظات في مطعمنا
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5
              }}
              onClick={() => openModal(index)}
              className="card-3d group cursor-pointer"
            >
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Image Container */}
                <div className="relative h-64 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 flex items-center justify-center overflow-hidden">
                  {/* Animated Background Pattern */}
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
                    className="absolute inset-0 opacity-20"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-primary to-secondary transform rotate-12 scale-150" />
                  </motion.div>
                  
                  {/* Main Food Emoji */}
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="relative z-10 text-8xl group-hover:scale-110 transition-transform duration-300"
                  >
                    {item.emoji}
                  </motion.div>
                  
                  {/* Floating Decorative Elements */}
                  {[1, 2, 3].map((particle) => (
                    <motion.div
                      key={particle}
                      animate={{ 
                        y: [0, -20, 0],
                        x: [0, particle * 5, -particle * 5, 0],
                        rotate: [0, 360],
                        opacity: [0.3, 1, 0.3]
                      }}
                      transition={{ 
                        duration: 3 + particle,
                        repeat: Infinity,
                        delay: particle * 0.5,
                        ease: "easeInOut"
                      }}
                      className={`absolute text-2xl ${
                        particle === 1 ? 'top-4 right-4' :
                        particle === 2 ? 'bottom-6 left-6' :
                        'top-12 left-12'
                      }`}
                    >
                      {particle === 1 ? '✨' : particle === 2 ? '🌟' : '💫'}
                    </motion.div>
                  ))}

                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/20 flex items-center justify-center"
                  >
                    <div className="text-white text-lg font-semibold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      انقر للتكبير
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-dark">
                      {item.title}
                    </h3>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(217, 119, 6, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary to-secondary text-white px-12 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <Camera className="w-6 h-6" />
            عرض المزيد من الصور
          </motion.button>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-4xl mx-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <div className="h-96 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-9xl">
                  {selectedImage.emoji}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-dark">
                    {selectedImage.title}
                  </h3>
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
                    {selectedImage.category}
                  </span>
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery