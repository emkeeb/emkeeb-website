import React, { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import {
  StyledHeader,
  StyledLink,
  SyledLinkContainer,
  StyledLogo,
} from "./styles";
import logo from "../assets/images/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState();
  const location = useLocation();
  const currentPath = location.pathname;

  const listenScrollEvent = useCallback(
    (e) => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    },
    [setIsScrolled]
  );

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, [isScrolled, listenScrollEvent]);

  return (
    <StyledHeader $scrolled={isScrolled}>
      <StyledLogo src={logo} />
      <SyledLinkContainer className="font-regular">
        <StyledLink
          $scrolled={isScrolled}
          $isActive={currentPath === "/"}
          $isHome
          to="/"
        >
          HOME
        </StyledLink>
        {/* <StyledLink $scrolled={isScrolled} $isActive={currentPath === '/about'} to="/about">ABOUT</StyledLink>
            <StyledLink $scrolled={isScrolled} $isActive={currentPath === '/blog'} to="/blog">BLOG</StyledLink>
            <StyledLink $scrolled={isScrolled} $isActive={currentPath === '/setup'} to="/setup">SETUP</StyledLink>
            <StyledLink $scrolled={isScrolled} $isActive={currentPath === '/build-service'} to="/build-service">BUILD SERVICE</StyledLink> */}
      </SyledLinkContainer>
    </StyledHeader>
  );
};

export default Header;
