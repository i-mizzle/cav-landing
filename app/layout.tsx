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
  metadataBase: new URL("https://cav.ng"),
  title: {
    default: "CAV Brand | Creating Content. Building Influence. Driving Results.",
    template: "%s | CAV Brand",
  },
  description:
    "CAV Brand helps businesses, creators, and organizations produce strategic video content, event coverage, and marketing campaigns that drive measurable results.",
  keywords: [
    "CAV Brand",
    "video production",
    "content strategy",
    "event coverage",
    "social media content",
    "brand storytelling",
    "Nigeria",
    "Lagos",
  ],
  applicationName: "CAV Brand",
  category: "business",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://cav.ng",
    siteName: "CAV Brand",
    title: "CAV Brand | Creating Content. Building Influence. Driving Results.",
    description:
      "Premium creator-focused video production and content strategy for businesses, organizations, and personal brands.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "CAV Brand - Creating Content. Building Influence. Driving Results.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CAV Brand | Creating Content. Building Influence. Driving Results.",
    description:
      "Premium creator-focused video production and content strategy for businesses, organizations, and personal brands.",
    images: ["/twitter-image"],
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
