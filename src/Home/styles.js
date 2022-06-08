import styled from "styled-components";
import { Colors } from "../GlobalStyles";

const StyledLandingPageHeader = styled.div`
  float: left;
  width: 370px;
  margin: 30px;

  @media (max-width: 550px) {
    width: 80%;
    margin: 30px 0;
  }
`;

const StyledPageLandingBlock = styled.div`
  width: 40%;
  height: 80vh;
  background: ${Colors.main.lighter};
`;

const StyledInfoContainer = styled.div`
  height: 500px;
  width: 100%;
`;

const LandingPageContentWrapper = styled.div`
  position: absolute;
  top: 25%;
  left: 30%;

  @media (max-width: 960px) {
    top: 150px;
    left: 10%;
  }
`;

const StyledSpanBorder = styled.span`
  border-left: 4px solid ${Colors.accent};
`;

export {
  StyledPageLandingBlock,
  StyledInfoContainer,
  StyledLandingPageHeader,
  LandingPageContentWrapper,
  StyledSpanBorder,
};
