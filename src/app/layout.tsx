import type { Metadata } from "next";
import { Poppins, Pacifico } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--poppins",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--pacifico",
});

export const metadata: Metadata = {
  title: "Coffee Shop",
  description: "Coffee Shop Designed By Mursaleen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${pacifico.variable} w-screen overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
