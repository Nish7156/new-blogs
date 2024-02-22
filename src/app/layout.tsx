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
  "0 4,16 * * *",//  run 4:00 AM & 4:00 PM
  async () => {
    await startScrapingAndSaving();
    console.log("Starting searching and saving...");
  },
  {
    timezone: "Asia/Kolkata"
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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dummyblog.com"),
  title: {
    default: "Dummy Blog",
    template: `%s | Dummy blog`
  },
  description: "This is the description of dummy blog",
  verification: {
    google: "google-site-verification=878787878"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="theme-light">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
