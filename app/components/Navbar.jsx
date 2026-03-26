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
      <h2 className="font-display text-xl font-bold">
        ReTapizArte
      </h2>

      <a
        href="https://wa.me/5491100000000"
        className="bg-green-500 text-white px-6 py-3 rounded-full font-bold"
      >
        Cotizar
      </a>
    </nav>
  );
}