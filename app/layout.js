import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aparoksha Event System",
  description: "Manage and register for events at Aparoksha",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          <main className="p-6">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}