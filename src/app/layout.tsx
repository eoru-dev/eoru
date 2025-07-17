import type { Metadata } from "next";
import { IBM_Plex_Mono, VT323 } from "next/font/google";
import "@/styles/globals.css";
import Background from "@/components/background";
import HeightTransition from "@/components/height-transition";
import clsx from "clsx";

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
  title: "George Zhu - Software Developer",
  description:
    "I'm a software developer focused on game programming and frontend development. I enjoy solving challenges and creating polished, enjoyable user experiences.",
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
        <div className="relative flex h-screen w-screen items-center justify-center p-4">
          <Background />

          <div
            className={clsx(
              "relative flex max-h-full w-full max-w-3xl flex-col justify-between overflow-hidden",
              "shadow-primary-100 shadow-[0_0_10px]",
              "from-primary-300/90 to-primary-400/90 bg-radial to-70%",
            )}
          >
            <div className="from-primary-500 via-primary-500 to-primary-100 z-10 h-8 shrink-0 bg-gradient-to-b via-65%" />
            <div className="animate-light w-full shadow-[0_0_2px_2px_var(--color-primary-50),0_0_4px_4px_var(--color-primary-100),0_0_8px_8px_var(--color-primary-100),0_0_16px_16px_var(--color-primary-100),0_0_32px_32px_var(--color-primary-100),0_0_64px_64px_var(--color-primary-100)]" />

            <HeightTransition>{children}</HeightTransition>

            <div className="animate-light w-full shadow-[0_0_2px_2px_var(--color-primary-50),0_0_4px_4px_var(--color-primary-100),0_0_8px_8px_var(--color-primary-100),0_0_16px_16px_var(--color-primary-100),0_0_32px_32px_var(--color-primary-100),0_0_64px_64px_var(--color-primary-100)]" />
            <div className="from-primary-500 via-primary-500 to-primary-100 z-10 h-8 shrink-0 bg-gradient-to-t via-65%" />
          </div>
        </div>
      </body>
    </html>
  );
}
