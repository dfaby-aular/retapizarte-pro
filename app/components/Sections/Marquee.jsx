"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { COLORS } from "../../constants/colors";

export default function Marquee() {
  const items = [
    "✦ Retapizado artesanal",
    "✦ Telas premium",
    "✦ Presupuestos sin cargo",
    "✦ Sillones · Sillas · Cabeceras",
  ];

  const x = useMotionValue(0);

  // ⚡ default SSR-safe (evita hydration mismatch)
  const [duration, setDuration] = useState(20);

  // 📱 detecta pantalla SOLO en client
  useEffect(() => {
    const updateDuration = () => {
      const isMobile = window.innerWidth < 768;
      setDuration(isMobile ? 12 : 25);
    };

    updateDuration(); // inicial
    window.addEventListener("resize", updateDuration);

    return () => window.removeEventListener("resize", updateDuration);
  }, []);

  // 🎬 animación separada (segura)
  useEffect(() => {
    const controls = animate(x, ["0%", "-50%"], {
      ease: "linear",
      duration,
      repeat: Infinity,
    });

    return controls.stop;
  }, [x, duration]);

  return (
    <div
      style={{
        background: COLORS.espresso,
        padding: "12px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <motion.div
        style={{
          display: "flex",
          gap: 48,
          whiteSpace: "nowrap",
          x,
        }}
      >
        {/* duplicado para loop infinito sin cortes */}
        {[...items, ...items].map((t, i) => (
          <span
            key={`${t}-${i}`}
            style={{
              color: COLORS.sand,
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
              fontSize: "0.78rem",
              letterSpacing: "2px",
              textTransform: "uppercase",
              flexShrink: 0,
            }}
          >
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  );
}