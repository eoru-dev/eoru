import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

export default function Button({
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "cursor-pointer px-6 py-1",
        "transition duration-100 ease-in-out",
        // default - light
        "from-primary-100/80 to-primary-500/30 bg-gradient-to-t",
        "shadow-[_inset_0_0_5px_2px_var(--color-primary-100),0_0_5px_2px_var(--color-primary-500)]",
        // hover - lighter
        "hover:from-primary-50/30 hover:to-primary-400/50",
        "hover:shadow-[_inset_0_0_5px_3px_var(--color-primary-100),0_0_5px_3px_var(--color-primary-500)]",
        // active - darker
        "active:from-primary-200/60 active:to-primary-500/30",
        "active:shadow-[_inset_0_0_5px_5px_var(--color-primary-100),0_0_2px_2px_var(--color-primary-500)]",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
