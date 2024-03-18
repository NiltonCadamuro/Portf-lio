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
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-YE8YRDQ4XE"></Script>
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YE8YRDQ4XE');
        `}
      </Script>

      <ModeProvider>
        <body className={`${heebo.className}`}>{children}</body>
      </ModeProvider>
    </html>
  );
}
