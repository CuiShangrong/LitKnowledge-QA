import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LitKnowledge-QA",
  description: "A local literature folder and source-grounded QA system."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
