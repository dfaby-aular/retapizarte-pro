"use client";

import { useState, useRef } from "react";

export default function BeforeAfterSlider({ before, after }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, percent)));
  };

  const handleTouch = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, percent)));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[320px] rounded-2xl overflow-hidden group cursor-ew-resize shadow-lg"
      onMouseMove={handleMove}
      onTouchMove={handleTouch}
    >
      {/* Imagen DESPUÉS */}
      <img
        src={after}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Imagen ANTES */}
      <div
        className="absolute inset-0 overflow-hidden transition-all duration-200"
        style={{ width: `${position}%` }}
      >
        <img
          src={before}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Línea divisora */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white z-10"
        style={{ left: `${position}%` }}
      >
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center text-xs font-bold">
          ⇆
        </div>
      </div>

      {/* Labels */}
      <span className="absolute bottom-3 left-3 bg-black/60 text-white text-[10px] px-3 py-1 rounded-full tracking-widest">
        ANTES
      </span>
      <span className="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] px-3 py-1 rounded-full tracking-widest">
        DESPUÉS
      </span>

      {/* Hover glow */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300" />
    </div>
  );
}