"use client";

import Background from "./background";
import clsx from "clsx";
import { ReactNode } from "react";

export default function Wrapper({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center p-4">
      <Background />

      <div
        className={clsx(
          "relative flex max-h-full w-full max-w-3xl flex-col justify-between gap-2 overflow-hidden",
          "shadow-primary-100 shadow-[0_0_10px]",
          "from-primary-300/90 to-primary-400/90 bg-radial to-70%",
        )}
      >
        <div className="from-primary-500 via-primary-500 to-primary-100 h-8 shrink-0 bg-gradient-to-b via-65%">
          <div className="animate-light shadow-primary-100 h-full w-full opacity-20 shadow-[0_0_2px_2px,0_0_4px_4px,0_0_8px_8px,0_0_16px_16px,0_0_32px_32px,0_0_64px_64px]" />
        </div>

        <div className="h-full overflow-y-scroll">{children}</div>

        <div className="from-primary-500 via-primary-500 to-primary-100 h-8 shrink-0 bg-gradient-to-t via-65%">
          <div className="animate-light h-full w-full shadow-[0_0_2px_2px_var(--color-primary-50),0_0_4px_4px_var(--color-primary-50),0_0_8px_8px_var(--color-primary-100),0_0_16px_16px_var(--color-primary-100),0_0_32px_32px_var(--color-primary-100),0_0_64px_64px_var(--color-primary-100)]" />
        </div>
      </div>
    </div>
  );
}
