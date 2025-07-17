import Navigation from "@/components/navigation";
import Title from "@/components/title";
import { PrimaryFlickeringGrid } from "@/components/flickering-grid";
import { ReactNode } from "react";

export default function ShowcaseLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex h-full flex-col gap-2 p-3 sm:p-6">
      <div className="flex">
        <div className="flex w-full flex-col gap-2 overflow-x-hidden px-2">
          <Title className="bg-primary-500/40 px-2">{title}</Title>
          <div className="min-h-8 flex-1">
            <PrimaryFlickeringGrid />
          </div>
        </div>
      </div>

      <div className="from-primary-500/35 via-primary-500/35 to-primary-500/10 flex max-h-96 flex-col gap-4 overflow-auto bg-gradient-to-b via-30% p-2">
        {children}
      </div>

      <hr className="bg-primary-50/50 shadow-primary-50/25 my-2 h-0.5 border-t-0 shadow-[0_0_2px_1px]" />

      <Navigation />
    </div>
  );
}
