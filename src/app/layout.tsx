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

cron.schedule(
  "0 4,16 * * *", //  run 4:00 AM & 4:00 PM
  async () => {
    await startScrapingAndSaving();
    console.log("Starting searching and saving...");
  },
  {
    timezone: "Asia/Kolkata",
  }
);
// cron.schedule(
//   "0 * * * *", // Change the cron expression to run every hour
//   async () => {
//     await startScrapingAndSaving();
//     console.log("Starting searching and saving...");
//   },
//   {
//     timezone: "Asia/Kolkata"
//   }
// );

const inter = Inter({ subsets: ["latin"] });

const meta = {
  title: "Blog",
  description: "blogs",
  image: "",
  siteName: "",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dummyblog.com"),
  title: {
    default: "Dummy Blog",
    template: `%s | Dummy blog`,
  },
  description: "This is the description of dummy blog",
  verification: {
    google: "google-site-verification=878787878",
  },
  openGraph: {
    title: "Next.js",
    description: "The React Framework for the Web",
    url: "https://nextjs.org",
    siteName: "Next.js",
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
    title: "Next.js",
    description: "The React Framework for the Web",
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
    title: "Apple Web App",
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
  category: "technology",
  other: {
    custom: ["meta1", "meta2"],
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
        <link rel="manifest" href="/manifest.json" />
        <script id="schema-org" type="application/ld+json">
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
        </script>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
