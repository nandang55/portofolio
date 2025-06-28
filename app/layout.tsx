import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LocalizationProvider } from "../hooks/useLocalization";
import { UserProvider } from './UserContext';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Supabase Next.js App",
  description: "A Next.js app with Supabase integration",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <UserProvider>
          <LocalizationProvider>
            {children}
          </LocalizationProvider>
        </UserProvider>
      </body>
    </html>
  );
}
