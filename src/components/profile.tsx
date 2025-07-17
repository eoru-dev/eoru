"use client";

import Image from "next/image";
import clsx from "clsx";
import LinkedinIcon from "./icons/linkedin-icon";
import GithubIcon from "./icons/github-icon";
import CVIcon from "./icons/cv-icon";
import Link from "./link";
import NextLink from "next/link";
import { PrimaryFlickeringGrid } from "./flickering-grid";
import { useState, useEffect, useRef } from "react";
import Title from "./title";

export default function Profile() {
  const [titleHeight, setTitleHeight] = useState<number | "auto">("auto");
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      const observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
          setTitleHeight(entry.contentRect.height);
        }
      });

      observer.observe(titleRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return (
    <div className="relative flex gap-4">
      <div
        className="bg-primary-500/40 absolute w-full"
        style={{ height: titleHeight }}
      />

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
        <Title ref={titleRef}>George Zhu</Title>
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
        <div className="relative min-h-8 flex-1">
          <PrimaryFlickeringGrid />
        </div>
      </div>
    </div>
  );
}
