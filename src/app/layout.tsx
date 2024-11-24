import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";


const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["200", "300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Portofolio",
  description: "Created by 0xDany",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="black">
      <body
        className={`${urbanist.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
