'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaHeart, FaQuoteLeft } from 'react-icons/fa'
import AOS from 'aos'

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-300/30 to-pink-300/30 backdrop-blur-sm"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-purple-900 mb-6 font-['Dancing_Script']">
            Feliz Día de la Mujer
          </h1>
          <p className="text-2xl md:text-3xl text-purple-800 font-['Playfair_Display'] italic">
            Para la mujer más especial de mi vida
          </p>
        </motion.div>
      </section>

      {/* Message Section */}
      <section className="py-20 bg-white/80">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <FaQuoteLeft className="text-4xl text-pink-500 mx-auto mb-6" />
            <p className="text-xl md:text-2xl text-gray-700 font-['Playfair_Display'] italic leading-relaxed">
              "En este día tan especial, quiero celebrar no solo tu condición de mujer,
              sino todo lo que eres: tu fuerza, tu dulzura, tu determinación y tu amor infinito.
              Eres mi inspiración diaria y la razón de mis sonrisas."
            </p>
          </div>
        </div>
      </section>

      {/* Qualities Section */}
      <section className="py-20 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl text-center text-purple-800 font-['Dancing_Script'] mb-12" data-aos="fade-up">
            Lo que te hace única
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Tu Fortaleza', desc: 'Admiro cómo enfrentas cada desafío con determinación y valentía' },
              { title: 'Tu Bondad', desc: 'Tu corazón generoso ilumina la vida de todos los que te rodean' },
              { title: 'Tu Belleza', desc: 'No solo exterior, sino la que emana de tu alma y personalidad' },
            ].map((quality, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <FaHeart className="text-3xl text-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-purple-800 mb-2">{quality.title}</h3>
                <p className="text-gray-600">{quality.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Love Note Section */}
      <section className="py-20 bg-white/80">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-gradient-to-r from-pink-100 to-purple-100 p-8 rounded-lg shadow-xl"
          >
            <h2 className="text-3xl font-['Dancing_Script'] text-purple-800 mb-6">
              Mi Promesa Para Ti
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Prometo estar siempre a tu lado, celebrar tus logros, apoyarte en los momentos difíciles,
              y recordarte cada día lo especial que eres. Tu felicidad es mi felicidad, y tu sonrisa
              ilumina mi mundo.
            </p>
            <div className="mt-6">
              <FaHeart className="text-4xl text-pink-500 mx-auto animate-pulse" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-8">
        <div className="text-center">
          <p className="font-['Dancing_Script'] text-2xl">Con todo mi amor ❤️</p>
        </div>
      </footer>
    </main>
  )
} 