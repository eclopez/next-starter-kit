import type { Metadata } from "next";
import Header from "@/components/Header";

import "@/styles/global.css";

export const metadata: Metadata = {
  title: "Next Starter Kit",
  description: "Starting point for Next.js projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
