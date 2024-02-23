import Image from "next/image";

const InstagramIcon = () => {
  return (
    <a href="https://www.instagram.com/junior.cadamuro/" target="_blanck" className="p-3 bg-surfaceSecondary hover:bg-surfaceTertiary rounded-lg">
      <Image
        className=""
        src="/social-medias/logo-instagram.svg"
        alt="Icone do Instagram"
        width={24}
        height={24}
        priority
        loading="eager"
      />
    </a>
  );
};

export default InstagramIcon;