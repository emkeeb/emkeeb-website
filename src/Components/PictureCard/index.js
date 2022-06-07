import {
  StyledInfoCard,
  StyledTitleCard,
  StyledCardnfo,
  StyledPicture,
} from "./styles";

const InfoCard = ({ title, children, picture }) => {
  return (
    <>
      <StyledInfoCard>
        <StyledPicture src={picture} />
        <StyledTitleCard className="font-medium">{title}</StyledTitleCard>
        <StyledCardnfo className="font-size-body font-regular">
          {children}
        </StyledCardnfo>
      </StyledInfoCard>
    </>
  );
};

export default InfoCard;
