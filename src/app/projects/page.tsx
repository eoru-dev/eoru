import Button from "@/components/button";
import GithubButton from "@/components/buttons/github-button";
import VisitButton from "@/components/buttons/visit-button";
import YoutubeButton from "@/components/buttons/youtube-button";
import CatIcon from "@/components/icons/cat-icon";
import PortalIcon from "@/components/icons/portal-icon";
import Showcase from "@/components/showcase";
import ShowcaseLayout from "@/components/showcase-layout";
import Image from "next/image";

export default function Page() {
  return (
    <ShowcaseLayout title="Projects">
      <Showcase
        title="Eoru"
        subtitle="Portfolio Site"
        year="2025"
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
          <GithubButton key="github" href="https://github.com/eoru-dev/eoru" />,
        ]}
      >
        Portfolio website showcasing my work experience, personal projects and
        education.
      </Showcase>

      <Showcase
        title="Voidtable"
        subtitle="Data Management"
        year="2025"
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
        subtitle="Grade Management"
        year="2024"
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
        subtitle="Rougelike Horror Game"
        year="2022"
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
        Rogue-like action horror game with an open-world and randomly generated
        maze levels.
      </Showcase>
    </ShowcaseLayout>
  );
}
