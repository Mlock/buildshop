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
  metadataBase: new URL("https://buildshop.club"),
  title: {
    default: "Buildshop",
    template: "%s | Buildshop",
  },
  description: "Est. 2025 — Tokyo, Japan. Build something real this weekend.",
  keywords: ["builders", "makers", "startups", "tokyo", "community", "software", "hardware"],
  authors: [{ name: "Buildshop" }],
  creator: "Buildshop",
  openGraph: {
    title: "Buildshop",
    description: "Est. 2025 — Tokyo, Japan. Build something real this weekend.",
    url: "https://buildshop.club",
    siteName: "Buildshop",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Please add this image to your public folder
        width: 1200,
        height: 630,
        alt: "Buildshop - Build something real this weekend",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buildshop",
    description: "Est. 2025 — Tokyo, Japan. Build something real this weekend.",
    creator: "@buildshop", // Update with actual handle if different
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
