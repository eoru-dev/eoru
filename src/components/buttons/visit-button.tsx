import { ComponentProps } from "react";
import Button from "../button";
import ExternalLinkIcon from "../icons/external-link-icon";
import Link from "../link";

export default function VisitButton({
  text = "Visit",
  ...props
}: { text?: string } & ComponentProps<typeof Link>) {
  return (
    <Button
      as={Link}
      draggable={false}
      href="https://voidtable.eoru.dev/"
      {...props}
    >
      <span className="hidden font-semibold sm:inline">{text}</span>
      <ExternalLinkIcon className="text-primary-50 block size-6 sm:hidden" />
    </Button>
  );
}
