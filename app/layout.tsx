import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Candra Darisman | PPIC, Project Support & Project Coordinator",
  description:
    "Portofolio profesional Candra Darisman — PPIC, Production Planning & Inventory Control, Project Support, Project Coordinator. Pengalaman Telkomsel regional Sumatera, Kalimantan, Bali–Nusra. Supply Chain, Operations, Warehouse Management.",
  keywords: [
    "Candra Darisman",
    "PPIC",
    "Production Planning",
    "Inventory Control",
    "Project Coordinator",
    "Project Support",
    "Supply Chain",
    "Warehouse Management",
    "Telkomsel",
  ],
  authors: [{ name: "Candra Darisman" }],
  openGraph: {
    title: "Candra Darisman | PPIC & Project Coordinator",
    description:
      "Rekam jejak profesional di operasional teknis, koordinasi proyek, dan kontrol inventaris.",
    type: "website",
    locale: "id_ID",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900 antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Candra Darisman",
              jobTitle: "PPIC, Project Support, Project Coordinator",
              alumniOf: "SMKN 4 Bandung",
              knowsAbout: [
                "PPIC",
                "Inventory Control",
                "Material Planning",
                "Project Coordination",
                "Supply Chain",
                "Warehouse Management",
                "ERP NEO",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
