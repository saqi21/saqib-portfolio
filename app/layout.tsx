import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { siteConfig, basePath } from "@/lib/constants";
import Providers from "./providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "SaQiB Zafar",
    "Front End Developer",
    "SQA Engineer",
    "Software Quality Assurance",
    "React Developer",
    "TypeScript",
    "Cypress Automation",
    "Next.js",
    "QA Engineer",
    "Portfolio",
    "Pakistan",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: `${basePath}/images/cover.jpg`,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${basePath}/images/cover.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "SaQiB Zafar",
              url: siteConfig.url,
              jobTitle: "Front End & Software Quality Assurance Engineer",
              description: siteConfig.description,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Daska, Sialkot",
                addressCountry: "PK",
              },
              sameAs: [
                "https://github.com/saqi21",
                "https://www.linkedin.com/in/saqib-zafar-6966a7225/",
              ],
              knowsAbout: [
                "React",
                "TypeScript",
                "Next.js",
                "Cypress",
                "Software Quality Assurance",
                "Test Automation",
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
