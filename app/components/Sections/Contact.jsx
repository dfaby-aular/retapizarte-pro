import { COLORS } from "@/app/constants/colors";

export default function Contact() {
  return (
    <section
      style={{
        padding: "90px 20px",
        textAlign: "center",
        background: "#faf7f2",
      }}
    >
      {/* TITULO */}
      <h2
        style={{
          fontSize: "2.6rem",
          fontWeight: "800",
          color: COLORS.espresso,
          marginBottom: "10px",
        }}
      >
        Transformá tu sillón hoy ✨
      </h2>

      <p style={{ marginBottom: "40px" }}>
        Te respondemos en minutos y te damos un presupuesto sin compromiso
      </p>

      {/* CONTENEDOR */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "35px",
          maxWidth: "1000px",
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        {/* MAPA */}
        <div
          style={{
            borderRadius: "18px",
            overflow: "hidden",
            boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
            transform: "scale(1)",
            transition: "0.3s",
          }}
        >
          <iframe
            title="Ubicación Retapizarte"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.123456789!2d-58.123456!3d-34.567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb123456789!2sHonorio%20Senet%201355!5e0!3m2!1ses!2sar!4v0000000000"
            width="100%"
            height="320"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* CTA CARD */}
        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "18px",
            boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
            textAlign: "left",
          }}
        >
          {/* BADGE */}
          <div
            style={{
              display: "inline-block",
              background: "#efeeec",
              color: COLORS.espresso,
              fontSize: "0.75rem",
              padding: "6px 12px",
              borderRadius: "20px",
              marginBottom: "15px",
              fontWeight: "600",
            }}
          >
            📍 Honorio Senet 1355, Villa Lynch
          </div>

          <h3
            style={{
              fontSize: "1.4rem",
              fontWeight: "700",
              marginBottom: "10px",
              color: COLORS.espresso,
            }}
          >
            ¿Listo para renovar tu mueble?
          </h3>

          <p style={{  marginBottom: "25px" }}>
            Mandanos una foto y te decimos precio en el momento. Sin compromiso.
          </p>

          {/* BOTON WHATSAPP */}
          <a
            href="https://wa.me/5491100000000?text=Hola!%20Quiero%20renovar%20mi%20mueble%20y%20necesito%20presupuesto"
            target="_blank"
            style={{
              display: "inline-block",
              background: "#25D366",
              color: "white",
              padding: "14px 22px",
              borderRadius: "50px",
              fontWeight: "700",
              textDecoration: "none",
              boxShadow: "0 10px 25px rgba(37, 211, 102, 0.3)",
              transition: "0.3s",
            }}
          >
            💬 Pedir presupuesto ahora
          </a>

          {/* INFO EXTRA */}
          <p style={{ marginTop: "18px", fontSize: "0.85rem" }}>
            ⚡ Respuesta rápida · 💸 Sin cargo · 🛠️ Trabajo artesanal
          </p>
        </div>
      </div>
    </section>
  );
}