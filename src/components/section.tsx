"use client";

import { HTMLAttributes } from "react";
import SparkleIcon from "./icons/sparkle-icon";
import { cn } from "@/lib/utils";

export default function Section({
  title,
  className,
  children,
}: {
  title: string;
} & HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        "from-primary-500/65 via-primary-500/65 to-primary-500/40 bg-gradient-to-b via-30%",
        "text-sm sm:text-base",
        className,
      )}
    >
      <div
        className={cn(
          "from-primary-100/60 via-primary-100/60 to-primary-100/90 flex items-center gap-2 bg-gradient-to-r via-70% px-2 py-1",
          "shadow-[_inset_0_0_5px_5px_var(--color-primary-100),0_0_5px_2px_var(--color-primary-500)]",
        )}
      >
        <SparkleIcon className="fill-primary-50/80 size-5" />
        <div className="font-pixel text-3xl sm:text-4xl">{title}</div>
      </div>
      {children}
    </section>
  );
}
