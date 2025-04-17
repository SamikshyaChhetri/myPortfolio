import { FC, ReactNode } from "react";

const SkillsCard: FC<{ icon: ReactNode; name: string }> = ({ icon, name }) => {
  return (
    <div className="border-2 border-black rounded-lg flex flex-col items-center p-2 h-20 w-20 ">
      <div>{icon}</div>
      <div className="font-[600] text-[13px]">{name}</div>
    </div>
  );
};

export default SkillsCard;
