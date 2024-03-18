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
      <Script id="google-tag-manager" strategy="lazyOnload">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MKSH4Q8Z');
          `}
      </Script>

      <ModeProvider>
        <body className={`${heebo.className}`}>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MKSH4Q8Z" height="0" width="0" style="display:none visibility:hidden"><iframe>`,
            }}
          />
          {children}
        </body>
      </ModeProvider>
    </html>
  );
}
