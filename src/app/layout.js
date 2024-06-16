import { Inter } from "next/font/google";
import "./app.css";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DevEleven",
  description: "DevEleven Team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="logo_32.png" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
