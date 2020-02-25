import styled, { keyframes } from "styled-components";
import devices from "../utils/styledUtils";

const show = keyframes`
    to {
        transform: translateY(0);
        opacity: 1
    }
`;

const StyledMoviePoster = styled.img`
    width: ${props => props.isExpanded ? 
        props.theme.posterExpandedW:
        props.theme.posterW};
    height: ${props => props.isExpanded ? 
        props.theme.posterExtendedH:
        props.theme.posterH};
    border-radius: 4px;

    opacity: 0;
    transform: translateY(-100px);
    animation: ${show} 500ms forwards;
    animation-delay: ${props =>
        props.index ? `${props.index / 10}s` : "initial"}

    ${devices.md`
        position: ${props => props.isExpanded ? "absolute" : "initial"};
        top: ${props => props.isExpanded ? "-10%" : "initial"};
        left: ${props => props.isExpanded ? "-6%" : "initial"};
    `}
`;

export default StyledMoviePoster;