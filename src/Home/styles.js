import styled from "styled-components";
import { Colors } from "../GlobalStyles";

const StyledLandingPageHeader = styled.div`
  float: left;
  width: 370px;
  padding: 30px;

  @media (max-width: 550px) {
    width: 80%;
    padding: 30px 0;
  }
`;

const StyledPageLandingBlock = styled.div`
  background: ${Colors.main.lighter};
  height: 65vh;
  width: 40%;
  position: absolute;
  z-index: -1;
`;

const StyledInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  grid-template-columns: auto auto auto;
  gap: 0 0;
  width: 100%;
  justify-content: center;
  align-items: center;

  padding: ${(props) =>
    props.$isFirstContainer ? "200px 0 100px 0" : "100px 0 50px 0"};

  @media (max-width: 960px) {
    padding: ${(props) =>
      props.$isFirstContainer ? "125px 0 25px 0;" : "25px 0 25px 0"};
  }
`;

const StyledYoutubeInfo = styled.div`
  float: right;
  color: ${Colors.accent};
  padding: 20px;
`;

const StyledYoutubeIframe = styled.div`
  width: 560px;
  height: 315px;

  @media (max-width: 640px) {
    width: 300px;
    height: 200px;
  }
`;

const StyledSpanBorder = styled.span`
  border-left: 4px solid ${Colors.accent};
`;

export {
  StyledPageLandingBlock,
  StyledInfoContainer,
  StyledLandingPageHeader,
  StyledSpanBorder,
  StyledYoutubeInfo,
  StyledYoutubeIframe,
};
