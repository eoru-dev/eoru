import Image from "next/image";
import Background from "./background";
import clsx from "clsx";

export default function Home() {
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
        <div className="from-primary-500 via-primary-500 to-primary-100 h-7 bg-gradient-to-b via-65%">
          <div className="shadow-primary-100 h-full w-full opacity-20 shadow-[0_0_2px_2px,0_0_4px_4px,0_0_8px_8px,0_0_16px_16px,0_0_32px_32px,0_0_64px_64px]" />
        </div>

        <div className="flex h-full w-full flex-col gap-4 p-6">
          <div className="relative flex gap-4">
            <div
              className={clsx(
                "bg-primary-500/60 absolute w-full",
                "h-18 sm:h-24",
              )}
            />
            <Image
              src="/cat.gif"
              width="0"
              height="0"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={clsx(
                "relative h-auto w-1/3 shrink-0 object-contain",
                "hidden sm:block",
              )}
              alt="cat profile image"
              unoptimized
              priority
            />
            <div className="w-full">
              <div
                className={clsx(
                  "font-pixel relative px-4 text-shadow-[0_6px_0_var(--color-primary-100)]",
                  "text-7xl sm:text-8xl",
                )}
              >
                George Zhu
              </div>
              <div className="text-primary-50 px-4 text-2xl font-semibold">
                Software Developer
              </div>
            </div>
          </div>

          <div className="flex h-full gap-2">
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
              Problem Solving & Optimization Backend route tuning, scalable data
              handling, performance engineering
            </div>
          </div>

          <hr className="bg-primary-300/80 my-2 h-2 border-t-0" />

          <div className="flex w-full items-center justify-center text-xl">
            Home | Experience | Projects | Education
          </div>
        </div>

        <div className="from-primary-500 via-primary-500 to-primary-100 h-7 bg-gradient-to-t via-65%">
          <div className="shadow-primary-100 h-full w-full opacity-20 shadow-[0_0_2px_2px,0_0_4px_4px,0_0_8px_8px,0_0_16px_16px,0_0_32px_32px,0_0_64px_64px]" />
        </div>
      </div>
    </div>
  );
}
