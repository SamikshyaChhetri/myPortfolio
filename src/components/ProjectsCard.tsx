import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
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
    <motion.div
      className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl group hover:bg-slate-800/80 transition-all duration-300"
      whileHover={{
        scale: 1.03,
        y: -10,
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5)",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={image}
          alt={name || "Project Image"}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          whileHover={{ scale: 1.05 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        {name && (
          <motion.h3
            className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {name}
          </motion.h3>
        )}

        <motion.p
          className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {desc}
        </motion.p>

        <motion.div
          className="flex gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Button
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 flex-1 group/btn"
            asChild
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <Icon
                icon="solar:eye-linear"
                width="18"
                height="18"
                className="group-hover/btn:scale-110 transition-transform duration-200"
              />
              Demo
            </a>
          </Button>

          <Button
            variant="outline"
            className="border-slate-600 text-gray-300 hover:bg-slate-700 hover:text-white hover:border-slate-500 flex-1 group/btn"
            asChild
          >
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <Icon
                icon="line-md:github-loop"
                width="18"
                height="18"
                className="group-hover/btn:scale-110 transition-transform duration-200"
              />
              GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;
