import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./NavBar";

export const metadata: Metadata = {
  title: "Med Bro",
  description: "A medical recommendation system",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* NavBar with fade-in effect */}
        <div className="animate-fade-in">
          <NavBar />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}