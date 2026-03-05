import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Dunstan Common — Independent Retirement Living in Alexandra, Central Otago",
  description:
    "Freehold homes for independent retirees aged 60+ in Alexandra. 46 homes, 2.1 hectares of shared reserve, secure storage. From $995,000. Register for priority access.",
  keywords: [
    "Retirement living Alexandra",
    "Freehold retirement village NZ",
    "Retirement living Central Otago",
    "Downsizing Alexandra",
    "Retirement homes Clyde",
    "Independent retirement living",
    "Freehold title homes NZ",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
