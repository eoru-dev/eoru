import type { Metadata } from "next";
import { IBM_Plex_Mono, VT323 } from "next/font/google";
import "@/styles/globals.css";

const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: "400",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "George Zhu - Software Engineer",
  description: "My portfolio site",
  icons: [{ rel: "icon", url: "/icon.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexMono.variable} ${vt323.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
