import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Chef3D from './components/3d/Chef3D'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light to-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <div className="relative overflow-hidden">
          <Chef3D />
        </div>
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App