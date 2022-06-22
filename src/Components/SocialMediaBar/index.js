import { MediaIcon } from "./styles";
import { SocialMediaLinks } from "../../constants";
import instagramicon from "../../assets/images/instagramicon.png";
import youtubeicon from "../../assets/images/youtubeicon.png";
import tiktokicon from "../../assets/images/tiktokicon.webp";
import twittericon from "../../assets/images/twittericon.jpeg";

const SocialMediaBar = () => {
  return (
    <>
      <a href={SocialMediaLinks.youtube} target="_blank" rel="noreferrer">
        <MediaIcon src={youtubeicon} />
      </a>
      <a href={SocialMediaLinks.instagram} target="_blank" rel="noreferrer">
        <MediaIcon src={instagramicon} />
      </a>
      <a href={SocialMediaLinks.tiktok} target="_blank" rel="noreferrer">
        <MediaIcon src={tiktokicon} />
      </a>
      <a href={SocialMediaLinks.twitter} target="_blank" rel="noreferrer">
        <MediaIcon src={twittericon} />
      </a>
    </>
  );
};

export default SocialMediaBar;
