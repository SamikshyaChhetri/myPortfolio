import { Icon } from "@iconify/react/dist/iconify.js";

const About = () => {
  return (
    <div className="flex justify-center h-screen  items-center" id="about">
      <div className="w-[50%] flex  flex-col gap-10    border-2 border-blue-600 h-fit p-5 bg-gradient-to-b from-white to-neutral-200 relative rounded-lg">
        <div className="flex justify-center text-2xl items-center gap-1 bg-blue-600 text-white p-1 px-2 rounded-lg absolute left-3 -top-6">
          <h3>About</h3>
          <Icon icon="solar:user-bold" width="24" height="24" />
        </div>
        <div className="pt-10">
          Hi! I am Samikshya Chhetri, a Web Developer from Nepal. I am a
          passionate and enthusiastic developer with a strong interest in web
          development and software engineering. I specialize in creating
          intuitive and visually appealing interfaces that enhance user
          experiences and bring designs to life. I specialize in building
          scalable and efficient backend systems, turning ideas into robust and
          reliable server-side solutions.
        </div>
        <div className="flex flex-col gap-5 relative">
          <div className="h-3 w-3 bg-blue-600 rounded-full absolute top-[50px] -left-3"></div>
          <div className="h-32 border-[0.5px] border-blue-600 w-0 absolute top-14 -left-1.5"></div>
          <div>Education</div>
          <div className="flex flex-col gap-5 ml-2">
            <div className="flex flex-col  bg-white p-3 rounded-lg ">
              <div className="text-blue-600">2020 - 2022 </div>
              <div>+2 Science</div>
              <div>Canvas International College</div>
            </div>
            <div className="h-3 w-3 bg-blue-600 rounded-full absolute top-[172px] -left-3"></div>
            <div className="h-32 border-[0.5px] border-blue-600 w-0 absolute top-32 -left-1.5"></div>

            <div className="flex flex-col  bg-white p-3 rounded-lg ">
              <div className="text-blue-600">2022- Present</div>
              <div>Tribhuwan University, Bsc. CSIT</div>
              <div>PadmaKanya Multiple Campus</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 relative">
          <div className="h-3 w-3 bg-blue-600 rounded-full absolute top-[55px] -left-4"></div>
          <div className="h-20 border-[0.5px] border-blue-600 w-0 absolute top-14 -left-2.5"></div>
          <div>Experience</div>
          <div className="flex flex-col  bg-white p-3 rounded-lg ">
            <div className="text-blue-600">2023 - Present </div>
            <div>Learning</div>
            <div>Frontend & Backend development</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
