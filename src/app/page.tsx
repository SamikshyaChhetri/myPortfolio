import About from "@/components/About";
import Header from "@/components/Header";
import Home from "@/components/Home";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const page = () => {
  return (
    <BackgroundBeamsWithCollision>
      <div>
        <Header></Header>
        <Home></Home>
        <About></About>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default page;
