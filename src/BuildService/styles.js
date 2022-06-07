import styled from "styled-components";

const StyledGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-template-columns: auto auto auto;
  gap: 30px 30px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const StyledFAQ = styled.div`
  margin: 0 15%;
  padding-top: 25px;
  text-align: left;
`;
export { StyledGridContainer, StyledFAQ };
