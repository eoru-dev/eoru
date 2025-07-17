import { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import Tag from "./tag";

export default function Showcase({
  title,
  subtitle = "",
  year = "",
  tags = [],
  icon,
  buttons = [],
  className,
  children,
  ...props
}: {
  title: string;
  subtitle?: string;
  year?: string;
  tags?: string[];
  icon: ReactNode;
  buttons?: ReactNode[];
} & ComponentProps<"div">) {
  return (
    <section
      className={cn(
        "from-primary-500/65 via-primary-500/65 to-primary-500/40 bg-gradient-to-b via-30%",
        "flex w-full gap-2",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "hidden sm:flex",
          "shrink-0 items-center p-2",
          "from-primary-100/60 via-primary-100/60 to-primary-100/90 bg-gradient-to-t via-70% shadow-[_inset_0_0_5px_5px_var(--color-primary-100),0_0_4px_1px_var(--color-primary-500)]",
        )}
      >
        {icon}
      </div>

      <div className="flex w-full flex-col overflow-auto">
        <div
          className={cn(
            "flex items-center justify-between gap-1 px-1.5 py-0.5",
            "from-primary-100/60 via-primary-100/60 to-primary-100/80 bg-gradient-to-r via-70% shadow-[_inset_0_0_5px_5px_var(--color-primary-100),0_0_4px_1px_var(--color-primary-500)]",
            "font-pixel text-xl sm:text-2xl",
          )}
        >
          <div className="flex items-center gap-2">
            <div className="flex sm:hidden">{icon}</div>
            <div>{title}</div>
            <div className="text-primary-50 mt-1 ml-1 hidden tracking-tight sm:inline sm:text-base">
              {subtitle}
            </div>
          </div>
          <div className="text-primary-50 mt-1 ml-1 hidden text-base tracking-tight sm:inline">
            {year}
          </div>
        </div>

        <div
          className={cn(
            "text-primary-50 flex h-full w-full gap-1 p-1.5 font-semibold",
            "text-xs sm:text-sm",
          )}
        >
          <div className="flex w-full flex-col justify-between gap-2 overflow-auto">
            {children}

            <div className="flex gap-1 overflow-x-scroll text-xs">
              {tags.map((tag, idx) => (
                <Tag key={idx}>{tag}</Tag>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">{buttons}</div>
        </div>
      </div>
    </section>
  );
}
