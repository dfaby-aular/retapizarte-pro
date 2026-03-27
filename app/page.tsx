import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/Sections/About";
import Work from "./components/Sections/Work";
import Services from "./components/Sections/Services";
import Marquee from "./components/Sections/Marquee";
import Tips from "./components/Sections/Tips";
import Testimonials from "./components/Sections/Testimonials";
import Catalogo from "./components/Catalogo";
import Contact from "./components/Sections/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Work />
    <Marquee />
      <Services />
    <Marquee />
      <Tips />
      <Testimonials />
      <Catalogo />
          <Marquee />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}