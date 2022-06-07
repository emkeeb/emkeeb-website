import { Widget } from "@typeform/embed-react";
import MainTitleSection from "../Components/MainTitleSection";
import PictureCard from "../Components/PictureCard";
import buildbackground from "../assets/images/buildbackground.png";
import lubing from "../assets/images/lubing.jpg";
import { Colors } from "../GlobalStyles";
import { StyledGridContainer, StyledFAQ } from "./styles";

const BuildService = () => {
  return (
    <>
      <MainTitleSection
        title="MY SERVICES"
        backgroundPicture={buildbackground}
        height="80vh"
        textColor={`${Colors.grey}`}
        padding="100px 0 0 0"
        location="center"
      >
        <StyledGridContainer>
          <PictureCard title="Keyboard Assembly" picture={lubing}>
            Have a keyboard that needs to be assembled?
          </PictureCard>
          <PictureCard picture={lubing} title="Switch Lubing" />
          <PictureCard picture={lubing} title="Modification" />
        </StyledGridContainer>
      </MainTitleSection>
      <MainTitleSection
        title="FAQ"
        backgroundColor={`${Colors.main.lighter}`}
        height="60vh"
        location="center"
        textColor={`${Colors.grey}`}
      >
        <StyledGridContainer>
          <StyledFAQ>
            <div>
              <span className="font-size-sub-header">
                How much more does this cost?
              </span>
              <p className="font-size-body font-regular">
                Zilch, Zero, Nada. I know life can be busy, the process tedious
                and tools expensive, but I still want you to have the best
                sounding keyboard. You only pay for materials (keyboard,
                switches, keycaps, stabs, etc) and all shipping.
              </p>
            </div>
            <div>
              <span className="font-size-sub-header">
                What if I don't know what I want?
              </span>
              <p className="font-size-body font-regular">
                Thats okay! There is a lot of info out there. Fill out the form
                below and I can help you figure out what you want.
              </p>
            </div>
            <div>
              <span className="font-size-sub-header">
                Can you source parts for me?
              </span>
              <p className="font-size-body font-regular">
                Absolutely, this may increase the time it takes for you to
                recieve your keyboard. But I understand that not everyone wants
                to source parts, this will limit me to vendors who are in or
                ship to the USA."
              </p>
            </div>
            <div>
              <span className="font-size-sub-header">
                Can I ship parts from vendors to you?
              </span>
              <p className="font-size-body font-regular">
                Yes, just remember that I am based in the MN, USA when
                calculating shipping costs. Please include tracking numbers when
                things ship so I can keep track of orders.
              </p>
            </div>
            <div>
              <span className="font-size-sub-header">
                Can I put a rush on the order?
              </span>
              <p className="font-size-body font-regular">
                I can work with you if you want the keyboard by a certain time
                frame. Often we are constrained by shipping times and what is
                in-stock. Don't want to wait? check out the keyboards I've
                already made in the keyboards tab!
              </p>
            </div>
          </StyledFAQ>
        </StyledGridContainer>
      </MainTitleSection>
      <MainTitleSection
        title="Build Application"
        height="100px"
        textColor={`${Colors.grey}`}
      />
      <Widget style={{ width: "100%", height: "70vh" }} id="sAWMfKR6" />
    </>
  );
};

export default BuildService;
