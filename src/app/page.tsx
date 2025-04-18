import Header from "@/components/Header";
import Home from "@/components/Home";
import Skills from "@/components/Skills";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const page = () => {
  return (
    <div className="w-full ">
      <BackgroundBeamsWithCollision className="flex flex-col">
        <Header></Header>

        <div className="h-20"></div>

        <Home></Home>
      </BackgroundBeamsWithCollision>
      <Skills></Skills>
    </div>
  );
};

export default page;
