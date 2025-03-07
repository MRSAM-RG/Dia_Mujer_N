'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-100 via-purple-50 to-pink-100">
      {/* Elementos decorativos flotantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {['❤️', '✨', '🌸', '💖', '💝'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto text-center p-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl font-bold mb-6 text-pink-600 animate-fade-in">
            Feliz Día de la Mujer
          </h1>
          
          <p className="text-2xl mb-8 text-gray-700 italic animate-pulse">
            Para el amor de mi vida... ❤️
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-pink-200"
          >
            <h2 className="text-2xl font-semibold mb-6 text-purple-600">Razones por las que te amo</h2>
            <ul className="text-left space-y-4 text-gray-700">
              <motion.li
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-2"
              >
                <span className="text-pink-500">💖</span>
                <span>Tu increible forma de ser</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center space-x-2"
              >
                <span className="text-pink-500">💫</span>
                <span>El amor que demuestras</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center space-x-2"
              >
                <span className="text-pink-500">🌟</span>
                <span>Tu belleza interior y exterior</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="flex items-center space-x-2"
              >
                <span className="text-pink-500">✨</span>
                <span>La forma en que me tratas</span>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-pink-200"
          >
            <h2 className="text-2xl font-semibold mb-6 text-purple-600">Mi promesa de amor</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
              Te amaré todo el tiempo que me lo permitas, y por eso valoro cada pequeño momento a tu lado. 
              Quiero aprovechar cada instante para demostrarte cuánto te quiero y lo importante que eres para mí.
              </p>
              <div className="mt-4 flex justify-center">
                <span className="text-3xl animate-bounce">💑</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-pink-200 max-w-2xl mx-auto"
        >
          <h2 className="text-2xl font-semibold mb-6 text-pink-600">Mensaje desde mi corazón</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
          Aunque enfrentemos problemas y desafíos, mi amor por ti nunca cambiará. Las dificultades pueden aparecer, pero siempre estaré a tu lado,
          amándote y luchando por lo nuestro. Pase lo que pase, quiero que sepas que te amo.
          A veces, algunas cosas pueden molestarme, pero eso no significa que mi amor se vea afectado. Solo cambiaría si llegara a haber un error tan 
          grande que me hiciera reconsiderarlo. Pero por mi parte, ten la certeza de que jamás haría algo que pudiera arruinar lo que hemos construido juntos.<br />
          Te amo con todo mi corazon y espero que tambien sientas lo mismo.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex justify-center space-x-2">
              <span className="text-3xl animate-pulse">❤️</span>
              <span className="text-3xl animate-pulse delay-100">❤️</span>
              <span className="text-3xl animate-pulse delay-200">❤️</span>
            </div>
            <p className="text-xl font-semibold text-purple-600 mt-4">
              Te amo con todo mi corazón
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
