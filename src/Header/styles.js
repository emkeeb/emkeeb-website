
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors, ZIndex } from "../GlobalStyles";

const StyledHeader = styled.div`
    position: fixed;
    width: 100%;
    height: 100px;
    background-color: ${Colors.white};
    z-index: ${ZIndex.header};
`;

const SyledLinkContainer = styled.div`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0%, -50%);
    padding: 0 30px;
`;

const StyledLink = styled(Link)`
    color: ${Colors.main.dark };
    border-bottom: ${props => props.$isActive ? `5px solid ${Colors.accent}` : '0'};
    text-decoration: none;
    margin: 10px;
    padding-bottom: 10px;

    :hover {
        color: ${Colors.accent};
    }
`;

const StyledLogo = styled.img`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0%,-50%);
    padding: 0 30px;
    height: 75px;
    width: 75px;
`;

export { StyledHeader, StyledLink, SyledLinkContainer, StyledLogo };