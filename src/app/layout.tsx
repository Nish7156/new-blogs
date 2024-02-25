import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Pages/Layout/Header";
import "../assets/css/header.css";
import "../assets/css/responsive.css";
import "../assets/css/dark-theme.css";
import "../assets/css/footer.css";
import "bootstrap/dist/css/bootstrap.css";
import "./style.scss";
import Footer from "@/components/Pages/Layout/Footer";
import BootstrapClient from "@/components/BootstrapClient";
import { scrapeAajTak, saveToDatabase } from "./backend/scraper";
import cron from "node-cron";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';

async function startScrapingAndSaving() {
  try {
    const scrapedData = await scrapeAajTak();
    await saveToDatabase(scrapedData);
    console.log("Scraping and saving completed.");
  } catch (error) {
    console.error("Error occurred during scraping:", error);
    process.exit(1);
  }
}

// cron.schedule(
//   "0 4,16 * * *", //  run 4:00 AM & 4:00 PM
//   async () => {
//     await startScrapingAndSaving();
//     console.log("Starting searching and saving...");
//   },
//   {
//     timezone: "Asia/Kolkata",
//   }
// );
cron.schedule(
  "0 * * * *",
  async () => {
    await startScrapingAndSaving();
    console.log("Starting searching and saving...");
  },
  {
    timezone: "Asia/Kolkata",
  }
);

const inter = Inter({ subsets: ["latin"] });

const meta = {
  title: "Tech Of India",
  description:
    "Welcome to Tech of India, your premier destination for insightful tech blogs tailored to the Indian audience. Explore cutting-edge innovations, expert reviews, and practical guides, all curated to empower and inform tech enthusiasts across India. Stay ahead of the curve with our diverse range of topics, from latest gadgets to emerging trends, as we delve deep into the dynamic world of technology, uniquely crafted for the Indian perspective. Join us as we unravel the limitless possibilities of the digital era, right here at Tech of India.",
  image: "",
  siteName: "https://techofindia.in",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://techofindia.in"),
  title: {
    default: meta?.title,
    template: `%s | ${meta?.title}`,
  },
  description: meta?.description,
  verification: {
    google: "google-site-verification=878787878",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: meta?.title,
    description: meta?.description,
    url: meta?.siteName,
    siteName: meta?.title,
    images: [
      {
        url: "https://nextjs.org/og.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png" },
      new URL("/icon.png", "https://example.com"),
      { url: "/icon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: ["/shortcut-icon.png"],
    apple: [
      { url: "/apple-icon.png" },
      { url: "/apple-icon-x3.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: meta?.title,
    description: meta.description,
    siteId: "1467726470533754880",
    creator: "@nextjs",
    creatorId: "1467726470533754880",
    images: ["https://nextjs.org/og.png"], // Must be an absolute URL
  },
  itunes: {
    appId: "myAppStoreID",
    appArgument: "myAppArgument",
  },
  appleWebApp: {
    title: meta.title,
    statusBarStyle: "black-translucent",
    startupImage: [
      "/assets/startup/apple-touch-startup-image-768x1004.png",
      {
        url: "/assets/startup/apple-touch-startup-image-1536x2008.png",
        media: "(device-width: 768px) and (device-height: 1024px)",
      },
    ],
  },
  alternates: {
    canonical: "https://nextjs.org",
    languages: {
      "en-US": "https://nextjs.org/en-US",
      "de-DE": "https://nextjs.org/de-DE",
    },
    media: {
      "only screen and (max-width: 600px)": "https://nextjs.org/mobile",
    },
    types: {
      "application/rss+xml": "https://nextjs.org/rss",
    },
  },
  appLinks: {
    ios: {
      url: "https://nextjs.org/ios",
      app_store_id: "app_store_id",
    },
    android: {
      package: "com.example.android/package",
      app_name: "app_name_android",
    },
    web: {
      url: "https://nextjs.org/web",
      should_fallback: true,
    },
  },
  category: "Technology",
  other: {
    custom: [
      "Gadgets",
      "Software",
      "Mobile Technology",
      "Internet of Things (IoT)",
      "Artificial Intelligence (AI)",
      "Robotics",
      "Gaming",
      "Cybersecurity",
      "Tech Industry News",
      "How-Tos and Guides",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="theme-light">
      <head>
        <meta name="theme-color" content="#ffff" />
        {/* <script id="schema-org" type="application/ld+json">
          {`
          {
            "@context": "http://schema.org",
            "@type": "Web-App",
            "headline": "${meta?.title}",
            "datePublished": "2023-11-14",
            "description": "${meta?.description}",
            "image": "${meta.image}",
            "publisher": {
              "@type": "Organization",
              "name": "${meta?.siteName}",
              "logo": {
                "@type": "ImageObject",
                "url": "${meta?.siteName}"
              }
            }
          }
        `}
        </script> */}
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENCE_API_KEY}`}
          crossOrigin="anonymous"
        ></script>
        <meta
          name="google-adsense-account"
          content={`${process.env.NEXT_PUBLIC_ADSENCE_API_KEY}`}
        ></meta>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
      </script>
    `,
          }}
        ></script>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
