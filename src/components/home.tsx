import Image from "next/image";
import Background from "./background";
import clsx from "clsx";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-screen items-center justify-center p-2">
      <Background />

      <div className="relative h-[700px] w-full max-w-3xl">
        <div className="clip-slant-right bg-primary-500 text-primary-100 absolute bottom-full flex w-1/4 items-center py-0.5 px-4 text-xs font-semibold select-none">
          eoru.dev
        </div>
        <div className="flex h-full flex-col justify-between gap-2 overflow-hidden">
          <div className="from-primary-300 to-primary-400 absolute -z-1 h-full w-full bg-radial to-70% opacity-90" />

          <div className="from-primary-500 via-primary-500 to-primary-100 mb-2 h-7 bg-gradient-to-b via-65%">
            <div className="shadow-primary-100 h-full w-full opacity-20 shadow-[0_0_2px_2px,0_0_4px_4px,0_0_8px_8px,0_0_16px_16px,0_0_32px_32px,0_0_64px_64px]" />
          </div>

          {/* 
          <div className="flex w-full flex-col gap-4 p-6">
            <div className="flex items-center gap-4">
              <Image
                src="/cat.gif"
                width="0"
                height="0"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="h-auto w-1/4 object-contain"
                alt="cat profile image"
                unoptimized
                priority
              />
              <div>
                <div className="font-pixel text-5xl font-semibold">
                  George Zhu
                </div>
                <div className="text-3xl text-zinc-400">Software Engineer</div>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="w-full bg-zinc-900/25 p-2">
                <div className="text-2xl font-semibold">about</div>
                I'm a software engineer interested in web development and game
                programming.
              </div>
              <div className="w-full p-2">
                <div className="text-2xl font-semibold">skills</div>
                🕹️ Game Development Unreal Engine, AI Behavior Trees, Procedural
                Generation 🌐 Web Development Full-stack with Next.js, TRPC,
                Prisma, PostgreSQL UI/UX with React, Material-UI, TailwindCSS 🧠
                Problem Solving & Optimization Backend route tuning, scalable
                data handling, performance engineering
              </div>
            </div>
          </div>

          <div className="flex w-full items-center justify-center text-xl">
            Home | Experience | Projects | Education
          </div> */}

          <div className="from-primary-500 via-primary-500 to-primary-100 mt-2 h-7 bg-gradient-to-t via-65%">
            <div className="shadow-primary-100 h-full w-full opacity-20 shadow-[0_0_2px_2px,0_0_4px_4px,0_0_8px_8px,0_0_16px_16px,0_0_32px_32px,0_0_64px_64px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
