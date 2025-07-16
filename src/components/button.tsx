import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, ElementType } from "react";

type LimitedElementType = Extract<
  ElementType,
  "button" | "a" | "span" | React.JSXElementConstructor<unknown>
>;

type ButtonProps<T extends LimitedElementType = "button"> =
  T extends LimitedElementType
    ? ComponentPropsWithoutRef<T> & { as?: T }
    : never;

export default function Button<T extends LimitedElementType = "button">({
  as = "button",
  className,
  children,
  ...props
}: ButtonProps<T>) {
  const Component = as;
  const disabled = "disabled" in props && !!props.disabled;

  return (
    <Component
      className={cn(
        "flex cursor-pointer items-center justify-center",
        "px-3 py-1 sm:px-6",
        "transition duration-150 ease-in-out",
        // default - light
        "from-primary-100/80 to-primary-500/30 bg-gradient-to-t",
        "shadow-[_inset_0_0_5px_2px_var(--color-primary-100),0_0_5px_2px_var(--color-primary-500)]",
        // hover - lighter
        !disabled && "hover:from-primary-50/50 hover:to-primary-400/40",
        !disabled &&
          "hover:shadow-[_inset_0_0_5px_3px_var(--color-primary-100),0_0_5px_3px_var(--color-primary-500)]",
        // active - darker
        !disabled && "active:from-primary-200/60 active:to-primary-500/30",
        !disabled &&
          "active:shadow-[_inset_0_0_5px_5px_var(--color-primary-100),0_0_2px_2px_var(--color-primary-500)]",
        "disabled:from-primary-100/40 disabled:cursor-default disabled:shadow-[_inset_0_0_1px_1px_var(--color-primary-100),0_0_5px_2px_var(--color-primary-500)]",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
