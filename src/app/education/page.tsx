import Showcase from "@/components/showcase";
import ShowcaseLayout from "@/components/showcase-layout";
import Image from "next/image";

export default function Page() {
  return (
    <ShowcaseLayout title="Education">
      <Showcase
        title="BCompSci (Hons), minor in Mathematics"
        subtitle="UNSW"
        year="2021-2024"
        tags={["Computer Science", "Mathematics"]}
        icon={
          <Image
            src="/unsw.png"
            width="0"
            height="0"
            draggable={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="h-auto w-8 sm:w-24"
            alt="unsw logo"
          />
        }
      >
        Bachelor of Advanced Computer Science (Honours), Minor in Mathematics at
        University of New South Wales.
        <div>
          Achieved 86.6 WAM, consecutive Dean&apos;s List, graduated with First
          Class Honours and University Medal for highest marks in honours
          cohort.
        </div>
      </Showcase>
    </ShowcaseLayout>
  );
}
