import Button from "../button";
import Link from "../link";
import GithubIcon from "../icons/github-icon";
import { ComponentProps } from "react";

export default function GithubButton({
  ...props
}: ComponentProps<typeof Link>) {
  return (
    <Button as={Link} draggable={false} {...props}>
      <span className="hidden font-semibold sm:inline">Github</span>
      <GithubIcon className="fill-primary-50 block size-6 p-0.5 sm:hidden" />
    </Button>
  );
}
