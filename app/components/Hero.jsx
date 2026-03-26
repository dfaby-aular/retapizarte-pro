"use client";

import { motion } from "framer-motion";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center relative overflow-hidden">
      
      {/* Fondo */}
      <div className="absolute inset-0 bg-[url('/images/tapiceria.jpg')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Contenido */}
      <div className="relative z-10 max-w-2xl px-4">
        
        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-display text-white font-bold leading-tight"
        >
          Transformamos tus muebles <br /> en piezas únicas
        </motion.h1>

        {/* Subtexto */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-white mt-4 opacity-90 text-lg"
        >
          Retapizados premium que hacen que tu casa se sienta nueva otra vez
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8"
        >
          <Button href="https://wa.me/5491168851939">
            Pedí tu presupuesto gratis
          </Button>
        </motion.div>

        {/* Mini prueba social */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-white/70 text-sm mt-4"
        >
          +100 muebles restaurados • Clientes felices en Buenos Aires
        </motion.p>

      </div>
    </section>
  );
}