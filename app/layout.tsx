import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--space-grotesk",
  display: "swap",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

const siteUrl = "https://abdulbasit.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "John Doe | Digital Producer, AI Developer & Web Developer",
  description:
    "John Doe is a Digital Producer and AI & Web Developer creating intelligent digital products, modern web applications, and AI-powered experiences.",
  keywords: [
    "John Doe",
    "Digital Producer",
    "AI Developer",
    "Web Developer",
    "Full-Stack Developer",
    "Next.js",
    "Machine Learning",
  ],
  authors: [{ name: "John Doe" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "John Doe | Digital Producer, AI Developer & Web Developer",
    description:
      "I turn ideas into digital products, intelligent experiences, and scalable web solutions.",
    url: siteUrl,
    siteName: "John Doe",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Doe | Digital Producer, AI Developer & Web Developer",
    description:
      "I turn ideas into digital products, intelligent experiences, and scalable web solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <div className="grain-overlay" aria-hidden="true" />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-bg focus:px-4 focus:py-2 focus:rounded-full"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "John Doe",
              jobTitle: "Digital Producer, AI Developer & Web Developer",
              url: siteUrl,
              sameAs: ["https://github.com/", "https://linkedin.com/"],
            }),
          }}
        />
      </body>
    </html>
  );
}
