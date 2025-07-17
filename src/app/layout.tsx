import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fahresa Jaya Pratama | Spesialis Finishing Fasad Gedung",
  description: "FJP adalah solusi terpercaya untuk kebutuhan finishing fasad gedung Anda dengan kualitas terbaik dan profesional.",
  keywords: ["FJP", "Fahresa Jaya Pratama", "finishing fasad gedung", "arsitektur", "konstruksi", "kontraktor fasad"],
  authors: [{ name: "FJP Team", url: "https://fjpofficial.com" }],
  metadataBase: new URL("https://fjpofficial.com"),
  themeColor: "#1D1B1B",
  openGraph: {
    title: "FJP - Fahresa Jaya Pratama",
    description: "Solusi terbaik untuk finishing fasad gedung Anda.",
    url: "https://fjpofficial.com",
    siteName: "FJP Official",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://fjpofficial.com/assets/images/logo.png",
        width: 1200,
        height: 630,
        alt: "FJP - Finishing Fasad Gedung",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
        aria-hidden="false">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
