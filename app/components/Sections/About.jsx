export default function About() {
  return (
    <section className="py-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
      <img
        src="https://images.unsplash.com/photo-1504148455328-c376907d081c"
        className="rounded-2xl shadow-xl"
      />

      <div>
        <h2 className="text-4xl font-display font-bold mb-4">
          Artesanos del retapizado
        </h2>

        <p className="mb-4 opacity-80">
          Más de 5 años transformando muebles en piezas únicas.
        </p>

        <p className="italic text-terracota">
          “Tu mueble no está viejo, solo necesita una segunda oportunidad.”
        </p>
      </div>
    </section>
  );
}