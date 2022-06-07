import styled from "styled-components";

const StyledMainTitleSection = styled.div`
  ${(props) => {
    if (props.$backgroundPicture !== "/") {
      return `
        background: no-repeat center url(${props.$backgroundPicture});`;
    } else {
      return `background-color: ${props.$backgroundColor};`;
    }
  }}

  background-size: 100% auto; /* need to make responsive later */
  @media (max-width: 960px) {
    background-size: auto;
  }
`;

const StyledWrapper = styled.div`
  ${(props) => {
    switch (props.$location) {
      case "left":
        return ` 
                    display: flex;
                    margin: 50px;
                `;
      case "center":
        return `
                    margin: 30px;
                `;
      default:
        return `
                    margin: 30px;
                `;
    }
  }}
  text-align: center;
  color: ${(props) => props.$textColor};
`;

const StyledTitle = styled.div`
  font-size: ${(props) => props.$fontSize};
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: ${(props) => props.$padding};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { StyledMainTitleSection, StyledWrapper, StyledContainer, StyledTitle };
