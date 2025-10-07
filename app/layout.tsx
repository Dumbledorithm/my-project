import type { Metadata } from "next";
import { Inter,Geist } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});


const geist = Geist({
  subsets:["latin"],
})



export const metadata: Metadata = {
  title: "Shardendu Mishra - Portfolio",
  description: "A showcase of my work, skills, and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
