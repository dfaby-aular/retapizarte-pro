import { BEFORE_AFTER } from "../../data/data";
import BeforeAfterSlider from "../BeforeAfterSlider";

export default function Work() {
  return (
    <section className="py-20 bg-[#F5EFE6] text-center">
      <h2 className="text-4xl font-display font-bold mb-10">
        Antes y Después
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {BEFORE_AFTER.map((item, i) => (
          <BeforeAfterSlider key={i} {...item} />
        ))}
      </div>
    </section>
  );
}