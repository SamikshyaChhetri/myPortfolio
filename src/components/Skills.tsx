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
const frameworks: { name: string; icon: ReactNode }[] = [
  {
    name: "React",
    icon: <Icon icon="skill-icons:react-dark" width="36" height="36" />,
  },
  {
    name: "NextJs",
    icon: <Icon icon="skill-icons:nextjs-light" width="36" height="36" />,
  },
  {
    name: "ExpressJs",
    icon: <Icon icon="skill-icons:expressjs-dark" width="36" height="36" />,
  },
  {
    name: "NodeJs",
    icon: <Icon icon="skill-icons:nodejs-dark" width="36" height="36" />,
  },
  {
    name: "Tailwind",
    icon: <Icon icon="skill-icons:tailwindcss-dark" width="36" height="36" />,
  },
  {
    name: "MUI",
    icon: <Icon icon="skill-icons:materialui-dark" width="36" height="36" />,
  },
  {
    name: "Vite",
    icon: <Icon icon="skill-icons:vite-dark" width="36" height="36" />,
  },
  {
    name: "Bootstrap",
    icon: <Icon icon="skill-icons:bootstrap" width="36" height="36" />,
  },
  {
    name: "Shadcn",
    icon: <Icon icon="simple-icons:shadcnui" width="36" height="36" />,
  },
];
const database: { name: string; icon: ReactNode }[] = [
  {
    name: "Mysql",
    icon: <Icon icon="skill-icons:mysql-light" width="36" height="36" />,
  },
  {
    name: "MongoDB",
    icon: <Icon icon="skill-icons:mongodb" width="36" height="36" />,
  },

  {
    name: "Prisma",
    icon: <Icon icon="skill-icons:prisma" width="36" height="36" />,
  },
];
const hosting: { name: string; icon: ReactNode }[] = [
  {
    name: "Vercel",
    icon: <Icon icon="skill-icons:vercel-dark" width="36" height="36" />,
  },

  {
    name: "Render",
    icon: <Icon icon="simple-icons:render" width="36" height="36" />,
  },
  {
    name: "Cloudflare",
    icon: <Icon icon="devicon:cloudflare" width="36" height="36" />,
  },
  {
    name: "Netlify",
    icon: (
      <Icon icon="material-icon-theme:netlify-light" width="36" height="36" />
    ),
  },
];
const others: { name: string; icon: ReactNode }[] = [
  {
    name: "Git",
    icon: <Icon icon="skill-icons:git" width="36" height="36" />,
  },
  {
    name: "Github",
    icon: <Icon icon="logos:github-icon" width="36" height="36" />,
  },
  {
    name: "Zod",
    icon: <Icon icon="logos:zod" width="36" height="36" />,
  },
  {
    name: "Eslint",
    icon: <Icon icon="devicon:eslint" width="36" height="36" />,
  },
  {
    name: "Nodemon",
    icon: <Icon icon="devicon:nodemon" width="36" height="36" />,
  },
  {
    name: "Figma",
    icon: <Icon icon="logos:figma" width="36" height="36" />,
  },
  {
    name: "Canva",
    icon: <Icon icon="devicon:canva" width="36" height="36" />,
  },
];

const Skills = () => {
  return (
    <div className="ml-24">
      <div className="flex flex-col gap-10">
        <div className="flex flex-row items-center justify-center font-bold text-[30px] pt-20 text-blue-700">
          <Icon
            icon="fluent-color:laptop-24"
            width="50"
            height="50"
            className="w-fit"
          />
          Skills
        </div>
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
        <div>
          <div className="flex flex-col gap-5">
            <div className="font-bold text-lg">Frameworks and Libraries</div>
            <div className="flex  gap-5 flex-wrap w-[50%]">
              {frameworks.map((item) => {
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
        </div>
        <div className="flex flex-col gap-5">
          <div className="font-bold text-lg">Database amd ORM</div>
          <div className="flex  gap-5">
            {database.map((item) => {
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
        <div className="flex flex-col gap-5">
          <div className="font-bold text-lg">Hosting and SAAS</div>
          <div className="flex  gap-5">
            {hosting.map((item) => {
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
        <div className="flex flex-col gap-5">
          <div className="font-bold text-lg">Others</div>
          <div className="flex  gap-5 flex-wrap w-[50%]">
            {others.map((item) => {
              return (
                <SkillsCard
                  name={item.name}
                  icon={item.icon}
                  key={item.name}
                ></SkillsCard>
              );
            })}
          </div>
        </div>{" "}
      </div>
    </div>
  );
};
export default Skills;
