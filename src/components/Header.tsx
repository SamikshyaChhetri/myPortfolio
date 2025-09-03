import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { CoolMode } from "./ui/cool-mode";

const Header = () => {
  return (
    <div id="home">
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/90 border-b border-slate-700/50 shadow-2xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16">
            <motion.div
              className="flex gap-2 sm:gap-4 items-center bg-slate-800/80 backdrop-blur-sm rounded-full px-6 py-2 border border-slate-600/30 shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <CoolMode>
                  <a href="#home">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-200 hover:bg-slate-700/50 hover:text-white border-0 transition-all duration-300 font-medium"
                    >
                      <Icon
                        icon="solar:home-line-duotone"
                        width="20"
                        height="20"
                        className="mr-2"
                      />
                      <span className="hidden sm:inline">Home</span>
                    </Button>
                  </a>
                </CoolMode>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <CoolMode>
                  <a href="#skills">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-200 hover:bg-slate-700/50 hover:text-white border-0 transition-all duration-300 font-medium"
                    >
                      <Icon
                        icon="carbon:skill-level-basic"
                        width="20"
                        height="20"
                        className="mr-2"
                      />
                      <span className="hidden sm:inline">Skills</span>
                    </Button>
                  </a>
                </CoolMode>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <CoolMode>
                  <a href="#projects">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-200 hover:bg-slate-700/50 hover:text-white border-0 transition-all duration-300 font-medium"
                    >
                      <Icon
                        icon="solar:laptop-3-linear"
                        width="20"
                        height="20"
                        className="mr-2"
                      />
                      <span className="hidden sm:inline">Projects</span>
                    </Button>
                  </a>
                </CoolMode>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <CoolMode>
                  <a href="#contact">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-200 hover:bg-slate-700/50 hover:text-white border-0 transition-all duration-300 font-medium"
                    >
                      <Icon
                        icon="solar:phone-calling-rounded-linear"
                        width="20"
                        height="20"
                        className="mr-2"
                      />
                      <span className="hidden sm:inline">Contact</span>
                    </Button>
                  </a>
                </CoolMode>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.nav>
    </div>
  );
};
export default Header;
