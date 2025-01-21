import { Icon } from "@iconify/react/dist/iconify.js";

const SocialMedia = () => {
  return (
    <div className="flex flex-col gap-5  rounded-md p-1  ">
      <div>
        <a href="https://github.com/SamikshyaChhetri">
          <div className="flex items-center justify-center rounded-full border-black p-3 hover:bg-black hover:text-white transition duration-300">
            <Icon icon="line-md:github-loop" width="28" height="28" />
          </div>
        </a>
      </div>

      <div>
        <a href="https://www.facebook.com/samuu.baniya/">
          <div className="flex items-center justify-center rounded-full border-black p-3 hover:bg-[#1877F2] hover:text-white transition duration-300">
            <Icon icon="line-md:facebook" width="28" height="28" />
          </div>
        </a>
      </div>

      <div className="w-full border border-gray-300"></div>
      <div>
        <a href="https://www.instagram.com/samuu_hehe/">
          <div className="flex items-center justify-center rounded-full border-black p-3 hover:text-white transition duration-300 hover:bg-gradient-to-r hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 ">
            <Icon icon="line-md:instagram" width="28" height="28" />
          </div>
        </a>
      </div>

      <div>
        <a href="https://www.linkedin.com/in/samikshya-b-chhetri-673935257/">
          <div className="flex items-center justify-center rounded-full border-black p-3 hover:bg-[#0077B5] hover:text-white transition duration-300">
            <Icon icon="line-md:linkedin" width="28" height="28" />
          </div>
        </a>
      </div>

      <div className="w-full border border-gray-300"></div>

      <div>
        <a href="https://www.threads.net/@samuu_hehe?xmt=AQGz992gLRQMV0cYsTNorZ00iVvOlPK7lmPFWl3jlpCGXVE">
          <div className="flex items-center justify-center rounded-full border-black p-3 hover:bg-black hover:text-white transition duration-300">
            <Icon icon="mingcute:threads-line" width="28" height="28" />
          </div>
        </a>
      </div>
      <div>
        <a href="https://x.com/Samuu_hehe">
          <div className="flex items-center justify-center rounded-full border-black p-3 hover:bg-[#1DA1F2] hover:text-white transition duration-300">
            <Icon icon="line-md:twitter" width="28" height="28" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
