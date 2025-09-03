import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

const SkillsCard: FC<{ icon: ReactNode; name: string }> = ({ icon, name }) => {
  return (
    <motion.div
      className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl flex flex-col items-center justify-center p-2 sm:p-3 lg:p-4 h-20 w-20 sm:h-22 sm:w-22 md:h-24 md:w-24 hover:bg-slate-700/60 transition-all duration-300 group cursor-pointer shadow-lg"
      whileHover={{
        scale: 1.05,
        y: -5,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="mb-1"
        whileHover={{ rotate: 5 }}
        transition={{ duration: 0.2 }}
      >
        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl">{icon}</div>
      </motion.div>
      <div className="font-medium text-[10px] sm:text-xs text-gray-300 text-center group-hover:text-white transition-colors duration-300 leading-tight">
        {name}
      </div>
    </motion.div>
  );
};

export default SkillsCard;
