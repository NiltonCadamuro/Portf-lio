import GitHubIcon from "./GitHubIcon";
import InstagramIcon from "./InstagramIcon";
import LinkedInIcon from "./LinkedInIcon";

const SocialMedias = () => {
  return (
    <div className="flex gap-2">
      <LinkedInIcon />
      <GitHubIcon />
      <InstagramIcon />
    </div>
  );
};

export default SocialMedias;