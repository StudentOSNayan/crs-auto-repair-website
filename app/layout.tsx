import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { business, siteUrl } from "@/lib/business";
import { structuredData } from "@/lib/schema";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileActionBar } from "@/components/layout/MobileActionBar";

/**
 * Manrope, self-hosted as a single latin variable woff2 (~25 KB).
 * Self-hosting keeps the build hermetic (no third-party request at build or
 * run time) and avoids an extra connection on the critical path.
 * Source: @fontsource-variable/manrope — SIL Open Font License 1.1
 * (see app/fonts/LICENSE.txt).
 */
const manrope = localFont({
  src: "./fonts/manrope-latin-variable.woff2",
  weight: "200 800",
  style: "normal",
  variable: "--font-manrope",
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "-apple-system",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "CRS Auto Repair | Auto Repair in San Gabriel, CA",
  description:
    "CRS Auto Repair is a local auto repair shop at 1901 Del Mar Ave, San Gabriel, CA 91776. Call (626) 573-3922 for automotive repair and maintenance in San Gabriel.",
  applicationName: business.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: business.name,
    title: "CRS Auto Repair | Auto Repair in San Gabriel, CA",
    description:
      "Local auto repair in San Gabriel, CA. 1901 Del Mar Ave — call (626) 573-3922 for automotive repair and maintenance.",
    images: [
      {
        url: "/images/crs/IMG_20260926_171641.jpg",
        width: 720,
        height: 546,
        alt: "Exterior of CRS Auto Repair, with the red sign and blue service canopy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CRS Auto Repair | Auto Repair in San Gabriel, CA",
    description:
      "Local auto repair in San Gabriel, CA. 1901 Del Mar Ave — call (626) 573-3922 for automotive repair and maintenance.",
    images: ["/images/crs/IMG_20260926_171641.jpg"],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true, address: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0a0b",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="bg-obsidian font-sans text-bone antialiased">
        <a
          href="#main"
          className="focus-visible:outline-accent-bright sr-only rounded-full focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData()) }}
        />

        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <MobileActionBar />

        {/* Scroll-reveal fallback when JavaScript is unavailable. */}
        <noscript>
          <style>{`[data-reveal],[data-reveal="mask"]{opacity:1!important;transform:none!important;clip-path:none!important}`}</style>
        </noscript>
      </body>
    </html>
  );
}
