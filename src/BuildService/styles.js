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

  @media (max-width: 960px) {
    margin: 0 15px;
  }
`;

const StyledNotes = styled.div`
  text-align: left;
  margin: 0 15%;

  @media (max-width: 960px) {
    margin: 0 15px;
  }
`;

const FloatingButton = styled.div`
  position: absolute;
  top: 110px;
  left 10px;
  
  button {
    width: fit-content;
  }

  @media (max-width: 650px) {
    top: 102px;
    left: 2px;
    button {
      height: 30px;
      padding: 4px 10px;
    }
  }
`;
export { StyledGridContainer, StyledFAQ, StyledNotes, FloatingButton };
