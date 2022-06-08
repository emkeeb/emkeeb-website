import { useNavigate } from "react-router-dom";
import {
  StyledPageLandingBlock,
  StyledLandingPageHeader,
  LandingPageContentWrapper,
  StyledSpanBorder,
} from "./styles";
import { ButtonPrimary, ButtonSecondary } from "../GlobalStyles";
import LandingPageCard from "../Components/LandingPageCard";

const Home = () => {
  const navigate = useNavigate();

  const navigateTo = (location) => {
    navigate(`/${location}`);
  };

  return (
    <div>
      <StyledPageLandingBlock>
        <LandingPageContentWrapper>
          <LandingPageCard />
          <StyledLandingPageHeader>
            <div className="font-black font-size-humongus margin-bottom-xl">
              Hello
            </div>
            <div className="font-size-sub-header font-regular-italic margin-bottom-xl margin-top-xl">
              <span className="margin-right-lg">keyboard builder</span>
              <StyledSpanBorder className="padding-left-lg">
                software engineer
              </StyledSpanBorder>
            </div>
            <div className="margin-top-xl margin-bottom-xl">
              <ButtonPrimary
                onClick={() => navigateTo("build-service")}
                className="margin-right-lg margin-bottom-sm font-size-body"
              >
                build service
              </ButtonPrimary>
              <ButtonSecondary
                onClick={() => navigateTo("")}
                className="font-size-body"
              >
                contact me
              </ButtonSecondary>
            </div>
            <div className="font-light font-line-height-x2 padding-top-xs">
              <p className="font-size-body">
                I have a passion for tech and keyboards, and love creating
                content for both!
              </p>
              <p className="font-size-body">
                I build & review keyboards, I take commissions for keyboard
                builds for <b>FREE</b>. If you're interested in owning an
                awesome keyboard with a personal build experience click the
                build service button above!
              </p>
            </div>
          </StyledLandingPageHeader>
        </LandingPageContentWrapper>
      </StyledPageLandingBlock>
    </div>
  );
};

export default Home;
