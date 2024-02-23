import Image from "next/image";
import { IconObj } from "../../Button/types";
import Text from "../../Text";

const IconTech = ({ icon, name }: {
  icon: IconObj;
  name: string;
}) => {
  return (
    <div className="relative group w-fit">
      <Image
        className="cursor-pointer"
        src={icon.path}
        alt={icon.alt}
        width={icon.width}
        height={icon.height}
        priority
        loading="eager"
      />
      <div className="absolute -top-12 opacity-0 border border-textTertiary group-hover:opacity-100 transition-all p-2 rounded-lg hover:!opacity-0">
        <Text className="!text-textTertiary">{name}</Text>
        <div className="w-2 h-2 border-b border-r bg-surfacePrimary border-textTertiary absolute -bottom-1 left-2 rotate-45"></div>
      </div>
    </div>
  );
};

export default IconTech;