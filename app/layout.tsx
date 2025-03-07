import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import { cn } from "@/lib/utils";
import "./globals.css";
import QueryProvider from "@/components/Providers/QueryProvider";

export const metadata: Metadata = {
  title: "Convo | Language Learning",
  description: "Speech focused language learning",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryProvider>
      <html lang="en" className="light">
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </head>
        <body
          className={cn(
            "grainy flex min-h-screen flex-col font-sans antialiased",
            GeistSans.className,
          )}
        >
          {children}
        </body>
      </html>
    </QueryProvider>
  );
}
