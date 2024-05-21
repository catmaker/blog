import type { Metadata } from "next";
import "./globals.css";

import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import AuthContext from "../context/AuthContext";
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
      <body className="w-full ml-8 mr-8 lg:mx-auto">
        <AuthContext>
          <header className="w-4/5 lg:mx-auto sticky top-0 z-100">
            <Nav></Nav>
          </header>
          <article className="w-4/5 lg:mx-auto">{children}</article>
          <footer className="w-4/5 lg:mx-auto">
            <Footer></Footer>
          </footer>
        </AuthContext>
      </body>
    </html>
  );
}
