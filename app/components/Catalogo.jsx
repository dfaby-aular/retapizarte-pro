"use client";
import { motion } from "framer-motion";
import { COLORS } from "../constants/colors";

const trabajos = [
  {
    titulo: "sillones booth",
    imagen: "/images/cafeteria.png",
    descripcion: "Tapizado en pana verde, y fabricación desde cero"
  },
  {
    titulo: "Sillas Antiguas",
    imagen: "/images/silla-cuero.png",
    descripcion: "Restauración completa en cuero ecológico"
  },
  {
    titulo: "Sillones de recepción",
    imagen: "/images/sillones-estar.png",
    descripcion: "Diseño capitoné en cuerina titanio diseño vivo y botones"
  }
];

export default function Catalogo() {
  return (
    <div className="min-h-screen bg-neutral-100 p-8 text-center">

       <h2 className="text-4xl font-display font-bold mb-10"
            style={{
                        color: COLORS.espresso,
                      }}>
        Trabajos de Tapicería
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {trabajos.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            
            {/* Imagen con zoom */}
            <div className="overflow-hidden">
              <motion.img
                src={item.imagen}
                alt={item.titulo}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className="w-full h-56 object-cover"
              />
            </div>

            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-800">
                {item.titulo}
              </h2>

              <p className="text-sm text-gray-500 mt-2">
                {item.descripcion}
              </p>

              <button className="mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
                Ver detalle
              </button>
            </div>

          </motion.div>
        ))}
      </div>

    </div>
  );
}