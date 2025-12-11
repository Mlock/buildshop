import type { Metadata } from "next";
import { Inter, Anton, Permanent_Marker } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-permanent-marker",
  display: "swap",
});

export const metadata: Metadata = {
  title: "buildshop",
  description: "build something real this weekend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.variable,
          anton.variable,
          permanentMarker.variable,
          "antialiased bg-black text-white font-sans selection:bg-white selection:text-black"
        )}
      >
        {children}
      </body>
    </html>
  );
}
