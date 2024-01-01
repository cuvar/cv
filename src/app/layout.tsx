import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Script from "next/script";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luca Mueller",
  description: "CV for Luca Mueller",
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta name="description" content="cuvar's cv" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>{children}</body>
      <Script
        defer
        data-domain="cv.cuvar.dev"
        strategy="afterInteractive"
        src="https://plausible.io/js/plausible.js"
      ></Script>
    </html>
  );
}
