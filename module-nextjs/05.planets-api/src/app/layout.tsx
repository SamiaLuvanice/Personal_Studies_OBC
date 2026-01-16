import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: " Início | Planets APP",
  description: "Projeto desenvolvido ao longo das aulas da OBC",
  openGraph: {
    title: " Início | Planets APP",
    description: "Projeto desenvolvido ao longo das aulas da OBC",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header style={{ textAlign: 'center' }}>
          <div>Planets App</div>
          <nav>
            <Link href="/">Início</Link>
            {' | '}
            <Link href="/planets">Planetas</Link>
            {' | '}
            <Link href="/about">Sobre</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
