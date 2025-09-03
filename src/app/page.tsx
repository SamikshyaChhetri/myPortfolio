"use client";
import { Contact } from "@/components/Contact";
import Header from "@/components/Header";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { motion } from "framer-motion";

const queryClient = new QueryClient();
const page = () => {
  return (
    <motion.div
      className="w-full scroll-smooth bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <QueryClientProvider client={queryClient}>
        <BackgroundBeamsWithCollision className="flex flex-col min-h-screen relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-emerald-900/20"></div>
          <div className="relative z-10">
            <Header />
            <div className="h-16 sm:h-20"></div>
            <Home />
          </div>
        </BackgroundBeamsWithCollision>

        <motion.div
          className="bg-gradient-to-b from-slate-900 to-gray-900 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
          <Skills />
        </motion.div>

        <motion.div
          className="bg-gradient-to-b from-gray-900 to-slate-800 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-blue-900/10 to-emerald-900/10"></div>
          <Projects />
        </motion.div>

        <motion.div
          className="bg-gradient-to-b from-slate-800 to-slate-900 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-blue-900/5 to-emerald-900/5"></div>
          <Contact />
        </motion.div>
      </QueryClientProvider>
    </motion.div>
  );
};

export default page;
