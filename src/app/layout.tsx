import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Pages/Layout/Header";
import "../assets/css/header.css";
import "../assets/css/responsive.css";
import "../assets/css/dark-theme.css";
import "../assets/css/footer.css";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "@/components/Pages/Layout/Footer";
import BootstrapClient from "@/components/bootstrapClient";

const inter = Inter({ subsets: ["latin"] });

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="theme-light">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flat-ui/2.3.0/css/flat-ui.min.css"
          rel="stylesheet"
        />
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
