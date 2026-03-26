import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc')] bg-cover brightness-50"></div>

      <div className="relative z-10 max-w-2xl">
        <h1 className="text-5xl font-display text-white font-bold leading-tight">
          Dale nueva vida <br /> a tus muebles
        </h1>

        <p className="text-white mt-4 opacity-90">
          Tapicería artesanal premium en Buenos Aires
        </p>

        <div className="mt-6">
          <Button href="https://wa.me/5491168851939">
            Cotizar por WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}