import { Colors } from "../../GlobalStyles";
import {
  StyledMainTitleSection,
  StyledColorBackground,
  StyledTitle,
  StyledContainer,
} from "./styles";

const MainTitleSection = ({
  height = "60vh",
  width = "100%",
  title = "",
  backgroundPicture = "/",
  backgroundColor = `${Colors.white}`,
  location,
  fontSize = "34px",
  textColor = `${Colors.main.dark}`,
  children,
}) => {
  return (
    <>
      <StyledMainTitleSection
        $height={height}
        $width={width}
        $location={location}
        $backgroundPicture={backgroundPicture}
      >
        <StyledColorBackground $backgroundColor={backgroundColor} />
        <StyledContainer>
          <StyledTitle
            className="font-black"
            $textColor={textColor}
            $fontSize={fontSize}
            $location={location}
          >
            <span className="font-black"> {title} </span>
          </StyledTitle>
          {children}
        </StyledContainer>
      </StyledMainTitleSection>
    </>
  );
};

export default MainTitleSection;
