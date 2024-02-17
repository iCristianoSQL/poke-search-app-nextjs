import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";
import { TextProvider } from "@/contexts/SearchContext";

export const metadata: Metadata = {
  title: "Pokedex",
  description: "Pokemon Pokedex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="flex flex-col justify-between">
        <TextProvider>
          <Header />
          {children}
          <Footer />
        </TextProvider>
      </body>
    </html>
  );
}
