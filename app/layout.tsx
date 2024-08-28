import type { Metadata } from "next";
import "./styles/globals.scss";
import config from "@config/config.json"
import Head from "@partials/Head";
import Header from "@partials/Header";


export const metadata: Metadata = config.metadata || {};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head />
      <body>
      <Header/>
        {children}</body>
    </html>
  );
}
