import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Astronomy Client - Premium Minecraft Utility",
  description: "A powerful Minecraft client for 1.21.11 with advanced features and clean design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
