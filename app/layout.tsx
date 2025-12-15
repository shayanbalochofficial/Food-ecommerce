import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import { CartProvider } from "@/context-cart/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FoodBuck - Premium Restaurant Experience",
  description:
    "Discover excellence in cuisine at FoodBuck. Premium dining with bold flavors and unforgettable experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-foodbuck-black text-white antialiased">
        <CartProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster position="top-right" theme="dark" />
        </CartProvider>
      </body>
    </html>
  );
}
