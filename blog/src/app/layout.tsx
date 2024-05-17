import type { Metadata } from "next";
import "./globals.css";

import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import AuthContext from "./context/AuthContext";
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
        <AuthContext>
          <header className="sticky top-0 z-100">
            <Nav></Nav>
          </header>
          {children}
          <Footer></Footer>
        </AuthContext>
      </body>
    </html>
  );
}
