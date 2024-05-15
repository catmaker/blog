import type { Metadata } from "next";
import "./globals.css";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "catmaker blog",
  description: "안녕하세요 catmaker 블로그입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-bold">
      <body className="w-4/5 mx-auto">
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
