"use client";
import { Contact } from "@/components/Contact";
import Header from "@/components/Header";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
const page = () => {
  return (
    <div className="w-full scroll-smooth ">
      <QueryClientProvider client={queryClient}>
        <BackgroundBeamsWithCollision className="flex flex-col bg-gradient-to-br from-purple-50 via-white to-purple-100 ">
          <Header></Header>

          <div className="h-20"></div>

          <Home></Home>
        </BackgroundBeamsWithCollision>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
      </QueryClientProvider>
    </div>
  );
};

export default page;
