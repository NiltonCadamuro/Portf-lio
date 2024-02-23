import Image from "next/image";

const GitHubIcon = () => {
  return (
    <a href="https://github.com/NiltonCadamuro" target="_blanck" className="p-3 bg-surfaceSecondary hover:bg-surfaceTertiary rounded-lg">
      <Image
        className=""
        src="/social-medias/logo-github.svg"
        alt="Icone do GitHub"
        width={24}
        height={24}
        priority
        loading="eager"
      />
    </a>
  );
};

export default GitHubIcon;