import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextMart",
  description: "A minimal marketplace for your creations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
