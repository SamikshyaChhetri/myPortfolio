import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import ProjectsCard from "./ProjectsCard";

const myProjects = [
  {
    image: "/park.png",
    desc: "A full-featured system to manage parking slots efficiently, with entry logs, space tracking, and user dashboard.",
    link: "https://parkify.samikshyachhetri.com.np/",
    github: "https://github.com/SamikshyaChhetri/Frontend-Parkit",
    name: "Parking Management System",
  },
  {
    image: "/lms.png",
    desc: "A digital solution for managing library books, users, and borrow history with ease.",
    link: "https://lms.samikshyachhetri.com.np/",
    github: "https://github.com/SamikshyaChhetri/library-management-system",
    name: "Library Management System",
  },
  {
    image: "/recipe.png",
    desc: "Explore delicious recipes with this clean and responsive app featuring search and step-by-step guides.",
    link: "https://recipe-app-nine-azure.vercel.app/",
    github: "https://github.com/SamikshyaChhetri/Recipe-app",
    name: "Recipe App",
  },
  {
    image: "/expense.png",
    desc: "Track your daily spending and manage your personal budget with this minimal expense tracker.",
    link: "https://samikshyachhetri.github.io/Expense-Tracker/",
    github: "https://github.com/SamikshyaChhetri/Expense-Tracker",
    name: "Expense Tracker",
  },
  {
    image: "/hangman.png",
    desc: "A fun and interactive Hangman game built with vanilla JavaScript for word-guessing challenges.",
    link: "https://samikshyachhetri.github.io/Hangman-game/",
    github: "https://github.com/SamikshyaChhetri/Hangman-game",
    name: "Hangman Game",
  },
  {
    image: "/encryption.png",
    desc: "Encrypt and decrypt messages with this simple text security tool using basic cryptographic logic.",
    link: "https://samikshyachhetri.github.io/Encryption-Decryption/",
    github: "https://github.com/SamikshyaChhetri/Encryption-Decryption",
    name: "Text-Encryption",
  },
  {
    image: "/ttt.png",
    desc: "Play the classic Tic Tac Toe game in a clean UI with smooth and responsive gameplay.",
    link: "https://tictactoe.samikshyachhetri.com.np/",
    github: "https://github.com/SamikshyaChhetri/TicTacToe-game",
    name: "Tic Tac Toe",
  },
  {
    image: "/calc.png",
    desc: "A responsive calculator app handling all basic arithmetic operations with a smooth interface.",
    link: "https://samikshyachhetri.github.io/Calculator/",
    github: "https://github.com/SamikshyaChhetri/Calculator",
    name: "Calculator",
  },
];

const Projects = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 px-2 sm:px-4 lg:px-10"
      id="projects"
    >
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
              icon="solar:laptop-3-linear"
              width="30"
              height="30"
              className="sm:w-10 sm:h-10 lg:w-12 lg:h-12"
            />
            My Projects
          </div>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Here are some of the projects I&apos;ve worked on recently
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {myProjects.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectsCard
                image={item.image}
                name={item.name || ""}
                desc={item.desc}
                link={item.link}
                github={item.github}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Projects;
