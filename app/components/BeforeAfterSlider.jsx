"use client";

import { useState, useRef, useEffect } from "react";

export default function BeforeAfterSlider({ before, after, label }) {
  const [position, setPosition] = useState(50);
  const [isInteracting, setIsInteracting] = useState(false);
  const containerRef = useRef(null);
  const directionRef = useRef(1);
  const timeoutRef = useRef(null);

  // Animación automática
  useEffect(() => {
    if (isInteracting) return;

    const interval = setInterval(() => {
      setPosition((prev) => {
        if (prev >= 100) directionRef.current = -1;
        if (prev <= 0) directionRef.current = 1;
        return prev + directionRef.current * 100;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isInteracting]);

  // Detectar interacción y pausar temporalmente
  const startInteraction = () => {
    setIsInteracting(true);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 1000); // vuelve a auto después de 2s sin tocar
  };

  const handleMove = (e) => {
    startInteraction();

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = (x / rect.width) * 100;

    setPosition(Math.max(0, Math.min(100, percent)));
  };

  const handleTouch = (e) => {
    startInteraction();

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percent = (x / rect.width) * 100;

    setPosition(Math.max(0, Math.min(100, percent)));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[320px] rounded-2xl overflow-hidden group cursor-ew-resize shadow-lg"
      onMouseMove={(e) => requestAnimationFrame(() => handleMove(e))}
      onTouchMove={handleTouch}
    >
      {/* DESPUÉS */}
      <img
        src={after}
        className="absolute inset-0 w-full h-full object-cover"
        alt={`Después - ${label}`}
      />

      {/* ANTES */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: `inset(0 ${100 - position}% 0 0)`,
          transition: isInteracting
            ? "none"
            : "clip-path 0.8s ease-in-out",
        }}
      >
        <img
          src={before}
          className="w-full h-full object-cover"
          alt={`Antes - ${label}`}
        />
      </div>

      {/* Línea */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white z-10 shadow-lg"
        style={{
          left: `${position}%`,
          transform: "translateX(-50%)",
          transition: isInteracting ? "none" : "left 0.8s ease-in-out",
        }}
      >
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center text-xs font-bold">
          ⇆
        </div>
      </div>

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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300" />
    </div>
  );
}