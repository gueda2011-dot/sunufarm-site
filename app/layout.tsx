import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { siteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "SunuFarm – Logiciel de gestion avicole pour l'Afrique";
const description =
  "Pilotez vos lots, votre stock, vos ventes et votre rentabilité depuis une application mobile simple, conçue pour les éleveurs avicoles d'Afrique francophone.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "gestion avicole",
    "logiciel élevage poulet",
    "suivi lot avicole",
    "rentabilité aviculture",
    "gestion ferme Sénégal",
    "application élevage Afrique",
    "SunuFarm",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "SunuFarm",
    locale: "fr_FR",
    title,
    description,
    images: [
      {
        url: "/logo-sunufarm.png",
        alt: "SunuFarm – Gestion avicole mobile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/logo-sunufarm.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "SunuFarm",
  url: siteUrl,
  description,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, Android, iOS",
  inLanguage: "fr",
  offers: [
    {
      "@type": "Offer",
      name: "Basic",
      price: "5000",
      priceCurrency: "XOF",
      billingIncrement: "P1M",
    },
    {
      "@type": "Offer",
      name: "Pro",
      price: "10000",
      priceCurrency: "XOF",
      billingIncrement: "P1M",
    },
    {
      "@type": "Offer",
      name: "Business",
      price: "25000",
      priceCurrency: "XOF",
      billingIncrement: "P1M",
    },
  ],
  publisher: {
    "@type": "Organization",
    name: "SunuFarm",
    url: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-gray-950 dark:bg-[#07110c] dark:text-gray-100">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Script id="sunufarm-site-theme" strategy="beforeInteractive">
          {`
            (() => {
              try {
                const stored = localStorage.getItem("sunufarm-site-theme");
                const theme = stored === "light" || stored === "dark"
                  ? stored
                  : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
                document.documentElement.classList.toggle("dark", theme === "dark");
                document.documentElement.dataset.theme = theme;
              } catch {}
            })();
          `}
        </Script>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
