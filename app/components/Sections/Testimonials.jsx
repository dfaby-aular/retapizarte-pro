import { COLORS } from "@/app/constants/colors";
import { TESTIMONIALS } from "../../data/data";

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#FAF6F1] text-center">
     <h2 className="text-4xl font-display font-bold mb-10"
                      style={{
                                  color: COLORS.espresso,
                                }}>
        Clientes felices
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow text-left"
          >
            <p className="italic mb-4">"{t.text}"</p>
            <strong>{t.name}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}