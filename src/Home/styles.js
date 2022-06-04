import styled from "styled-components";
import { Colors } from "../GlobalStyles";

const StyledLandingPageHeader = styled.div`
  float: left;
  width: 370px;
  margin: 30px;
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
