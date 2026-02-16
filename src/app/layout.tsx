import type { Metadata } from "next";
import "./globals.css";
import content from "@/data/content.json";

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  keywords: content.seo.keywords,
  openGraph: {
    title: content.seo.title,
    description: content.seo.description,
    locale: "ru_RU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: content.businessName,
    description: content.seo.description,
    telephone: content.contacts.phones[0].number,
    address: {
      "@type": "PostalAddress",
      streetAddress: content.contacts.address.street,
      addressLocality: content.contacts.address.city,
      addressCountry: "KZ",
    },
    openingHours: "Mo-Su 08:00-20:00",
    areaServed: content.contacts.address.city,
  };

  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
