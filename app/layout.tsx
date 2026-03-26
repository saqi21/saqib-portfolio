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
    "Saqib Zafar Developer",
    "Front End Developer",
    "SQA Engineer",
    "Software Quality Assurance Engineer",
    "React Developer Pakistan",
    "TypeScript Developer",
    "Cypress Automation Engineer",
    "Selenium Tester",
    "Cucumber BDD",
    "Next.js Developer",
    "QA Engineer Pakistan",
    "Manual Testing",
    "Automation Testing",
    "Test Automation Engineer",
    "Ruby on Rails Developer",
    "Web Developer Sialkot",
    "Portfolio",
    "Gujranwala Developer",
    "Pakistan",
    "Hire QA Engineer",
    "Hire Front End Developer",
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
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: "SaQiB Zafar",
                alternateName: "Saqib Zafar",
                url: siteConfig.url,
                image: `${siteConfig.url}/images/profile-white-bg.png`,
                email: "saqibmehar41@gmail.com",
                telephone: "+(92) 341-6796766",
                jobTitle: "Front End Developer & Software Quality Assurance Engineer",
                description: siteConfig.description,
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Daska",
                  addressRegion: "Sialkot",
                  addressCountry: "PK",
                },
                sameAs: [
                  "https://github.com/saqi21",
                  "https://www.linkedin.com/in/saqib-zafar-6966a7225/",
                  "https://web.facebook.com/saqib.zafar.21",
                  "https://www.instagram.com/saaqi_zafar/",
                ],
                knowsAbout: [
                  "React.js",
                  "Next.js",
                  "TypeScript",
                  "JavaScript",
                  "Cypress Automation",
                  "Selenium",
                  "Cucumber BDD",
                  "Software Quality Assurance",
                  "Test Automation",
                  "Manual Testing",
                  "Ruby on Rails",
                  "Tailwind CSS",
                  "HTML5",
                  "CSS3",
                  "RESTful APIs",
                ],
                alumniOf: {
                  "@type": "EducationalOrganization",
                  name: "GIFT University",
                },
                worksFor: {
                  "@type": "Organization",
                  name: "Nullbrainer",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: siteConfig.name,
                url: siteConfig.url,
                description: siteConfig.description,
                author: {
                  "@type": "Person",
                  name: "SaQiB Zafar",
                },
              },
            ]),
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
