import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Content from "@/components/layout/content";
import { SessionProvider, useSession } from "next-auth/react";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
const inter = Inter({ subsets: ["latin"] });
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "BaiseHub",
  description: "BaiseHub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <body className={inter.className}>
          <div className="bg-white w-full h-fit min-h-screen flex flex-col">
            <Header />
            <Content>{children}</Content>
            <Footer />
          </div>
          <Toaster />
        </body>
      </SessionProvider>
      <GoogleAnalytics gaId="G-CQHL0PZBRG" />
    </html>
  );
}
