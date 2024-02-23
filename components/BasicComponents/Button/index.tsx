import Image from "next/image";
import { ButtonProps } from "./types";

const Button = ({ link, type, text, icon, iconLeft }: ButtonProps) => {

  switch (type) {
    case "primary":
      return (
        <a href={link} target="_blank" className={`${iconLeft && "flex-row-reverse"} bg-primary flex gap-2 items-center lg:px-6 px-[14px] py-4 hover:bg-primaryHover transition ease-in rounded-lg`}>
          <p className="text-textPrimary lg:text-base font-medium">{text}</p>
          <Image
            className=""
            src={icon.path}
            alt={icon.alt}
            width={icon.width}
            height={icon.height}
            priority={icon.priority}
          />
        </a>
      );
    case "gray":
      return (
        <a href={link} target="_blank" className={`${iconLeft && "flex-row-reverse"} bg-surfaceSecondary hover:bg-surfaceTertiary flex gap-2 items-center lg:px-6 px-[14px] py-4 transition ease-in rounded-lg`}>
          <p className="text-textPrimary lg:text-base font-medium">{text}</p>
          <Image
            className=""
            src={icon.path}
            alt={icon.alt}
            width={icon.width}
            height={icon.height}
            priority={icon.priority}
          />
        </a>
      );
    default:
      return null;
  }

}

export default Button;