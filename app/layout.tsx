import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import Navbar from "@/components/nav";

import { baseUrl } from "./sitemap";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "AI 使用手册",
    template: "%s | User's Manual",
  },
  description: "这是针对小白的一份AI使用手册.",
  alternates: {
    canonical: `${baseUrl}`,
  },
  openGraph: {
    title: "AI 使用手册",
    description: "这是针对小白的一份AI使用手册.",
    url: baseUrl,
    siteName: "AI 使用手册",
    locale: "en_US",
    type: "website",
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

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="cyM4iL74cloEbU6mVZFqClWPuSzSk6rDhcJYWqcIj8c"
        />
      </head>
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-2xl mx-auto py-10 px-4">
            <Navbar />
            <main>{children}</main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
