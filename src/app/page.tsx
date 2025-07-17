import List from "@/components/list";
import Navigation from "@/components/navigation";
import Section from "@/components/section";
import Profile from "@/components/profile";

const about = [
  "Hey, I'm a software developer focused on game programming and frontend development.",
  "I enjoy solving challenges and creating polished, enjoyable user experiences.",
  "Feel free to look around my portfolio site, or click on the links above to get in touch.",
];
const languages = ["C++", "C#", "TypeScript"];
const tools = ["Next.js", "Unity", "Unreal Engine"];

export default function Page() {
  return (
    <div className="flex h-full flex-col gap-4 p-3 sm:p-6">
      <Profile />

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
            <List items={languages} className="text-primary-50 font-semibold" />
          </Section>

          <Section title="Tools" className="h-full">
            <List items={tools} className="text-primary-50 font-semibold" />
          </Section>
        </div>
      </div>
      <hr className="bg-primary-50/50 shadow-primary-50/25 my-2 h-0.5 border-t-0 shadow-[0_0_2px_1px]" />

      <Navigation />
    </div>
  );
}
