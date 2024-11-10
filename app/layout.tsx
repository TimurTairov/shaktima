import type { Metadata } from "next";
import localFont from "next/font/local"
import { ThemeProvider } from "next-themes";
import "./globals.css";
import MyNavbar from "@/components/MyNavbar";
import { Footer } from "@/components/Footer";
import { Suspense } from "react";
import { Metrika } from "@/components/YaMetrika";


export const metadata: Metadata = {
  title: "Шакти Ма",
  description: "Московский Дхарма центр Шакти Ма. Пуджи, медитации, семинары в Москве.",
};

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-geist-sans antialiased`}>
        <ThemeProvider attribute="class">
          {/* <Navbar2 /> */}
          <MyNavbar />
          <div className="min-h-screen">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
        <Suspense>
          <Metrika />
        </Suspense>
      </body>
    </html>
  );
}
