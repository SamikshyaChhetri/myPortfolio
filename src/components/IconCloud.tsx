import { IconCloud as IconCloudComponent } from "./ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
  "vite",
  "tailwindCSS",
  "Bootstrap",
  "mongoDB",
  "cloudflare",
  "canva",
  "mui",
  "eslint",
];

export const IconCloudSection = () => {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden pt-10">
      <IconCloudComponent images={images} />
    </div>
  );
};
export default IconCloudSection;
