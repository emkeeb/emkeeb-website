import styled from "styled-components";
import { Colors, FontSize } from "../GlobalStyles";

const StyledLandingPageHeader = styled.div`
    position: absolute;
    top: 25%;
    left: 25%;
    translate(-50%,-50%);
    font-size: ${FontSize.gigantic};
    color: ${Colors.green.dark};
`;

const StyledPageLanding = styled.div`
    width: 100%;
    height: 80vh;
    background: ${Colors.green.lightest};
`;

const StyledInfoContainer = styled.div`
    height: 500px;
    width: 100%;
`;

export {
    StyledPageLanding,
    StyledInfoContainer,
    StyledLandingPageHeader
}