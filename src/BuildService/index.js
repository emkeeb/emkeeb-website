import { Widget } from "@typeform/embed-react";
import MainTitleSection from "../Components/MainTitleSection";
import buildbackground from "../assets/images/buildbackground.jpg";
import { StyledSection } from "./styles";

const BuildService = () => {
  return (
    <>
      <MainTitleSection
        title="My Services"
        backgroundPicture={buildbackground}
      ></MainTitleSection>
      <StyledSection>
        this is a place holder for more information. Does this cost anything?
        What if I don't know what I want? Can you source parts for me? Can I
        ship parts from vendors to you? Do I get photos of my board included?
        Things I don't offer: Any more questions please reach out via e-mail!
      </StyledSection>
      <div className="margin-lg font-size-header font-medium-italic">
        {" "}
        Build Application{" "}
      </div>
      <Widget style={{ width: "100%", height: "60vh" }} id="sAWMfKR6" />
    </>
  );
};

export default BuildService;
