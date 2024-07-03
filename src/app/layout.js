import { Inter, Sarabun } from "next/font/google";
import "./globals.css";
import NavHeader from "@/components/NavHeader";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sarabun = Sarabun({
  subsets: ["latin"],
  variable: "--font-sarabun",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Accueil",
  description: "Site web de Metageex",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${sarabun.variable} main `}>
        <div className="bgImage" />
        <NavHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
