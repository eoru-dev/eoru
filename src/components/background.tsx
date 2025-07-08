import Image from "next/image";

export default function Background() {
  return (
    <div className="absolute -z-1 h-full w-full brightness-40 select-none">
      <Image
        src="/distance-waneella.gif"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        draggable={false}
        className="object-cover object-center"
        alt="background image"
        priority
        unoptimized
      />
      <div className="absolute right-3 bottom-3">Art by waneella</div>
    </div>
  );
}
