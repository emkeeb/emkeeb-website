import { StyledInfoCard, StyledQuestion, StyledAnswer } from "./styles";

const InfoCard = ({ question, answer }) => {
  return (
    <>
      <StyledInfoCard>
        <StyledQuestion className="font-light-italic">
          {question}
        </StyledQuestion>
        <StyledAnswer className="font-size-body font-regular">
          {answer}
        </StyledAnswer>
      </StyledInfoCard>
    </>
  );
};

export default InfoCard;
