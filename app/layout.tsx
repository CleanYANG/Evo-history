import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "COOLAB Community",
  description:
    "A public-facing community portal for sharing protocols, lab experience, jobs, and PI reviews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
