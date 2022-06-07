import styled from "styled-components";
import { Colors, FontSize } from "../../GlobalStyles";

const StyledInfoCard = styled.div`
  background-color: ${Colors.white};
  height: 260px;
  width: 350px;
  box-shadow: -3px 1px 20px 4px rgba(0, 0, 0, 0.25);
  border-left: 4px solid ${Colors.accent};
  text-align: left;
`;

const StyledQuestion = styled.div`
  color: ${Colors.black};
  font-size: ${FontSize.subHeader};
  margin: 30px;
`;

const StyledAnswer = styled.div`
  text-align: left;
  margin: 0 30px;
`;

export { StyledInfoCard, StyledQuestion, StyledAnswer };
