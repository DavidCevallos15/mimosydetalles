import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mimos y Detalles | Eventos y Regalos",
  description: "Especialistas en eventos corporativos, eventos sociales y regalos únicos. Calidad, talento y rapidez a tu servicio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        <main style={{ paddingTop: '80px', minHeight: 'calc(100vh - 80px)' }}>
          {children}
        </main>
        <WhatsAppButton />
      </body>
    </html>
  );
}
