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
        <style>{`
          .btn-blue {
            background-color: #3b82f6;
            color: white;
            font-weight: 600;
            padding: 12px 24px;
            border-radius: 8px;
            transition: background-color 0.2s;
            display: inline-flex;
            align-items: center;
            gap: 8px;
          }
          .btn-blue:hover { background-color: #2563eb; }
          .btn-green {
            background-color: #22c55e;
            color: white;
            font-weight: 600;
            padding: 12px 24px;
            border-radius: 8px;
            transition: background-color 0.2s;
            display: inline-flex;
            align-items: center;
            gap: 8px;
          }
          .btn-green:hover { background-color: #16a34a; }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}