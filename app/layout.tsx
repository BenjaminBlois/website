import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Numeriq Tax and Accounting | Professional Bookkeeping & CFO Services",
  description: "Get complete, accurate, on-time financial statements from U.S.-based bookkeeping experts. Professional accounting, bookkeeping, and fractional CFO services.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
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
