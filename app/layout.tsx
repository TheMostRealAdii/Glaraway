import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Glaraway",
  description:
    "Discover Glaraway – a revolution in high-quality streetwear and soon, premium gym clothing and accessories. Redefining urban fashion and fitness wear, Glaraway combines style, comfort, and functionality for the modern active lifestyle. Stay tuned for our grand launch!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="Discover Glaraway – a revolution in high-quality streetwear and soon, premium gym clothing and accessories. Redefining urban fashion and fitness wear, Glaraway combines style, comfort, and functionality for the modern active lifestyle. Stay tuned for our grand launch!"
        ></meta>
        <meta name="keywords" content="Clothing, Glaraway, Streetwear"></meta>
        <meta name="author" content="Aditya Shah"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
