import { RootStoreProvider } from "@/components/providers/root-store-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/shared/navbar";
import type { Metadata } from "next";
import "./globals.css";

import { Rubik } from "next/font/google";

export const rubikFont = Rubik({
  variable: "--font-rubik", // Variable para la fuente en CSS
  subsets: ["latin"], 
});

export const metadata: Metadata = {
  title: "DATA SAM",
  description: "DATA SAM una comunidad de estudiantes de licenciatura en ciencia de datos de la UNSAM, donde el conocimiento se comparte y la comunidad se fortalece",
  icons: {
    icon: "/images/logo_v_claro_final.svg",  // Ruta del ícono en la carpeta 'public'
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
          <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 md:gap-8">
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
        </body>
      </RootStoreProvider>
    </html>
  );
}
