import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Programador Front-End",
  description: "Sempre fui apaixonado por tecnologia. Descobri que com dedicação, e uma boa organização, consigo potencializar o tempo e ter um bom resultado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
