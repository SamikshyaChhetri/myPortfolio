"use client";
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
    <div className="flex  items-center justify-center">
      <div>
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
      <div className="flex justify-between">
        <div className="w-56"></div>
        <SocialMedia></SocialMedia>
      </div>
    </div>
  );
};

export default Home;
