import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Nav } from "./components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "List Challenge",
  description: "Project to generate a list based on the response",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
