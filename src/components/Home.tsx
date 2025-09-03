"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SocialMedia from "./SocialMedia";
import { AnimatedTestimonials } from "./ui/animated-testimonials";

const Home = () => {
  const testimonials = [
    {
      quote:
        "I specialize in creating intuitive and visually appealing interfaces that enhance user experiences and bring designs to life.",
      name: "Samikshya Chhetri🐥",
      designation: "Frontend Developer",
      src: "/samu.jpg",
    },
    {
      quote:
        "I enjoy building scalable and efficient backend systems, turning ideas into robust and reliable server-side solutions.",
      name: "Samikshya Chhetri",
      designation: "Backend Developer",
      src: "/meee.jpg",
    },
    {
      quote:
        "I streamline workflows by automating processes and ensuring smooth deployment pipelines for efficient project delivery.",
      name: "Samikshya Chhetri",
      designation: "DevOps Engineer",
      src: "/sami.jpg",
    },
  ];
  const [inClient, setinClient] = useState(false);

  useEffect(() => {
    setinClient(true);
  }, []);

  if (!inClient) return <div></div>;

  return (
    <motion.div
      className="flex flex-col lg:flex-row items-center justify-center min-h-[70vh] sm:min-h-[80vh] px-2 sm:px-4 lg:px-8 gap-4 sm:gap-6 lg:gap-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <motion.div
        className="flex-1 max-w-4xl w-full"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <AnimatedTestimonials testimonials={testimonials} />
      </motion.div>

      <motion.div
        className="flex justify-center lg:justify-end mt-4 lg:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <SocialMedia />
      </motion.div>
    </motion.div>
  );
};

export default Home;
