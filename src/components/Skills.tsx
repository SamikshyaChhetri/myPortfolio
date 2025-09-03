import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import IconCloudSection from "./IconCloud";
import SkillsCard from "./SkillsCard";

const languages = [
  {
    name: "Typescript",
    icon: (
      <Icon
        icon="skill-icons:typescript"
        width="28"
        height="28"
        className="sm:w-8 sm:h-8 md:w-9 md:h-9"
      />
    ),
  },
  {
    name: "Javascript",
    icon: (
      <Icon
        icon="skill-icons:javascript"
        width="28"
        height="28"
        className="sm:w-8 sm:h-8 md:w-9 md:h-9"
      />
    ),
  },
  {
    name: "HTML",
    icon: (
      <Icon
        icon="skill-icons:html"
        width="28"
        height="28"
        className="sm:w-8 sm:h-8 md:w-9 md:h-9"
      />
    ),
  },
  {
    name: "CSS",
    icon: (
      <Icon
        icon="skill-icons:css"
        width="28"
        height="28"
        className="sm:w-8 sm:h-8 md:w-9 md:h-9"
      />
    ),
  },
  {
    name: "C",
    icon: (
      <Icon
        icon="skill-icons:c"
        width="28"
        height="28"
        className="sm:w-8 sm:h-8 md:w-9 md:h-9"
      />
    ),
  },
  {
    name: "C++",
    icon: (
      <Icon
        icon="skill-icons:cpp"
        width="28"
        height="28"
        className="sm:w-8 sm:h-8 md:w-9 md:h-9"
      />
    ),
  },
];

const frameworks = [
  {
    name: "React",
    icon: (
      <Icon
        icon="skill-icons:react-dark"
        width="28"
        height="28"
        className="sm:w-8 sm:h-8 md:w-9 md:h-9"
      />
    ),
  },
  {
    name: "NextJs",
    icon: (
      <Icon
        icon="skill-icons:nextjs-light"
        width="28"
        height="28"
        className="sm:w-8 sm:h-8 md:w-9 md:h-9"
      />
    ),
  },
  {
    name: "ExpressJs",
    icon: (
      <Icon
        icon="skill-icons:expressjs-dark"
        width="28"
        height="28"
        className="sm:w-8 sm:h-8 md:w-9 md:h-9"
      />
    ),
  },
  {
    name: "NodeJs",
    icon: (
      <Icon
        icon="skill-icons:nodejs-dark"
        width="28"
        height="28"
        className="sm:w-8 sm:h-8 md:w-9 md:h-9"
      />
    ),
  },
  {
    name: "Tailwind",
    icon: (
      <Icon
        icon="skill-icons:tailwindcss-dark"
        width="28"
        height="28"
        className="sm:w-8 sm:h-8 md:w-9 md:h-9"
      />
    ),
  },
  {
    name: "MUI",
    icon: (
      <Icon
        icon="skill-icons:materialui-dark"
        width="28"
        height="28"
        className="sm:w-8 sm:h-8 md:w-9 md:h-9"
      />
    ),
  },
  {
    name: "Vite",
    icon: (
      <Icon
        icon="skill-icons:vite-dark"
        width="28"
        height="28"
        className="sm:w-8 sm:h-8 md:w-9 md:h-9"
      />
    ),
  },
  {
    name: "Bootstrap",
    icon: (
      <Icon
        icon="skill-icons:bootstrap"
        width="28"
        height="28"
        className="sm:w-8 sm:h-8 md:w-9 md:h-9"
      />
    ),
  },
  {
    name: "Shadcn",
    icon: (
      <Icon
        icon="simple-icons:shadcnui"
        width="28"
        height="28"
        className="sm:w-8 sm:h-8 md:w-9 md:h-9"
      />
    ),
  },
];

const database = [
  {
    name: "Mysql",
    icon: (
      <Icon
        icon="skill-icons:mysql-light"
        width="28"
        height="28"
        className="sm:w-8 sm:h-8 md:w-9 md:h-9"
      />
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <Icon
        icon="skill-icons:mongodb"
        width="28"
        height="28"
        className="sm:w-8 sm:h-8 md:w-9 md:h-9"
      />
    ),
  },
  {
    name: "Prisma",
    icon: (
      <Icon
        icon="skill-icons:prisma"
        width="28"
        height="28"
        className="sm:w-8 sm:h-8 md:w-9 md:h-9"
      />
    ),
  },
];

