import type { Metadata } from "next";
import {Anton, Inter} from "next/font/google";
import "./globals.css";

const anton = Anton({ variable: "--font-anton", weight: "400", subsets: ["latin"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "David Kauzlaric",
  description: "Helping business owners navigate the journey from stressed operator to wealthy owner.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}