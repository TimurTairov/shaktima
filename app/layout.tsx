import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "next-themes";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Шакти Ма",
  description: "Московский Дхарма центр Шакти Ма. Пуджи, медитации, семинары в Москве.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-50 text-gray-700 dark:bg-slate-800 dark:text-gray-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="system"
          enableSystem disableTransitionOnChange>
          <Header />
          <main className="min-h-screen bg-neutral-50 dark:bg-slate-800 text-neutral-700 font-light">
            {children}
          </main>
          <Footer />

        </ThemeProvider>
      </body>
    </html>
  );
}
