import Image from "next/image";
import IconTech from "./IconTech";

const Technologies = () => {
  return (
    <div>
      <IconTech icon={{ path: "/social-medias/logo-github.svg", alt: "Icone do GitHub", width: 24, height: 24 }} name="JavaScript" />
    </div>
  );
};

export default Technologies;