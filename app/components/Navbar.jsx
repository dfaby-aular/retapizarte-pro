"use client";

import { useEffect, useState } from "react";
import { COLORS } from "../constants/colors";

export default function Navbar() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const handle = () => setSolid(window.scrollY > 50);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <nav
     style={{
            color: COLORS.letter,
          }}
      className={`fixed w-full z-50 px-6 py-4 flex justify-between items-center transition ${
        solid
          ? "bg-white/90 backdrop-blur shadow"
          : "bg-transparent"
      }`}
    >
      <h2 className="font-display text-xl font-extrabold">
        ReTapizArte
      </h2>

      <a
        href="https://wa.me/5491168851939?text=Hola%20quiero%20solicitar%20un%20presupuesto%20para%20retapizar%20un%20mueble"
        target="_blank"
        className="bg-green-500 text-white px-6 py-3 rounded-full font-bold"
      >
        Solicitar Cotización
      </a>
    </nav>
  );
}