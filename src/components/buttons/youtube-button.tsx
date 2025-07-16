import Button from "../button";
import Link from "../link";
import { ComponentProps } from "react";
import YoutubeIcon from "../icons/youtube-icon";

export default function YoutubeButton({
  ...props
}: ComponentProps<typeof Link>) {
  return (
    <Button as={Link} draggable={false} {...props}>
      <span className="hidden font-semibold sm:inline">YouTube</span>
      <YoutubeIcon className="fill-primary-50 block size-6 p-0.5 sm:hidden" />
    </Button>
  );
}
