import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  title: "Meta Tags Analizer - Preview your meta Tags",
  description: "Meta Tags Analysis and SEO Optimization Tool",
  keywords: [
    "meta tags",
    "meta tags analizer",
    "meta tags reader",
    "seo",
    "search engine optimization",
    "website analysis",
    "digital marketing",
    "web optimization",
    "search visibility",
    "online presence",
    "website performance",
    "page ranking",
    "html metadata",
    "web development",
    "google ranking",
    "site optimization",
    "web analytics",
  ],
  openGraph: {
    title: "StarboundTags",
    description: "Meta Tags Analysis and SEO Optimization Tool",
    url: `${baseUrl}/images/bg-seo.png`,
    siteName: "StarboundTags",
    images: [
      {
        url: `${baseUrl}/images/bg-seo.png`,
        width: 800,
        height: 600,
      },
      {
        url: `${baseUrl}/images/bg-seo.png`,
        width: 1800,
        height: 1600,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StarboundTags",
    description: "Meta Tags Analysis and SEO Optimization Tool",
    images: [`${baseUrl}/images/bg-seo.png`],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
