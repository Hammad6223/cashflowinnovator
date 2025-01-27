import type { Metadata } from "next";
import {Inter, Poppins } from 'next/font/google'
import localFont from  'next/font/local'
import "./globals.css";

const inter = Inter ({subsets: ["latin"], variable: '--inter'});
const poppins = Poppins ({subsets: ["latin"], variable: "--poppins", weight: ["400", "500", "600", "700", "800"]});
const caveat = localFont ({src: '../fonts/Caveat-Regular.ttf', variable: "--caveat"});
const dmSans = localFont ({src: '../fonts/DMSans-VariableFont_opsz,wght.ttf', variable: "--dmSans"});

export const metadata: Metadata = {
  title: "Cashflow",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={(inter.variable, poppins.variable, caveat.variable, dmSans.variable)}>{children}</body>
    </html>
  );
}
