import About from "@/components/About";
import Header from "@/components/Header";
import Home from "@/components/Home";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const page = () => {
  return (
    <div className="w-full ">
      <BackgroundBeamsWithCollision className="flex flex-col">
        <Header></Header>
        <div className="h-20"></div>
        <Home></Home>
      </BackgroundBeamsWithCollision>
      <About></About>
    </div>
  );
};

export default page;
