import {
  StyledLandingPageCard,
  ProfilePicture,
  NameTitle,
  StyledHr,
} from "./styles";
import emkeebpfp from "../../assets/images/emkeebpfp.png";
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
      <SocialMediaBar />
    </StyledLandingPageCard>
  );
};

export default LandingPageCard;
