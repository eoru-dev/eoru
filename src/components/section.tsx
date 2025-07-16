import { ComponentProps } from "react";
import SparkleIcon from "./icons/sparkle-icon";
import { cn } from "@/lib/utils";

export default function Section({
  title,
  className,
  children,
  ...props
}: {
  title: string;
} & ComponentProps<"div">) {
  return (
    <section
      className={cn(
        "from-primary-500/65 via-primary-500/65 to-primary-500/40 bg-gradient-to-b via-30%",
        "text-sm sm:text-base",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "flex items-center gap-2 px-2 py-1",
          "from-primary-100/60 via-primary-100/60 to-primary-100/90 bg-gradient-to-r via-70% shadow-[_inset_0_0_5px_5px_var(--color-primary-100),0_0_5px_2px_var(--color-primary-500)]",
        )}
      >
        <SparkleIcon className="fill-primary-50/80 size-5" />
        <div className="font-pixel text-3xl sm:text-4xl">{title}</div>
      </div>
      {children}
    </section>
  );
}
