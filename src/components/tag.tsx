import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export default function Tag({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "px-1 py-0.5 text-nowrap",
        "from-primary-200/40 via-primary-200/40 to-primary-200/70 bg-gradient-to-t via-70% shadow-[_inset_0_0_3px_3px_var(--color-primary-200),0_0_4px_1px_var(--color-primary-500)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
