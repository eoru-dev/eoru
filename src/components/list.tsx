import { ComponentProps, ReactNode } from "react";
import SparkleIcon from "./icons/sparkle-icon";
import { cn } from "@/lib/utils";

export default function List(
  props: { items: ReactNode[] } & ComponentProps<"ul">,
): ReactNode;

export default function List<T>(
  props: {
    items: T[];
    renderItem: (item: T) => ReactNode;
  } & ComponentProps<"ul">,
): ReactNode;

export default function List<T>({
  items,
  renderItem,
  className,
}: {
  items: T[];
  renderItem?: (item: T) => ReactNode;
} & ComponentProps<"ul">): ReactNode {
  return (
    <ul className={cn("list-none space-y-1 p-1 pl-3", className)}>
      {items.map((item, idx) => (
        <li key={idx} className="flex items-center gap-2">
          <SparkleIcon className="fill-primary-50/80 size-3" />
          {renderItem ? renderItem(item) : (item as ReactNode)}
        </li>
      ))}
    </ul>
  );
}
