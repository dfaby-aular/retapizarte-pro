"use client";

import { motion } from "framer-motion";

export default function BeforeAfterSlider({ before, after, label }) {
  return (
    <div className="relative w-full h-[320px] rounded-2xl overflow-hidden shadow-lg">
      
      {/* DESPUÉS (fondo) */}
      <img
        src={after}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Después"
      />

      {/* ANTES animado */}
      <motion.div
        className="absolute inset-0"
        initial={{ clipPath: "inset(0 50% 0 0)" }}
        animate={{
          clipPath: [
            "inset(0 100% 0 0)", // oculto
            "inset(0 0% 0 0)",   // full antes
            "inset(0 100% 0 0)", // vuelve
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.5, 1],
        }}
      >
        <img
          src={before}
          className="w-full h-full object-cover"
          alt="Antes"
        />
      </motion.div>

      {/* Línea animada */}
      <motion.div
        className="absolute top-0 bottom-0 w-[2px] bg-white z-10 shadow-lg"
        animate={{
          left: ["0%", "100%", "0%"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.5, 1],
        }}
      />

      {/* Labels */}
      <span className="absolute top-3 left-3 bg-black/60 text-white text-[10px] px-3 py-1 rounded-full tracking-widest">
        {label}
      </span>
      <span className="absolute bottom-3 left-3 bg-black/60 text-white text-[10px] px-3 py-1 rounded-full tracking-widest">
        ANTES
      </span>

      <span className="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] px-3 py-1 rounded-full tracking-widest">
        DESPUÉS
      </span>
    </div>
  );
}