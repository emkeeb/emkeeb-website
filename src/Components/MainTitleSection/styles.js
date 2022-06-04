import styled from "styled-components";

const StyledMainTitleSection = styled.div`
  height: ${(props) => props.$height};
  width: ${(props) => props.$width};
  background: no-repeat center url(${(props) => props.$backgroundPicture});
  background-size: 100% auto; /* need to make responsive later */
  position: relative;
`;

const StyledColorBackground = styled.div`
  background: ${(props) => props.$backgroundColor};
  opacity: 0.7;
  height: inherit;
  width: inherit;
`;

const StyledTitle = styled.div`
  ${(props) => {
    switch (props.$location) {
      case "left":
        return `
                    position: absolute;
                    left: 25%;
                    top: 50%;
                    -ms-transform: translate(-50%, -50%);
                    transform: translate(-50%, -50%);
                `;
      case "center":
        return `
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    -ms-transform: translate(-50%, -50%);
                    transform: translate(-50%, -50%);
                `;
      default:
        return `
                    padding-top: 30px;
                `;
    }
  }}
  text-align: center;
  font-size: ${(props) => props.$fontSize};
  color: ${(props) => props.$textColor};
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 100px;
  position: absolute;
  top: 0;
`;

export {
  StyledMainTitleSection,
  StyledColorBackground,
  StyledTitle,
  StyledContainer,
};
