"use client";

import clsx from "clsx";
import { FlickeringGrid } from "../flickering-grid";
import { useState, useEffect } from "react";
import Navigation from "../navigation";

export default function Projects() {
  const [styles, setStyles] = useState<CSSStyleDeclaration | null>(null);

  useEffect(() => {
    setStyles(getComputedStyle(document.documentElement));
  }, []);

  return (
    <div className="flex h-full flex-col gap-4 p-3 sm:p-6">
      <div className="relative flex gap-4">
        <div className="z-1 flex w-full flex-col gap-2 overflow-x-hidden px-2">
          <div
            className={clsx(
              "font-pixel bg-primary-500/40 relative",
              "text-6xl sm:text-7xl md:text-8xl",
            )}
          >
            <div className="text-scanlines">Projects</div>
            <div className="text-primary-100 pointer-events-none absolute -bottom-1 -z-1">
              Projects
            </div>
          </div>
          <div className="relative min-h-8 flex-1">
            <FlickeringGrid
              flickerChance={0.2}
              maxOpacity={0.5}
              gridGap={4}
              squareSize={8}
              color={styles?.getPropertyValue("--color-primary-50")}
            />
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-center font-semibold">
        Page to-do!
      </div>
      <hr className="bg-primary-50/50 shadow-primary-50/25 my-2 h-0.5 border-t-0 shadow-[0_0_2px_1px]" />

      <Navigation />
    </div>
  );
}
