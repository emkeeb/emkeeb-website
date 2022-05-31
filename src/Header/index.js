import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { StyledHeader, StyledLink, SyledLinkContainer } from './styles';


const Header = () => {
    const [isScrolled, setIsScrolled] = useState();
    const location = useLocation();
    const currentPath = location.pathname;
    const listenScrollEvent = (e) => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
      }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
        console.log("hey", isScrolled, window.ScrollY)
    },[isScrolled, listenScrollEvent])

    console.log(isScrolled)
    return (
      <StyledHeader $scrolled={isScrolled}>
          <SyledLinkContainer>
            <StyledLink $scrolled={isScrolled} $isActive={currentPath === '/'} $isHome to="/">home</StyledLink>
            <StyledLink $scrolled={isScrolled} $isActive={currentPath === '/about'} to="/about">about</StyledLink>
            <StyledLink $scrolled={isScrolled} $isActive={currentPath === '/blog'} to="/blog">blog</StyledLink>
            <StyledLink $scrolled={isScrolled} $isActive={currentPath === '/setup'} to="/setup">setup</StyledLink>
            <StyledLink $scrolled={isScrolled} $isActive={currentPath === '/build-service'} to="/build-service">build service</StyledLink>
          </SyledLinkContainer>
      </StyledHeader>
    );
  }
  
  export default Header;