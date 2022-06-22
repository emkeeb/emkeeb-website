import { StyledFooter, StyledHeartFingers } from "./styles";
import SocialMediaBar from "../Components/SocialMediaBar";
import heartfingers from "../assets/images/heartfingers.png";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="font-light-italic margin-top-xl">
        {" "}
        made with <StyledHeartFingers src={heartfingers} /> by emkeeb{" "}
      </div>
      <SocialMediaBar />
    </StyledFooter>
  );
};

export default Footer;
