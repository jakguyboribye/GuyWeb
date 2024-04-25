import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "jakguyboribye",
  description: "Jakguy Boriboon's website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <ChakraProvider>
      <NavBar />
      <div className={inter.className}>{children}</div>
      </ChakraProvider>
      </body>
    </html>
  );
}
