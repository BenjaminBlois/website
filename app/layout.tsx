import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Numeriq Tax and Accounting | Professional Bookkeeping & CFO Services",
  description: "Get complete, accurate, on-time financial statements from U.S.-based bookkeeping experts. Professional accounting, bookkeeping, and fractional CFO services.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Numeriq Tax and Accounting",
    description: "Professional bookkeeping, tax preparation, and fractional CFO services. Fixed pricing, clear communication, accuracy you can rely on.",
    url: "https://www.numeriqtaxandaccounting.com",
    siteName: "Numeriq Tax and Accounting",
    images: [
      {
        url: "/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Numeriq Tax and Accounting",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Numeriq Tax and Accounting",
    description: "Professional bookkeeping, tax preparation, and fractional CFO services. Fixed pricing, clear communication, accuracy you can rely on.",
    images: ["/hero-image.png"],
  },
  metadataBase: new URL("https://www.numeriqtaxandaccounting.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
