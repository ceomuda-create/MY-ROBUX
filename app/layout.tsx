import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MY ROBUX",
  description: "Premium Robux Store",

  icons: {
    icon: "/logo.png",
  },

  openGraph: {
    title: "MY ROBUX",
    description: "Premium Robux Store",
    url: "https://strmyrbx.netlify.app",
    siteName: "MY ROBUX",
    images: [
      {
        url: "https://strmyrbx.netlify.app/logo.png",
        width: 1200,
        height: 630,
        alt: "MY ROBUX",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-screen transition-colors duration-500">
        {children}
      </body>
    </html>
  );
}