const hosting = [
  {
    name: "Vercel",
    icon: (
      <Icon
        icon="skill-icons:vercel-dark"
        width="28"
        height="28"
        className="sm:w-8 sm:h-8 md:w-9 md:h-9"
      />
    ),
  },
  {
    name: "Render",
    icon: (
      <Icon
        icon="simple-icons:render"
        width="28"
        height="28"
        className="sm:w-8 sm:h-8 md:w-9 md:h-9"
      />
    ),
  },
  {
    name: "Cloudflare",
    icon: (
      <Icon
        icon="devicon:cloudflare"
        width="28"
        height="28"
        className="sm:w-8 sm:h-8 md:w-9 md:h-9"
      />
    ),
  },
  {
    name: "Netlify",
    icon: (
      <Icon
        icon="material-icon-theme:netlify-light"
        width="28"
        height="28"
        className="sm:w-8 sm:h-8 md:w-9 md:h-9"
      />
    ),
  },
];

const others = [
  {
    name: "Git",
    icon: (
      <Icon
        icon="skill-icons:git"
        width="28"
        height="28"
        className="sm:w-8 sm:h-8 md:w-9 md:h-9"
      />
    ),
  },
  {
    name: "Github",
    icon: (
      <Icon
        icon="logos:github-icon"
        width="28"
        height="28"
        className="sm:w-8 sm:h-8 md:w-9 md:h-9"
      />
    ),
  },
  {
    name: "Zod",
    icon: (
      <Icon
        icon="logos:zod"
        width="28"
        height="28"
        className="sm:w-8 sm:h-8 md:w-9 md:h-9"
      />
    ),
  },
  {
    name: "Eslint",
    icon: (
      <Icon
        icon="devicon:eslint"
        width="28"
        height="28"
        className="sm:w-8 sm:h-8 md:w-9 md:h-9"
      />
    ),
  },
  {
    name: "Nodemon",
    icon: (
      <Icon
        icon="devicon:nodemon"
        width="28"
        height="28"
        className="sm:w-8 sm:h-8 md:w-9 md:h-9"
      />
    ),
  },
  {
    name: "Figma",
    icon: (
      <Icon
        icon="logos:figma"
        width="28"
        height="28"
        className="sm:w-8 sm:h-8 md:w-9 md:h-9"
      />
    ),
  },
  {
    name: "Canva",
    icon: (
      <Icon
        icon="devicon:canva"
        width="28"
        height="28"
        className="sm:w-8 sm:h-8 md:w-9 md:h-9"
      />
    ),
  },
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
    <div className="py-12 sm:py-16 lg:py-20 px-2 sm:px-4 lg:px-10" id="skills">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white mb-3 sm:mb-4">
            <Icon
              icon="fluent-color:laptop-24"
              width="30"
              height="30"
              className="sm:w-10 sm:h-10 lg:w-12 lg:h-12"
            />
            <span className="text-center">Skills & Technologies</span>
          </div>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Technologies I've been working with recently
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12 items-start">
          <motion.div
            className="space-y-6 lg:space-y-8 order-1 xl:order-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="font-bold text-lg sm:text-xl text-white mb-4 sm:mb-6">
                Languages
              </h3>
              <div className="flex gap-3 sm:gap-4 flex-wrap">
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
              <h3 className="font-bold text-lg sm:text-xl text-white mb-4 sm:mb-6">
                Frameworks & Libraries
              </h3>
              <div className="flex gap-3 sm:gap-4 flex-wrap">
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
              <h3 className="font-bold text-lg sm:text-xl text-white mb-4 sm:mb-6">
                Database & ORM
              </h3>
              <div className="flex gap-3 sm:gap-4 flex-wrap">
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
            className="flex justify-center order-3 xl:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-md xl:max-w-none">
              <IconCloudSection />
            </div>
          </motion.div>

          <motion.div
            className="space-y-6 lg:space-y-8 order-2 xl:order-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="font-bold text-lg sm:text-xl text-white mb-4 sm:mb-6">
                Hosting & SaaS
              </h3>
              <div className="flex gap-3 sm:gap-4 flex-wrap">
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
              <h3 className="font-bold text-lg sm:text-xl text-white mb-4 sm:mb-6">
                Others
              </h3>
              <div className="flex gap-3 sm:gap-4 flex-wrap">
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
