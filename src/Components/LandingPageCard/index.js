import {
  StyledLandingPageCard,
  ProfilePicture,
  NameTitle,
  StyledHr,
  StyledSocialMediaBar,
} from "./styles";
import emkeebpfp from "../../assets/images/emkeebpfp.JPG";
import SocialMediaBar from "../SocialMediaBar";

const LandingPageCard = () => {
  return (
    <StyledLandingPageCard>
      <ProfilePicture src={emkeebpfp} alt="emkeeb photo" />
      <NameTitle className="font-bold">@emkeeb</NameTitle>
      <StyledHr />
      <div className="font-letter-spacing font-light margin-xl">
        CONTENT CREATOR
      </div>
      <StyledSocialMediaBar>
        <SocialMediaBar />
      </StyledSocialMediaBar>
    </StyledLandingPageCard>
  );
};

export default LandingPageCard;
