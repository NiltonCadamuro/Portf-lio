import Image from "next/image";

const LinkedInIcon = () => {
  return (
    <a href="https://www.linkedin.com/in/niltoncadamurojunior/" target="_blanck" className="p-3 bg-surfaceSecondary hover:bg-surfaceTertiary rounded-lg">
      <Image
        className=""
        src="/social-medias/logo-linkedin.svg"
        alt="Icone do LinkedIn"
        width={24}
        height={24}
        priority
        loading="eager"
      />
    </a>
  );
};

export default LinkedInIcon;