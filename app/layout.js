// app/layout.js
import { ThemeProvider } from "./_component/themeProvider"; // Import your ThemeProvider
import { Geist, Geist_Mono } from "next/font/google";
import "./_styles/global.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Chidozie Nnam | Fullstack developer",
  description: "Delivering Solution Aligned With Latest Trend.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {/* Your ThemeProvider wraps the children */}
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
