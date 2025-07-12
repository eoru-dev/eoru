// https://github.com/motiondivision/motion/discussions/1884

"use client";

import Background from "./background";
import clsx from "clsx";
import { ReactNode, useCallback, useRef, useState } from "react";
import { LayoutTransition } from "./layout-transition";

export default function Wrapper({ children }: { children?: ReactNode }) {
  const [height, setHeight] = useState<number | "auto">("auto");
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  const containerRef = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      resizeObserverRef.current = new ResizeObserver((entries) => {
        const observedHeight = entries?.[0]?.contentRect?.height;
        setHeight(observedHeight ?? "auto");
      });
      resizeObserverRef.current.observe(node);
    } else if (resizeObserverRef.current) {
      // disconnect observer when the node is unmounted to prevent memory leaks
      resizeObserverRef.current.disconnect();
    }
  }, []);

  return (
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

        <LayoutTransition
          style={{ height }}
          initial={{
            opacity: 0,
            height,
            transition: { duration: 0.25, ease: "easeOut" },
          }}
          animate={{
            height,
            opacity: 1,
            transition: {
              height: { duration: 0.45, ease: "easeInOut" },
              opacity: { delay: 0.45, duration: 0.25, ease: "easeOut" },
            },
          }}
          exit={{
            opacity: 0,
            height,
            transition: { duration: 0.25, ease: "easeOut" },
          }}
          className="overflow-y-scroll"
        >
          <div ref={containerRef}>{children}</div>
        </LayoutTransition>

        <div className="animate-light w-full shadow-[0_0_2px_2px_var(--color-primary-50),0_0_4px_4px_var(--color-primary-100),0_0_8px_8px_var(--color-primary-100),0_0_16px_16px_var(--color-primary-100),0_0_32px_32px_var(--color-primary-100),0_0_64px_64px_var(--color-primary-100)]" />
        <div className="from-primary-500 via-primary-500 to-primary-100 z-10 h-8 shrink-0 bg-gradient-to-t via-65%" />
      </div>
    </div>
  );
}
