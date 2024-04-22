import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { getServerSession } from "next-auth";
import  SessionProvider  from "@/Utils/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paws&Play",
  description: "pet store app",
  keywords: ["paws", "play","pet", "cats", "dogs", "cute", "house", "guard", "joy"]
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
       <SessionProvider session={session}>
       {children}
       </SessionProvider>
        </body>
    </html>
  );
}
