import type { Metadata } from "next";

import "./globals.css";
import Provider from "@/lib/providers";
import { Toaster } from "@/components/ui/sonner";
import { poppinsSans, spaceMono } from "@/app/fonts/fonts";
import Dashboard from "@/app/components/dashboard/dashboard";

export const metadata: Metadata = {
  title: "Portfolio Admin",
  description:
    "This frontend application is used for administration of the content presented in the portfolio website for Andy Frith.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppinsSans.variable} ${spaceMono.variable} antialiased`}
      >
        <Provider>
          <Dashboard>
            {children}
            <Toaster />
          </Dashboard>
        </Provider>
      </body>
    </html>
  );
}
