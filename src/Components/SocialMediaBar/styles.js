import styled from 'styled-components';
import { Colors } from '../../GlobalStyles';

const StyledSocialMediaBar = styled.div`
    background-color: ${Colors.white};
    width: 100%;
    height: 55px;
    position: absolute;
    bottom: 0;
`;

const MediaIcon = styled.img`
    height: 25px;
    width: 25px;
    margin: 15px;
`;

export {StyledSocialMediaBar, MediaIcon};