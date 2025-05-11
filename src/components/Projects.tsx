import ProjectsCard from "./ProjectsCard";

const myProjects = [
  {
    image: "/park.png",
    desc: "A full-featured system to manage parking slots efficiently, with entry logs, space tracking, and user dashboard.",
    link: "https://parkify.samikshyachhetri.com.np/",
    name: "Parking Management System",
  },
  {
    image: "/lms.png",
    desc: "A digital solution for managing library books, users, and borrow history with ease.",
    link: "https://lms.samikshyachhetri.com.np/",
    name: "Library Management System",
  },
  {
    image: "/recipe.png",
    desc: "Explore delicious recipes with this clean and responsive app featuring search and step-by-step guides.",
    link: "https://recipe-app-nine-azure.vercel.app/",
    name: "Recipe App",
  },
  {
    image: "/expense.png",
    desc: "Track your daily spending and manage your personal budget with this minimal expense tracker.",
    link: "https://samikshyachhetri.github.io/Expense-Tracker/",
    name: "Expense Tracker",
  },
  {
    image: "/hangman.png",
    desc: "A fun and interactive Hangman game built with vanilla JavaScript for word-guessing challenges.",
    link: "https://samikshyachhetri.github.io/Hangman-game/",
    name: "Hangman Game",
  },
  {
    image: "/encryption.png",
    desc: "Encrypt and decrypt messages with this simple text security tool using basic cryptographic logic.",
    link: "https://samikshyachhetri.github.io/Encryption-Decryption/",
    name: "Text-Encryption",
  },
  {
    image: "/ttt.png",
    desc: "Play the classic Tic Tac Toe game in a clean UI with smooth and responsive gameplay.",
    link: "https://tictactoe.samikshyachhetri.com.np/",
    name: "Tic Tac Toe",
  },
  {
    image: "/calc.png",
    desc: "A responsive calculator app handling all basic arithmetic operations with a smooth interface.",
    link: "https://samikshyachhetri.github.io/Calculator/",
    name: "Calculator",
  },
];

const Projects = () => {
  return (
    <section
      className="my-10 md:px-28  flex flex-col gap-10 bg-gradient-to-br from-purple-50 via-white to-purple-10"
      id="projects"
    >
      <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-white my-5">
        My Projects
      </h2>
      <div className="grid grid-cols-2 gap-10">
        {myProjects.map((item, index) => (
          <ProjectsCard
            key={index}
            image={item.image}
            name={item.name || ""}
            desc={item.desc}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
};
export default Projects;
