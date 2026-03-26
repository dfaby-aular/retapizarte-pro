import { SERVICES } from "../../data/data";

export default function Services() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-4xl font-display font-bold mb-10">
        Servicios
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {SERVICES.map((s, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition"
          >
            <div className="text-4xl mb-3">{s.icon}</div>
            <h3 className="font-bold">{s.title}</h3>
            <p className="text-sm opacity-70">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}