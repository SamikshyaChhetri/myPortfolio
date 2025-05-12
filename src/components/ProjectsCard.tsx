import { FC } from "react";
import { Button } from "./ui/button";

interface ProjectsCardProps {
  image: string;
  desc: string;
  link: string;
  name?: string;
  github: string;
}
const ProjectsCard: FC<ProjectsCardProps> = ({
  image,
  desc,
  link,
  name,
  github,
}) => {
  return (
    <div className="flex justify-between  rounded-xl shadow-lg bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 transition hover:scale-105 hover:shadow-xl duration-300 ">
      <img
        src={image}
        alt={name || "Project Image"}
        className="w-full h-36 m-5  rounded-md"
      />
      <div className="p-4 flex flex-col ">
        {name && (
          <h3 className="text-lg font-bold text-neutral-800 dark:text-white">
            {name}
          </h3>
        )}
        <div className="flex flex-col justify-between gap-3 ">
          <p className="text-sm text-gray-600 dark:text-neutral-300">{desc}</p>
          <div className="flex gap-2">
            <Button className="bg-purple-700 w-fit hover:bg-purple-600">
              <a href={link} target="_blank" className=" text-white  ">
                Demo
              </a>
            </Button>
            <Button>
              <a href={github}>Github</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
