import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "FoodBuck",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-foodbuck-black text-white antialiased">
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
