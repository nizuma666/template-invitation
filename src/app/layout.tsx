import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Arunara — Undangan Nikah Digital Elegan & Modern",
    template: "%s | Arunara",
  },
  description:
    "Arunara adalah platform undangan nikah digital elegan yang memudahkanmu berbagi momen spesial dengan desain indah, fitur RSVP, peta lokasi, dan galeri foto interaktif.",
  keywords: [
    "undangan nikah digital",
    "undangan online",
    "website pernikahan",
    "undangan digital elegan",
    "Arunara",
    "RSVP pernikahan",
    "galeri foto nikah",
  ],
  authors: [{ name: "Arunara Team", url: "https://arunara.id" }],
  creator: "Arunara",
  publisher: "Arunara",
  metadataBase: new URL("https://arunara.id"),
  openGraph: {
    title: "Arunara — Undangan Nikah Digital Elegan & Modern",
    description:
      "Bagikan kisah cintamu secara indah dengan undangan digital interaktif dari Arunara. Desain modern, fitur RSVP, lokasi, dan galeri foto.",
    url: "https://arunara.id",
    siteName: "Arunara",
    images: [
      {
        url: "https://arunara.id/android-chrome-512x512.png",
        width: 1200,
        height: 630,
        alt: "Arunara — Undangan Nikah Digital",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arunara — Undangan Nikah Digital Elegan & Modern",
    description:
      "Platform undangan digital elegan untuk merayakan momen spesialmu. Mudah, cepat, dan berkesan.",
    images: ["https://arunara.id/android-chrome-512x512.png"],
    creator: "@arunara_id",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
