import { cn } from "@/lib/utils";
import { ComponentPropsWithRef } from "react";

export default function Title({
  children,
  className,
  ...props
}: ComponentPropsWithRef<"div">) {
  return (
    <div
      className={cn(
        "font-pixel relative",
        "text-5xl sm:text-7xl md:text-8xl",
        className,
      )}
      {...props}
    >
      <div className="text-primary-100 pointer-events-none absolute -bottom-1">
        {children}
      </div>
      <div className="text-scanlines relative">{children}</div>
    </div>
  );
}
