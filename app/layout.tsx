import type { Metadata } from "next";
// BƯỚC 1: Import Instrument_Serif từ Google Fonts...
import { Instrument_Serif } from "next/font/google"; 
// ...và import next/font/local để tải font từ file
import localFont from "next/font/local"; 
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

// BƯỚC 2: Cấu hình font Satoshi từ file cục bộ
const fontSatoshi = localFont({
  src: './fonts/Satoshi-Variable.ttf', // Đường dẫn đến file font
  display: 'swap',
  variable: '--font-satoshi', // Đặt tên biến CSS
});

// Cấu hình Instrument Serif vẫn giữ nguyên vì nó có trên Google Fonts
const fontInstrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  display: 'swap',
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
});

export const metadata: Metadata = {
  title: "AI và Con người – Đối tác hay Đối thủ?",
  description: "Phân tích mối quan hệ giữa AI và con người dưới góc nhìn phép biện chứng duy vật.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      {/* BƯỚC 3: Áp dụng các biến font vào thẻ <body>. Cấu trúc không thay đổi. */}
      <body
        className={cn(
          "font-sans antialiased",
          fontSatoshi.variable, 
          fontInstrumentSerif.variable 
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}