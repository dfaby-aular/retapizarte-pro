import { TIPS } from "../../data/data";

export default function Tips() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-4xl font-display font-bold mb-10">
        Tips de Tapicería
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {TIPS.map((t, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition"
          >
            <div className="text-3xl">{t.icon}</div>
            <h3 className="font-bold mt-2">{t.title}</h3>
            <p className="text-sm opacity-70">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}