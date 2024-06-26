import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({ subsets: ["latin"], variable: '--font-work-sans', weight: ['400', '600', '700'] });

export const metadata: Metadata = {
  title: "SketchEase",
  description: "Bring you creativity on page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.className} bg-zinc-950`}>
          {children}
        </body>
    </html>
  );
}
