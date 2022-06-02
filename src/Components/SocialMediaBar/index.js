import { StyledSocialMediaBar, MediaIcon } from "./styles";
import { SocialMediaLinks } from "../../constants";
import instagramicon from "../../assets/images/instagramicon.png";
import youtubeicon from "../../assets/images/youtubeicon.png";
import tiktokicon from "../../assets/images/tiktokicon.webp";
import twittericon from "../../assets/images/twittericon.jpeg";

const SocialMediaBar = () => {
  return (
    <StyledSocialMediaBar>
      <a href={SocialMediaLinks.youtube} target="_blank">
        <MediaIcon src={youtubeicon} />
      </a>
      <a href={SocialMediaLinks.instagram} target="_blank">
        <MediaIcon src={instagramicon} />
      </a>
      <a href={SocialMediaLinks.tiktok} target="_blank">
        <MediaIcon src={tiktokicon} />
      </a>
      <a href={SocialMediaLinks.twitter} target="_blank">
        <MediaIcon src={twittericon} />
      </a>
    </StyledSocialMediaBar>
  );
};

export default SocialMediaBar;
