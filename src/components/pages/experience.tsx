"use client";

import { FlickeringGrid } from "../flickering-grid";
import { useState, useEffect } from "react";
import Navigation from "../navigation";
import Title from "../title";
import PortalIcon from "../icons/portal-icon";
import Showcase from "../showcase";
import Button from "../button";
import GithubButton from "../buttons/github-button";
import VisitButton from "../buttons/visit-button";
import Image from "next/image";
import CatIcon from "../icons/cat-icon";
import YoutubeButton from "../buttons/youtube-button";

export default function Experience() {
  const [styles, setStyles] = useState<CSSStyleDeclaration | null>(null);

  useEffect(() => {
    setStyles(getComputedStyle(document.documentElement));
  }, []);

  return (
    <div className="flex h-full flex-col gap-2 p-3 sm:p-6">
      <div className="flex">
        <div className="flex w-full flex-col gap-2 overflow-x-hidden px-2">
          <Title className="bg-primary-500/40">Experience</Title>
          <div className="min-h-8 flex-1">
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

      <div className="from-primary-500/35 via-primary-500/35 to-primary-500/10 flex max-h-96 flex-col gap-4 overflow-auto bg-gradient-to-b via-30% p-2">
        <Showcase
          title="Eoru"
          tags={["Next.js", "TypeScript", "Tailwind", "Motion"]}
          icon={
            <Image
              src="/cat.gif"
              width="0"
              height="0"
              draggable={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="h-auto w-8 sm:w-24"
              alt="cat profile image"
              unoptimized
              priority
            />
          }
          buttons={[
            <Button key="button" className="sm:px-2" disabled>
              <span className="hidden font-semibold tracking-tight text-nowrap sm:inline">
                You are here!
              </span>
              <CatIcon className="text-primary-50 block size-6 sm:hidden" />
            </Button>,
            <GithubButton
              key="github"
              href="https://github.com/eoru-dev/eoru"
            />,
          ]}
        >
          Portfolio website showcasing my work experience, personal projects and
          education.
        </Showcase>

        <Showcase
          title="Voidtable"
          tags={["Next.js", "TypeScript", "Tailwind", "PostgreSQL"]}
          icon={<PortalIcon className="size-8 sm:size-24" animate="hover" />}
          buttons={[
            <VisitButton key="visit" href="https://voidtable.eoru.dev/" />,
            <GithubButton
              key="github"
              href="https://github.com/eoru-dev/voidtable"
            />,
          ]}
          className="group"
        >
          Spreadsheet data management tool offering multi-level sorting and
          filtering and tables capable of handling 100k+ rows.
        </Showcase>

        <Showcase
          title="WebCMS3 Gradebook"
          tags={["Python", "Flask", "SQLAlchemy", "Jinja", "Material UI"]}
          icon={
            <Image
              src="/webcms.png"
              width="0"
              height="0"
              draggable={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="h-auto w-8 sm:w-24"
              alt="webcms logo"
            />
          }
          buttons={[
            <VisitButton
              key="visit"
              text="Demo"
              href="https://gradebook.eoru.dev/"
            />,
          ]}
        >
          Gradebook made for WebCMS3, a Learning Management System used at UNSW.
          Includes tools for grade management, scaling, and comparisons among
          more.
        </Showcase>

        <Showcase
          title="Joe's Bizzare Dream"
          tags={["Unreal Engine", "Blueprints", "Behaviour Trees"]}
          icon={
            <Image
              src="/joes-bizzare-dream.png"
              width="0"
              height="0"
              draggable={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="h-auto w-8 sm:w-24"
              alt="joe's bizzare dream"
            />
          }
          buttons={[
            <YoutubeButton
              key="youtube"
              href="https://www.youtube.com/watch?v=LU36svFzf64"
            />,
          ]}
        >
          Rogue-like action horror game with an open-world and randomly
          generated maze levels.
        </Showcase>
      </div>

      <hr className="bg-primary-50/50 shadow-primary-50/25 my-2 h-0.5 border-t-0 shadow-[0_0_2px_1px]" />

      <Navigation />
    </div>
  );
}
