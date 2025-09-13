import React, { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text, Float, Sphere, Box, Cone } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

// 3D Chef Hat Component
function ChefHat({ position = [0, 0, 0] }) {
  const hatRef = useRef()
  
  useFrame((state) => {
    if (hatRef.current) {
      hatRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group ref={hatRef} position={position}>
      {/* Hat Base */}
      <Cone args={[0.8, 0.3, 8]} position={[0, -0.2, 0]}>
        <meshStandardMaterial color="#ffffff" />
      </Cone>
      {/* Hat Top */}
      <Cone args={[0.6, 1.5, 8]} position={[0, 0.5, 0]}>
        <meshStandardMaterial color="#ffffff" />
      </Cone>
    </group>
  )
}

// 3D Cooking Utensils
function CookingUtensils() {
  const utensilsRef = useRef()
  
  useFrame((state) => {
    if (utensilsRef.current) {
      utensilsRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <group ref={utensilsRef}>
      {/* Spoon */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <group position={[-2, 1, 0]}>
          <Box args={[0.1, 1.5, 0.05]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#8B4513" />
          </Box>
          <Sphere args={[0.2]} position={[0, 0.8, 0]}>
            <meshStandardMaterial color="#C0C0C0" />
          </Sphere>
        </group>
      </Float>

      {/* Fork */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
        <group position={[2, 0.5, 0]}>
          <Box args={[0.1, 1.2, 0.05]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#8B4513" />
          </Box>
          {[0, 1, 2].map((i) => (
            <Box key={i} args={[0.05, 0.4, 0.03]} position={[-0.1 + i * 0.1, 0.7, 0]}>
              <meshStandardMaterial color="#C0C0C0" />
            </Box>
          ))}
        </group>
      </Float>

      {/* Pan */}
      <Float speed={1} rotationIntensity={2} floatIntensity={1}>
        <group position={[0, -1, 1]}>
          <Cone args={[0.6, 0.2, 16]} rotation={[0, 0, 0]}>
            <meshStandardMaterial color="#2C2C2C" />
          </Cone>
          <Box args={[0.8, 0.1, 0.1]} position={[0.7, 0, 0]}>
            <meshStandardMaterial color="#2C2C2C" />
          </Box>
        </group>
      </Float>
    </group>
  )
}

// Main 3D Scene Component
function Scene() {
  const groupRef = useRef()
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.3
    }
  })

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#fbbf24" />
      
      {/* Main Group */}
      <group ref={groupRef}>
        <ChefHat position={[0, 2, 0]} />
        <CookingUtensils />
        
        {/* Central Cooking Flame Effect */}
        <Float speed={3} rotationIntensity={0} floatIntensity={3}>
          <group position={[0, -0.5, 0]}>
            {[0, 1, 2].map((i) => (
              <Cone 
                key={i} 
                args={[0.2 - i * 0.05, 0.5 + i * 0.2, 6]} 
                position={[0, i * 0.2, 0]}
                rotation={[0, (i * Math.PI) / 3, 0]}
              >
                <meshStandardMaterial 
                  color={i === 0 ? "#ff6b00" : i === 1 ? "#ffaa00" : "#ffdd00"} 
                  emissive={i === 0 ? "#ff4500" : i === 1 ? "#ff8c00" : "#ffd700"}
                  emissiveIntensity={0.5}
                />
              </Cone>
            ))}
          </group>
        </Float>
      </group>
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  )
}

const Chef3D = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-dark to-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="gradient-text">فن الطبخ</span>
              <br />
              في أبهى صوره
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              يجمع طهاتنا المهرة بين التقنيات التقليدية والحديثة لإبداع تحف فنية من الطعام 
              تسعد العين قبل أن تطرب الحواس.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { number: '15+', text: 'سنة خبرة' },
                { number: '50+', text: 'طبق مميز' },
                { number: '1000+', text: 'عميل راضي' },
                { number: '5', text: 'طهاة خبراء' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.text}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm"
                >
                  <div className="text-2xl font-bold text-accent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {stat.text}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              تعرف على فريقنا
            </motion.button>
          </motion.div>

          {/* 3D Scene */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative h-96 lg:h-[500px] w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl backdrop-blur-sm border border-white/10" />
            <Canvas
              camera={{ position: [0, 0, 8], fov: 50 }}
              className="rounded-3xl"
            >
              <Scene />
            </Canvas>
            
            {/* Floating UI Elements */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg"
            >
              <div className="text-2xl">👨‍🍳</div>
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -5, 5, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-4 left-4 bg-accent/90 backdrop-blur-sm rounded-full p-3 shadow-lg"
            >
              <div className="text-2xl">🔥</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Chef3D