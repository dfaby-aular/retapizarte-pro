import "./globals.css";
import { Playfair_Display, Lato, Dancing_Script } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const lato = Lato({ subsets: ["latin"], weight: ["300","400","700"] });
const dancing = Dancing_Script({ subsets: ["latin"] });

export const metadata = {
  title: "Retapizarte Pro",
  description: "Tapicería premium",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={lato.className}>
        {children}
      </body>
    </html>
  );
}