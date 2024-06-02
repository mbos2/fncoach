import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fitness - Nutritions Coach",
  description: "Coach that will help you to reach your fitness goals, or to improve your nutrition habits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ChakraProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ChakraProvider>
  );
}
