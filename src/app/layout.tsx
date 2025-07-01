import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./component/Header";
import { SessionProvider } from "next-auth/react";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TemuDataku - Learn Data Science",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
        
        <main className="min-h-screen bg-gray-200">
          < Header />
          <div className="px-10 sm:px-16 lg:px-24 xl:px-32 pb-30">
            {children}
          </div>
        </main>
        </Providers>
      </body>
    </html>
  );
}
