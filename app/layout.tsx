import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./palace-assets.css";
import "./poster-polish.css";
import "./result-polish.css";
import "./final-polish.css";
import "./visual-redesign.css";
import "./home-and-test-layout.css";
import "./home-reference.css";
import "./home-reference-polish.css";
import "./home-page-assets.css";
import "./test-page.css";

export const metadata: Metadata = {
  title: "深宫命格",
  description: "一场关于选择、情感与人心的宫廷命格体验。",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#16090b",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
