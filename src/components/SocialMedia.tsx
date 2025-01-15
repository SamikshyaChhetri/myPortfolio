import { Icon } from "@iconify/react/dist/iconify.js";

const SocialMedia = () => {
  return (
    <div className="flex flex-col gap-5 border-2 border-black rounded-md p-1 mr-5">
      <div className="rounded-full border-black p-3 hover:bg-gray-600 hover:text-white ">
        <a href="https://github.com/SamikshyaChhetri">
          <Icon icon="line-md:github-loop" width="28" height="28" />
        </a>
      </div>
      <div className="rounded-full  border-black p-3 hover:bg-gray-600 hover:text-white ">
        <a href="https://www.facebook.com/samuu.baniya/">
          <Icon icon="line-md:facebook" width="28" height="28" />{" "}
        </a>
      </div>
      <div className="w-full border border-gray-300"></div>
      <div className="rounded-full  border-black p-3 hover:bg-gray-600 hover:text-white ">
        <a href="https://www.instagram.com/samuu_hehe/">
          <Icon icon="line-md:instagram" width="28" height="28" />
        </a>
      </div>
      <div className="rounded-full  border-black p-3 hover:bg-gray-600 hover:text-white ">
        <a href="https://www.linkedin.com/in/samikshya-b-chhetri-673935257/">
          <Icon icon="line-md:linkedin" width="28" height="28" />
        </a>
      </div>
      <div className="w-full border border-gray-300"></div>

      <div className="rounded-full  border-black p-3 hover:bg-gray-600 hover:text-white ">
        <a href="https://www.threads.net/@samuu_hehe?xmt=AQGz992gLRQMV0cYsTNorZ00iVvOlPK7lmPFWl3jlpCGXVE">
          <Icon icon="mingcute:threads-line" width="28" height="28" />
        </a>
      </div>
      <div className="rounded-full  border-black p-3 hover:bg-gray-600 hover:text-white ">
        <a href="https://x.com/Samuu_hehe">
          <Icon icon="line-md:twitter" width="28" height="28" />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
