"use client";

import Image from "next/image";
import Background from "./background";
import clsx from "clsx";
import LinkedinIcon from "./icons/linkedin-icon";
import GithubIcon from "./icons/github-icon";
import CVIcon from "./icons/cv-icon";
import Link from "./link";
import NextLink from "next/link";
import { FlickeringGrid } from "./flickering-grid";
import { useState, useEffect } from "react";
import Button from "./button";
import List from "./list";
import Section from "./section";
import GraduationCapIcon from "./icons/graduation-cap-icon";
import HammerAndWrenchIcon from "./icons/hammer-and-wrench-icon";
import BriefcaseIcon from "./icons/briefcase-icon";
import HomeIcon from "./icons/home";

const about = [
  "Hey, I'm a software developer focused on game programming and frontend development.",
  "I enjoy solving challenges and creating polished, enjoyable user experiences.",
  "Feel free to take a look around my portfolio website, or click on the links above to get in touch!",
];
const languages = ["C++", "C#", "TypeScript"];
const tools = ["Next.js", "Unity", "Unreal Engine"];

export default function Home() {
  const [styles, setStyles] = useState<CSSStyleDeclaration | null>(null);

  useEffect(() => {
    setStyles(getComputedStyle(document.documentElement));
  }, []);

  return (
    <div className="relative flex h-screen w-screen items-center justify-center p-4">
      <Background />

      <div
        className={clsx(
          "relative flex max-h-full w-full max-w-3xl flex-col justify-between gap-2 overflow-hidden",
          "shadow-primary-100 shadow-[0_0_10px]",
          "from-primary-300/90 to-primary-400/90 bg-radial to-70%",
        )}
      >
        <div className="from-primary-500 via-primary-500 to-primary-100 h-8 shrink-0 bg-gradient-to-b via-65%">
          <div className="animate-light shadow-primary-100 h-full w-full opacity-20 shadow-[0_0_2px_2px,0_0_4px_4px,0_0_8px_8px,0_0_16px_16px,0_0_32px_32px,0_0_64px_64px]" />
        </div>

        <div className="flex h-full w-full flex-col gap-4 overflow-y-scroll p-3 sm:p-6">
          <div className="relative flex gap-4">
            <div
              className={clsx(
                "bg-primary-500/40 absolute w-full",
                "font-pixel pointer-events-none text-6xl text-transparent sm:text-7xl md:text-8xl",
              )}
            >
              George Zhu
            </div>

            <Image
              src="/cat.gif"
              width="0"
              height="0"
              draggable={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={clsx(
                "z-1 h-auto w-1/3 shrink-0 object-contain",
                "hidden sm:block",
              )}
              alt="cat profile image"
              unoptimized
              priority
            />

            <div className="z-1 flex w-full flex-col gap-2 overflow-x-hidden px-2">
              <div
                className={clsx(
                  "font-pixel relative",
                  "text-6xl sm:text-7xl md:text-8xl",
                )}
              >
                <div className="text-scanlines">George Zhu</div>
                <div className="text-primary-100 pointer-events-none absolute -bottom-1 -z-1">
                  George Zhu
                </div>
              </div>
              <div
                className={clsx(
                  "text-primary-50 font-semibold",
                  "text-lg sm:text-xl md:text-2xl",
                )}
              >
                Software Developer
              </div>
              <div className="drop-shadow-primary-100 flex gap-2 drop-shadow-[0_0_3px]">
                <NextLink href="/resume-george-zhu.pdf">
                  <CVIcon className="fill-primary-50 size-5 cursor-pointer transition-colors duration-150 hover:fill-white" />
                </NextLink>
                <Link href="https://github.com/eoru-dev">
                  <GithubIcon className="fill-primary-50 size-5 cursor-pointer transition-colors duration-150 hover:fill-white" />
                </Link>
                <Link href="https://www.linkedin.com/in/g-zhu/">
                  <LinkedinIcon className="fill-primary-50 size-5 cursor-pointer transition-colors duration-150 hover:fill-white" />
                </Link>
              </div>
              <div className="relative flex-1">
                <FlickeringGrid
                  flickerChance={0.2}
                  maxOpacity={0.5}
                  gridGap={4}
                  squareSize={8}
                  color={styles?.getPropertyValue("--color-primary-50")}
                />
              </div>
            </div>
          </div>

          <div className="flex h-full flex-col gap-2 sm:flex-row">
            <Section className="w-full" title="About">
              {about.map((item, idx) => (
                <div key={idx} className="text-primary-50 p-2 font-semibold">
                  {item}
                </div>
              ))}
            </Section>

            <div className="flex w-full flex-col gap-2">
              <Section title="Languages" className="h-full">
                <List
                  items={languages}
                  className="text-primary-50 font-semibold"
                />
              </Section>

              <Section title="Tools" className="h-full">
                <List items={tools} className="text-primary-50 font-semibold" />
              </Section>
            </div>
          </div>
          <hr className="bg-primary-50/50 shadow-primary-50/25 my-2 h-0.5 border-t-0 shadow-[0_0_2px_1px]" />

          <div className="font-pixel flex w-full items-center justify-center gap-2 text-lg sm:gap-6 sm:text-2xl">
            <Button>
              <span className="hidden sm:inline">Home</span>
              <HomeIcon className="fill-primary-50 block size-6 p-px sm:hidden" />
            </Button>
            <Button>
              <span className="hidden sm:inline">Experience</span>
              <BriefcaseIcon className="fill-primary-50 block size-6 sm:hidden" />
            </Button>
            <Button>
              <span className="hidden sm:inline">Projects</span>
              <HammerAndWrenchIcon className="fill-primary-50 block size-6 p-0.5 sm:hidden" />
            </Button>
            <Button>
              <span className="hidden sm:inline">Education</span>
              <GraduationCapIcon className="fill-primary-50 block size-6 sm:hidden" />
            </Button>
          </div>
        </div>

        <div className="from-primary-500 via-primary-500 to-primary-100 h-8 shrink-0 bg-gradient-to-t via-65%">
          <div className="animate-light h-full w-full shadow-[0_0_2px_2px_var(--color-primary-50),0_0_4px_4px_var(--color-primary-50),0_0_8px_8px_var(--color-primary-100),0_0_16px_16px_var(--color-primary-100),0_0_32px_32px_var(--color-primary-100),0_0_64px_64px_var(--color-primary-100)]" />
        </div>
      </div>
    </div>
  );
}
