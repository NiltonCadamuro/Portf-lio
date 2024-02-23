import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import ModeProvider from "@/hooks/modeContext";

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
      <ModeProvider>
        <body className={`${heebo.className}`}>{children}</body>
      </ModeProvider>
    </html>
  );
}
