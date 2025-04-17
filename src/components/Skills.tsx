import { Icon } from "@iconify/react/dist/iconify.js";
import { ReactNode } from "react";
import SkillsCard from "./SkillsCard";

const languages: { name: string; icon: ReactNode }[] = [
  {
    name: "Typescript",
    icon: <Icon icon="skill-icons:typescript" width="36" height="36" />,
  },
  {
    name: "Javascript",
    icon: <Icon icon="skill-icons:javascript" width="36" height="36" />,
  },
  {
    name: "HTML",
    icon: <Icon icon="skill-icons:html" width="36" height="36" />,
  },
  {
    name: "CSS",
    icon: <Icon icon="skill-icons:css" width="36" height="36" />,
  },
  {
    name: "C",
    icon: <Icon icon="skill-icons:c" width="36" height="36" />,
  },
  {
    name: "C++",
    icon: <Icon icon="skill-icons:cpp" width="36" height="36" />,
  },
];
const Skills = () => {
  return (
    <div className="ml-24">
      <div className="flex flex-col ">
        <div>Skills</div>
        <div className="flex flex-col gap-5">
          <div className="font-bold text-lg">Languages</div>
          <div className="flex  gap-5">
            {languages.map((item) => {
              return (
                <SkillsCard
                  name={item.name}
                  icon={item.icon}
                  key={item.name}
                ></SkillsCard>
              );
            })}
          </div>
        </div>
        <div>Frameworks and Libraries</div>
        <div>Database amd ORM</div>
        <div>Hosting and SAAS</div>
        <div>Others</div>
      </div>
    </div>
  );
};

export default Skills;
