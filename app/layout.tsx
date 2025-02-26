import { RootStoreProvider } from "@/components/providers/root-store-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/shared/navbar";

import { Rubik } from "next/font/google";
import Footer from "@/components/sections/layout/footer";
import type { Metadata } from "next";
import "./globals.css";

export const rubikFont = Rubik({
  variable: "--font-rubik", // Asegúrate de crear una variable para la fuente Rubik
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DATA SAM",
  description: "DATA SAM una comunidad de estudiantes de licenciatura en ciencia de datos de la UNSAM, donde el conocimiento se comparte y la comunidad se fortalece",
  icons: {
    icon: "/svg/DataSamLogo.svg",  // Ruta del ícono en la carpeta 'public'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <RootStoreProvider>
        <body className={`${rubikFont.variable} antialiased`}>
          <Navbar />
          <main className="flex font-rubik flex-col gap-4 bg-muted/40 md:gap-8">
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
          <Footer/>
        </body>
      </RootStoreProvider>
    </html>
  );
}
