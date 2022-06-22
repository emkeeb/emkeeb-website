import styled from "styled-components";
import { Colors } from "../GlobalStyles";

const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 125px;
  background-color: ${Colors.greyLightest};
  text-align: center;
`;

const StyledHeartFingers = styled.img`
  height: 20px;
  width: 10px;
`;

export { StyledFooter, StyledHeartFingers };
