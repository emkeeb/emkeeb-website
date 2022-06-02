import styled from "styled-components";
import { FontSize, Colors } from "../../GlobalStyles";

const StyledLandingPageCard = styled.div`
  height: 530px;
  width: 375px;
  background-color: ${Colors.main.lightest};
  box-shadow: -4px 9px 20px -10px rgba(0, 0, 0, 0.3);
  text-align: center;
  float: left;
  position: relative;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  height: 250px;
  width: 250px;
  margin-top: 10%;
`;

const NameTitle = styled.div`
  text-align: center;
  font-size: ${FontSize.header};
  margin: 8%;
`;

const StyledHr = styled.hr`
  border: 1px solid ${Colors.accent};
  width: 15%;
`;

export { StyledLandingPageCard, ProfilePicture, NameTitle, StyledHr };
