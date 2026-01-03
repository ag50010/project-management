import type { Metadata } from "next";
import { MoodProvider } from "@/components/providers/mood-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Motive — Work that feels good",
  description: "A project management app that makes work feel like play",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <MoodProvider>{children}</MoodProvider>
      </body>
    </html>
  );
}
