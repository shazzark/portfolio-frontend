// app/layout.js
import { ThemeProvider } from "./_component/themeProvider"; // Import your ThemeProvider
import { Geist, Geist_Mono, Oswald } from "next/font/google";

import "./_styles/global.css";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata = {
  title: "Chidozie Nnam | Full-Stack Developer",
  description:
    "Full-stack developer focused on digital products, thoughtful UI design, and reliable engineering from interface to infrastructure.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} font-sans antialiased`}
      >
        {/* Your ThemeProvider wraps the children */}
        <Providers>
          <ThemeProvider>{children}</ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
