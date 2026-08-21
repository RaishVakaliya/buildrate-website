import type { Metadata } from "next";
import {
  Inter,
  Geist_Mono,
  Exo,
  Delius,
  Overlock,
  Solway,
  Emilys_Candy,
  Duru_Sans,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const exo = Exo({
  subsets: ["latin"],
  variable: "--font-exo",
  display: "swap",
});

const delius = Delius({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-delius",
  display: "swap",
});

const overlock = Overlock({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-overlock",
  display: "swap",
});

const solway = Solway({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-solway",
  display: "swap",
});

const emilysCandy = Emilys_Candy({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-emilys-candy",
  display: "swap",
});

const duruSans = Duru_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-duru-sans",
  display: "swap",
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://buildrate.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "BuildRate — Construction Material Price Comparison & Supplier Discovery",
    template: "%s | BuildRate",
  },
  description:
    "Browse construction materials, compare listed market prices, and discover local suppliers in Ahmedabad — all in one place.",
  keywords: [
    "construction material price comparison",
    "building material prices Ahmedabad",
    "construction suppliers Ahmedabad",
    "cement prices Ahmedabad",
    "steel rates Ahmedabad",
    "supplier discovery app",
  ],
  authors: [{ name: "BuildRate" }],
  creator: "BuildRate",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "BuildRate",
    title: "BuildRate — Construction Material Price Comparison",
    description:
      "Browse construction materials, compare listed market prices, and discover local suppliers in Ahmedabad.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BuildRate — Construction Material Price Comparison App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildRate — Construction Material Price Comparison",
    description:
      "Browse construction materials, compare listed market prices, and discover local suppliers in Ahmedabad.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        inter.variable,
        geistMono.variable,
        exo.variable,
        delius.variable,
        overlock.variable,
        solway.variable,
        emilysCandy.variable,
        duruSans.variable,
      )}
    >
      <body className="min-h-screen flex flex-col font-sans antialiased bg-background text-foreground">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
