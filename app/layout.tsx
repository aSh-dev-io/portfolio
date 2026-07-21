import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashwin Moorthy Portfolio",
  description:
    "Electronics and Communication Engineering undergraduate specializing in Embedded Systems, PCB Design, and IoT technologies.",
  openGraph: {
    title: "Ashwin Moorthy Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashwin Moorthy Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
