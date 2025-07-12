"use client";

import GraduationCapIcon from "./icons/graduation-cap-icon";
import HammerAndWrenchIcon from "./icons/hammer-and-wrench-icon";
import BriefcaseIcon from "./icons/briefcase-icon";
import HomeIcon from "./icons/home";
import LinkButton from "./link-button";

export default function Navigation() {
  return (
    <nav className="font-pixel flex w-full items-center justify-center gap-2 text-lg sm:gap-6 sm:text-2xl">
      <LinkButton href="/">
        <span className="hidden sm:inline">Home</span>
        <HomeIcon className="fill-primary-50 block size-6 p-px sm:hidden" />
      </LinkButton>
      <LinkButton href="/experience">
        <span className="hidden sm:inline">Experience</span>
        <BriefcaseIcon className="fill-primary-50 block size-6 sm:hidden" />
      </LinkButton>
      <LinkButton href="/projects">
        <span className="hidden sm:inline">Projects</span>
        <HammerAndWrenchIcon className="fill-primary-50 block size-6 p-0.5 sm:hidden" />
      </LinkButton>
      <LinkButton href="/education">
        <span className="hidden sm:inline">Education</span>
        <GraduationCapIcon className="fill-primary-50 block size-6 sm:hidden" />
      </LinkButton>
    </nav>
  );
}
