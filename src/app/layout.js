import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dragon News - Latest Breaking News",
  description:
    "Stay updated with the latest breaking news, politics, technology, and more on Dragon News",
  keywords: "news, breaking news, politics, technology, business, sports",
  openGraph: {
    title: "Dragon News - Latest Breaking News",
    description: "Stay updated with the latest breaking news and stories",
    url: "https://dragon-news.com",
    siteName: "Dragon News",
    images: [
      {
        url: "https://dragon-news.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dragon News",
    description: "Latest breaking news and stories",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <main>{children}</main>
      </body>
    </html>
  );
}
