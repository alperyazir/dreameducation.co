import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Dream Education - Eğitim Kitapları ve Materyalleri",
    template: "%s | Dream Education",
  },
  description:
    "Dream Education, okullara ve öğretmenlere yabancı dil eğitim kitapları ve materyalleri dağıtımı yapmaktadır. İngilizce, Fransızca, İspanyolca ve Almanca kaynaklar.",
  keywords: [
    "eğitim kitapları",
    "yabancı dil",
    "okul materyalleri",
    "İngilizce kitaplar",
    "Fransızca kitaplar",
    "Dream Education",
    "eğitim materyalleri",
    "dil eğitimi",
    "educational books",
    "language learning",
  ],
  metadataBase: new URL("https://dreameducation.co"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dream Education - Eğitim Kitapları ve Materyalleri",
    description:
      "Okullara ve öğretmenlere yabancı dil eğitim kitapları ve materyalleri dağıtımı.",
    url: "https://dreameducation.co",
    siteName: "Dream Education",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/dream-education-logo.svg",
        width: 800,
        height: 600,
        alt: "Dream Education Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dream Education - Eğitim Kitapları ve Materyalleri",
    description:
      "Okullara ve öğretmenlere yabancı dil eğitim kitapları ve materyalleri dağıtımı.",
    images: ["/dream-education-logo.svg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dream Education",
  url: "https://dreameducation.co",
  logo: "https://dreameducation.co/dream-education-logo.svg",
  description:
    "Okullara ve öğretmenlere yabancı dil eğitim kitapları ve materyalleri dağıtımı.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "TR",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TL6SG61EG7"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TL6SG61EG7');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.className} bg-white text-gray-900 antialiased`}
        suppressHydrationWarning
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
