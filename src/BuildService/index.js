import React, { useRef } from "react";
import { Widget } from "@typeform/embed-react";
import MainTitleSection from "../Components/MainTitleSection";
import PictureCard from "../Components/PictureCard";
import buildbackground from "../assets/images/buildbackground.png";
import lubing from "../assets/images/lubing.jpg";
import assembly from "../assets/images/assembly.jpg";
import modification from "../assets/images/modification.jpg";
import { ButtonPrimary, Colors } from "../GlobalStyles";
import {
  StyledGridContainer,
  StyledFAQ,
  StyledNotes,
  FloatingButton,
} from "./styles";

const BuildService = () => {
  const buildApplicationRef = useRef(null);

  const scrollToBuildApplication = () => {
    if (!buildApplicationRef.current) return;
    buildApplicationRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <FloatingButton>
        <ButtonPrimary onClick={scrollToBuildApplication}>
          Build Application
        </ButtonPrimary>
      </FloatingButton>
      <MainTitleSection
        title="MY SERVICES"
        backgroundPicture={buildbackground}
        height="80vh"
        textColor={`${Colors.grey}`}
        padding="100px 0 0 0"
        location="center"
      >
        <StyledGridContainer>
          <PictureCard title="Keyboard Assembly" picture={assembly}>
            If you have a keyboard or want a keyboard that needs assembly but
            can't find the patience or time or need someone to solder then I'd
            be happy to do it for you!
            <br />
            <br />I want this to be a personal experience for you so I film and
            sometimes stream all my builds.
          </PictureCard>
          <PictureCard picture={modification} title="Modification">
            To achieve an endgame keyboard it may need some modification.
            <br />
            <br />
            Here are the mods I offer:
            <ul>
              <li>PE foam</li>
              <li>Case silicone</li>
              <li>Case Foam</li>
              <li>Plate Switching (PC, Brass, Aluminum, etc.)</li>
              <li> Conversion (Bluetooth, mico, USB-C, etc.)*</li>
            </ul>
          </PictureCard>
          <PictureCard picture={lubing} title="Switch Lubing">
            I offer hand lubing and mods for switches to get the best most
            consistent sound profile.
            <br />
            Below are mods offered:
            <ul>
              <li>Basic Lubing (Krytox 205g0, GPL105, bag lubing, etc.)</li>
              <li>Films</li>
              <li>Frakenswitches</li>
              <li>Spring swaps</li>
            </ul>
            <span className="font-size-secondary">
              * stand a lone switch lubing is $0.50/switch
            </span>
          </PictureCard>
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
                Will you stream and/or film it for me?
              </span>
              <p className="font-size-body font-regular">
                I record all of my builds. If you would like your build to be
                streamed I will try to do my best but it is not a guarantee.
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
            <div>
              <span className="font-size-sub-header">
                What if I only want modded switches?
              </span>
              <p className="font-size-body font-regular">
                If you only want switch modding its $0.50/switch. I provide the
                lubricant, you provide the switches and films if needed. If you
                send me a build and want lubing its FREE.
              </p>
            </div>
          </StyledFAQ>
        </StyledGridContainer>
      </MainTitleSection>
      <MainTitleSection title="Notes" textColor={`${Colors.grey}`}>
        <StyledNotes className="font-regular">
          <ul>
            <li>
              You are required to send/pay for all parts required for build or
              service (other than lubricant, bandaids for holee mod, tape for
              tape mod, silicone, and some foam)
            </li>
            <li>
              Please send at least 5 extra switches in case any switches arrive
              dead.
            </li>
            <li>
              I am not responsible for any damage that happens during shipping
              to or from my location. You will be notified for any damage that I
              notice upon receiving the board
            </li>
            <li>
              The soldering iron I am currently using is TS100 with 63-37
              solder.
            </li>
            <li>
              I will package your keyboard like it was the last keyboard on this
              earth. But I am not responsible for any damage during shipping,
              the condition of the shipping box and the time it takes to arrive
              is completely outside of my control.
            </li>
          </ul>

          <span className="font-medium">General Build Process:</span>
          <ol>
            <li>Fill out the form below to the best of your ability</li>
            <li>
              I will reach out to discuss the build either through e-mail or
              discord.
            </li>
            <li>
              You send the products or I source the products for you and the
              products are paid for and shipped.
            </li>
            <li>
              I recieve products and build you an endgame keyboard, filmed
              and/or streamed.
            </li>
            <li>
              I send you a video of the keyboard to make sure you're happy with
              the sound. If I can I will tweak things to your liking.
            </li>
            <li>
              I package the keyboard with care and ship it back to you. If you
              shipped it without a return label or I sourced the parts for you
              then I will order a USPS label and will NOT ship until reimbursed
              for it.
            </li>
            <li>You recieve your keyboard and can type happily :D</li>
          </ol>
        </StyledNotes>
      </MainTitleSection>
      <MainTitleSection
        title="Build Application"
        height="100px"
        textColor={`${Colors.grey}`}
      />
      <div ref={buildApplicationRef}>
        <Widget style={{ width: "100%", height: "70vh" }} id="sAWMfKR6" />
      </div>
    </>
  );
};

export default BuildService;
