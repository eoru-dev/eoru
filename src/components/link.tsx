import { AnchorHTMLAttributes } from "react";

export default function Link({
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}
