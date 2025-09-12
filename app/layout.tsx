// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "vietnamese"], display: "swap" });

export const metadata: Metadata = {
  title: "AI và Con người",
  description: "Góc nhìn từ phép biện chứng duy vật",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Áp dụng font chữ Inter cho toàn bộ trang */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}