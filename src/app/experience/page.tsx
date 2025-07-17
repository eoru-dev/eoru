import Showcase from "@/components/showcase";
import ShowcaseLayout from "@/components/showcase-layout";
import Image from "next/image";

export default function Page() {
  return (
    <ShowcaseLayout title="Experience">
      <Showcase
        title="The Producer's Toolbox"
        subtitle="Software Developer (Contract)"
        year="2025"
        tags={["Next.js", "TypeScript", "Spreadsheets", "AI Integration"]}
        icon={
          <Image
            src="/the-producers-toolbox.svg"
            width="0"
            height="0"
            draggable={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="h-auto w-8 sm:w-24"
            alt="the producer's toolbox"
          />
        }
      >
        Helped build MVP user portal and web apps for financial management of
        films and AI tools script analysis.
      </Showcase>

      <Showcase
        title="Wentworth Institute"
        subtitle="Computer Science Tutor"
        year="2023"
        tags={["Python", "PostgreSQL"]}
        icon={
          <Image
            src="/wentworth.png"
            width="0"
            height="0"
            draggable={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="h-auto w-8 sm:w-24"
            alt="webcms logo"
          />
        }
      >
        Tutored students in courses for Database Design (using SQL) and
        Programming Fundamentals (using Python).
      </Showcase>
    </ShowcaseLayout>
  );
}
