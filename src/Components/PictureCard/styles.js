import styled from "styled-components";
import { Colors, FontSize } from "../../GlobalStyles";

const StyledPicture = styled.img`
  width: 100%;
  height: 200px;
`;

const StyledInfoCard = styled.div`
  background-color: ${Colors.white};
  height: 500px;
  width: 300px;
  box-shadow: -5px 1px 20px 4px rgba(0, 0, 0, 0.15);
  margin-top: 50px;
`;

const StyledTitleCard = styled.div`
  color: ${Colors.black};
  font-size: ${FontSize.subHeader};
  text-align: center;
  border-left: 2px solid ${Colors.accent};
  padding-left: 5px;
  width: fit-content;
  margin: 15px auto 0 auto;
`;

const StyledCardnfo = styled.div`
  text-align: left;
  width: 100%;
  margin: 20px 30px;
`;

export { StyledInfoCard, StyledTitleCard, StyledCardnfo, StyledPicture };
