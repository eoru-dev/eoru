import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";

export default function LinkButton({
  className,
  children,
  ...props
}: Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & LinkProps) {
  return (
    <Link
      className={cn(
        "cursor-pointer",
        "px-3 py-1 sm:px-6",
        "transition duration-150 ease-in-out",
        // default - light
        "from-primary-100/80 to-primary-500/30 bg-gradient-to-t",
        "shadow-[_inset_0_0_5px_2px_var(--color-primary-100),0_0_5px_2px_var(--color-primary-500)]",
        // hover - lighter
        "hover:from-primary-50/50 hover:to-primary-400/40",
        "hover:shadow-[_inset_0_0_5px_3px_var(--color-primary-100),0_0_5px_3px_var(--color-primary-500)]",
        // active - darker
        "active:from-primary-200/60 active:to-primary-500/30",
        "active:shadow-[_inset_0_0_5px_5px_var(--color-primary-100),0_0_2px_2px_var(--color-primary-500)]",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
