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

const languages = ["C++", "C#", "TypeScript"];
const tools = ["Next.js", "Unity"];

export default function Home() {
  const [styles, setStyles] = useState<CSSStyleDeclaration | null>(null);

  useEffect(() => {
    setStyles(getComputedStyle(document.documentElement));
  }, []);

  return (
    <div className="relative flex min-h-screen w-screen items-center justify-center p-2">
      <Background />

      <div
        className={clsx(
          "relative flex h-[700px] w-full max-w-3xl flex-col justify-between gap-2 overflow-hidden",
          "shadow-primary-100 shadow-[0_0_10px]",
          "from-primary-300/90 to-primary-400/90 bg-radial to-70%",
        )}
      >
        <div className="from-primary-500 via-primary-500 to-primary-100 h-8 bg-gradient-to-b via-65%">
          <div className="shadow-primary-100 h-full w-full opacity-20 shadow-[0_0_2px_2px,0_0_4px_4px,0_0_8px_8px,0_0_16px_16px,0_0_32px_32px,0_0_64px_64px]" />
        </div>

        <div className="flex h-full w-full flex-col gap-4 p-6">
          <div className="relative flex gap-4">
            <div
              className={clsx(
                "bg-primary-500/40 absolute w-full",
                "h-18 sm:h-24",
              )}
            />
            <Image
              src="/cat.gif"
              width="0"
              height="0"
              draggable={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={clsx(
                "relative h-auto w-1/3 shrink-0 object-contain",
                "hidden sm:block",
              )}
              alt="cat profile image"
              unoptimized
              priority
            />

            <div className="flex w-full flex-col gap-2 px-2">
              <div
                className={clsx(
                  "font-pixel relative text-shadow-[0_6px_0_var(--color-primary-100)]",
                  "text-7xl sm:text-8xl",
                )}
              >
                George Zhu
              </div>
              <div className="text-primary-50 text-2xl font-semibold">
                Software Developer
              </div>
              <div className="drop-shadow-primary-100 flex gap-2 drop-shadow-[0_0_3px]">
                <NextLink href="/resume-george-zhu.pdf">
                  <CVIcon className="fill-primary-50 size-4 cursor-pointer transition-colors duration-150 hover:fill-white" />
                </NextLink>
                <Link href="https://github.com/eoru-dev">
                  <GithubIcon className="fill-primary-50 size-4 cursor-pointer transition-colors duration-150 hover:fill-white" />
                </Link>
                <Link href="https://www.linkedin.com/in/g-zhu/">
                  <LinkedinIcon className="fill-primary-50 size-4 cursor-pointer transition-colors duration-150 hover:fill-white" />
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

          <div className="flex h-full gap-2">
            <Section className="w-full" title="About">
              <div className="text-primary-50 p-2 font-semibold">
                Hey, I&apos;m a software developer interested in game programming and
                frontend development.
              </div>
            </Section>

            <div className="flex h-full w-full flex-col gap-2">
              <Section title="Languages">
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

          <div className="font-pixel flex w-full items-center justify-center gap-6 text-2xl">
            <Button>Home</Button>
            <Button>Experience</Button>
            <Button>Projects</Button>
            <Button>Education</Button>
          </div>
        </div>

        <div className="from-primary-500 via-primary-500 to-primary-100 h-8 bg-gradient-to-t via-65%">
          <div className="shadow-primary-100 h-full w-full opacity-20 shadow-[0_0_2px_2px,0_0_4px_4px,0_0_8px_8px,0_0_16px_16px,0_0_32px_32px,0_0_64px_64px]" />
        </div>
      </div>
    </div>
  );
}
