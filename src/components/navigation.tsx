import GraduationCapIcon from "./icons/graduation-cap-icon";
import HammerAndWrenchIcon from "./icons/hammer-and-wrench-icon";
import BriefcaseIcon from "./icons/briefcase-icon";
import HomeIcon from "./icons/home";
import Button from "./button";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="font-pixel flex w-full items-center justify-center gap-2 text-lg sm:gap-6 sm:text-2xl">
      <Button as={Link} draggable={false} href="/">
        <span className="hidden sm:inline">Home</span>
        <HomeIcon className="fill-primary-50 block size-6 p-px sm:hidden" />
      </Button>
      <Button as={Link} draggable={false} href="/experience">
        <span className="hidden sm:inline">Experience</span>
        <BriefcaseIcon className="fill-primary-50 block size-6 sm:hidden" />
      </Button>
      <Button as={Link} draggable={false} href="/projects">
        <span className="hidden sm:inline">Projects</span>
        <HammerAndWrenchIcon className="fill-primary-50 block size-6 p-0.5 sm:hidden" />
      </Button>
      <Button as={Link} draggable={false} href="/education">
        <span className="hidden sm:inline">Education</span>
        <GraduationCapIcon className="fill-primary-50 block size-6 sm:hidden" />
      </Button>
    </nav>
  );
}
