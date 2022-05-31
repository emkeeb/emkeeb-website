
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors, FontSize, Borders } from "../GlobalStyles";

const StyledHeader = styled.div`
    position: fixed;
    width: 100%;
    height: 75px;
    background: ${props => props.$scrolled ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.5)'};
    box-shadow: 0 4px 20px -10px gray;
`;

const SyledLinkContainer = styled.div`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0%, -50%);
    padding: 0 30px;
`;

const StyledLink = styled(Link)`
    color: ${props => props.$scrolled ? Colors.green.dark : Colors.white};
    border-bottom: ${props => props.$isActive ? `5px solid ${Colors.green.light}` : '0'};
    text-decoration: none;
    margin: 10px;
    padding-bottom: 10px;
`;

export { StyledHeader, StyledLink, SyledLinkContainer };