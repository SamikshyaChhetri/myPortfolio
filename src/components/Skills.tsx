import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import IconCloudSection from "./IconCloud";
import SkillsCard from "./SkillsCard";

const languages = [
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
  { name: "CSS", icon: <Icon icon="skill-icons:css" width="36" height="36" /> },
  { name: "C", icon: <Icon icon="skill-icons:c" width="36" height="36" /> },
  { name: "C++", icon: <Icon icon="skill-icons:cpp" width="36" height="36" /> },
];

const frameworks = [
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

const database = [
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

const hosting = [
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

const others = [
  { name: "Git", icon: <Icon icon="skill-icons:git" width="36" height="36" /> },
  {
    name: "Github",
    icon: <Icon icon="logos:github-icon" width="36" height="36" />,
  },
  { name: "Zod", icon: <Icon icon="logos:zod" width="36" height="36" /> },
  {
    name: "Eslint",
    icon: <Icon icon="devicon:eslint" width="36" height="36" />,
  },
  {
    name: "Nodemon",
    icon: <Icon icon="devicon:nodemon" width="36" height="36" />,
  },
  { name: "Figma", icon: <Icon icon="logos:figma" width="36" height="36" /> },
  { name: "Canva", icon: <Icon icon="devicon:canva" width="36" height="36" /> },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-20 px-4 lg:px-10" id="skills">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 font-bold text-4xl lg:text-5xl text-white mb-4">
            <Icon icon="fluent-color:laptop-24" width="50" height="50" />
            Skills & Technologies
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies I've been working with recently
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="font-bold text-xl text-white mb-6">Languages</h3>
              <div className="flex gap-4 flex-wrap">
                {languages.map((item) => (
                  <SkillsCard
                    name={item.name}
                    icon={item.icon}
                    key={item.name}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="font-bold text-xl text-white mb-6">
                Frameworks & Libraries
              </h3>
              <div className="flex gap-4 flex-wrap">
                {frameworks.map((item) => (
                  <SkillsCard
                    name={item.name}
                    icon={item.icon}
                    key={item.name}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="font-bold text-xl text-white mb-6">
                Database & ORM
              </h3>
              <div className="flex gap-4 flex-wrap">
                {database.map((item) => (
                  <SkillsCard
                    name={item.name}
                    icon={item.icon}
                    key={item.name}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <IconCloudSection />
          </motion.div>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="font-bold text-xl text-white mb-6">
                Hosting & SaaS
              </h3>
              <div className="flex gap-4 flex-wrap">
                {hosting.map((item) => (
                  <SkillsCard
                    name={item.name}
                    icon={item.icon}
                    key={item.name}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="font-bold text-xl text-white mb-6">Others</h3>
              <div className="flex gap-4 flex-wrap">
                {others.map((item) => (
                  <SkillsCard
                    name={item.name}
                    icon={item.icon}
                    key={item.name}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
