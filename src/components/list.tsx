"use client";

import { HTMLAttributes, ReactNode } from "react";
import SparkleIcon from "./icons/sparkle-icon";
import { cn } from "@/lib/utils";

export default function List(
  props: { items: ReactNode[] } & HTMLAttributes<HTMLUListElement>,
): ReactNode;

export default function List<T>(
  props: {
    items: T[];
    renderItem: (item: T) => ReactNode;
  } & HTMLAttributes<HTMLUListElement>,
): ReactNode;

export default function List<T>({
  items,
  renderItem,
  className,
}: {
  items: T[];
  renderItem?: (item: T) => ReactNode;
} & HTMLAttributes<HTMLUListElement>): ReactNode {
  return (
    <ul className={cn("list-none space-y-1 p-1 pl-3", className)}>
      {items.map((item, idx) => (
        <li key={idx} className="flex items-center gap-3">
          <SparkleIcon className="fill-primary-50/80 size-4" />
          {renderItem ? renderItem(item) : (item as ReactNode)}
        </li>
      ))}
    </ul>
  );
}
