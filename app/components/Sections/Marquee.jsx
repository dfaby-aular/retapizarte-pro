import { COLORS } from "../../constants/colors";

export default function Marquee() {
  return (
    <div
      style={{
        background: COLORS.espresso,
        padding: "12px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 48,
          whiteSpace: "nowrap",
          animation: "shimmer 20s linear infinite",
        }}
      >
        {[...Array(3)].flatMap((_, repeatIndex) =>
          [
            "✦ Retapizado artesanal",
            "✦ Telas premium",
            "✦ Presupuestos sin cargo",
            "✦ Sillones · Sillas · Cabeceras",
          ].map((t, i) => (
            <span
              key={`${t}-${i}-${repeatIndex}`}
              style={{
                color: COLORS.sand,
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700,
                fontSize: "0.78rem",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              {t}
            </span>
          ))
        )}
      </div>
    </div>
  );
}