// https://github.com/motiondivision/motion/discussions/1884

"use client";

import { ReactNode, useCallback, useRef, useState } from "react";
import { LayoutTransition } from "./layout-transition";

export default function HeightTransition({
  children,
}: {
  children?: ReactNode;
}) {
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
  );
}
