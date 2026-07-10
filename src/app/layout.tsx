import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({ 
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-jp"
});

export const metadata: Metadata = {
  title: "和クッキー | プレミアム日本のクッキー",
  description: "最高級の日本のクッキーで、純粋な至福の瞬間を味わってください。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.className} antialiased selection:bg-[#8B5A2B] selection:text-white`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
