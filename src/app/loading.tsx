import clsx from "clsx";
import Image from "next/image";

export default function Loading() {
  return (
    <div
      className={clsx(
        "flex h-screen w-screen items-center justify-center",
        "from-primary-300/100 to-primary-400/100 bg-radial to-70%",
      )}
    >
      <Image
        src="/cat.gif"
        width="0"
        height="0"
        draggable={false}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="h-auto w-24 object-contain"
        alt="loading gif"
        unoptimized
        priority
      />
    </div>
  );
}
