import { Colors } from "../../GlobalStyles";
import {
  StyledMainTitleSection,
  StyledTitle,
  StyledContainer,
  StyledWrapper,
} from "./styles";

const MainTitleSection = ({
  height = "60vh",
  width = "100%",
  padding,
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
        $backgroundColor={backgroundColor}
      >
        <StyledContainer $padding={padding}>
          <StyledWrapper
            className="font-black"
            $textColor={textColor}
            $fontSize={fontSize}
            $location={location}
          >
            <StyledTitle className="font-black" $fontSize={fontSize}>
              {" "}
              {title}{" "}
            </StyledTitle>
            {children}
          </StyledWrapper>
        </StyledContainer>
      </StyledMainTitleSection>
    </>
  );
};

export default MainTitleSection;
