import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import ModeProvider from "@/hooks/modeContext";
import Script from "next/script";

const heebo = Heebo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Programador Nilton Cadamuro",
  //description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Script src="js/scrollmagic/uncompressed/ScrollMagic.js"></Script>
      <ModeProvider>
        <body className={`${heebo.className}`}>{children}</body>
      </ModeProvider>
    </html>
  );
}
