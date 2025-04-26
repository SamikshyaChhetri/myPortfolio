import { IconCloud as IconCloudComponent } from "./ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "express",
  "prisma",
  "firebase",
  "vercel",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
  "nodedotjs",
  "nodemon",
  "zod",
  "eslint",
  "nextdotjs",
  "cloudflare",
  "shadcnui",
  "tailwindcss",
  "mui",
  "vite",
  "bootstrap",
  "markdown",
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
