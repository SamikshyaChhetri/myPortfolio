import { Icon } from "@iconify/react/dist/iconify.js";
import { ReactNode } from "react";
import SkillsCard from "./SkillsCard";

const mySkills: { name: string; icon: ReactNode }[] = [
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
    icon: <Icon icon="skill-icons:html" width="36" height="36" />,
  },
  {
    name: "C++",
    icon: <Icon icon="skill-icons:html" width="36" height="36" />,
  },
];
const Skills = () => {
  return (
    <div>
      <div className="flex flex-col  items-center">
        <div>Skills</div>
        <div>
          <div>Languages</div>
          <div>
            {mySkills.map((item) => {
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
