import Image from "next/image";

import { cn, getTechLogos } from "@/lib/utils";

const DisplayTechIcons = async ({ techStack }: TechIconProps) => {
  const techIcons = await getTechLogos(techStack);

  return (
    <div className="flex flex-row">
      {techIcons.slice(0, 3).map(({ tech, url }, index) => (
        <div
          key={tech}
          className={cn(
            "relative group bg-dark-300 rounded-full p-2 flex flex-center border-2 border-dark-600 transition-transform duration-300 hover:-translate-y-1.5 delay-75 hover:z-50",
            index >= 1 && "-ml-3"
          )}
        >
          <span className="tech-tooltip delay-75">{tech}</span>

          <Image
            src={url}
            alt={tech}
            width={100}
            height={100}
            className="size-5 object-fit"
          />
        </div>
      ))}
    </div>
  );
};

export default DisplayTechIcons;