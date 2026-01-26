import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Glacier On Wheel | Cold-Chain Logistics & Refrigerated Vans in Bihar",
  description:
    "Glacier On Wheel is Bihar's pioneer in cold-chain logistics providing IoT-enabled refrigerated van rentals across North India. Trusted by Blinkit, McDonald's, Domino's, AMUL & more.",
  keywords: [
    "cold chain logistics bihar",
    "refrigerated van rental bihar",
    "cold chain transport bihar",
    "ice cream logistics india",
    "cold chain logistics india",
    "refrigerated transport services",
    "IoT temperature monitoring logistics",
    "frozen food transportation",
  ],
  authors: [{ name: "Glacier On Wheel" }],
  openGraph: {
    title: "Glacier On Wheel | Cold-Chain Logistics in Bihar",
    description:
      "Reliable cold-chain logistics & refrigerated van rentals across North India.",
    type: "website",
    locale: "en_IN",
    siteName: "Glacier On Wheel",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LogisticsBusiness",
              name: "Glacier On Wheel",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "102, Ground Floor, Malti Complex, Ramashish Chowk",
                addressLocality: "Hajipur",
                postalCode: "844101",
                addressRegion: "Bihar",
                addressCountry: "IN",
              },
              telephone: ["+919155956967", "+917761925078"],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased font-sans`}
      >
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
