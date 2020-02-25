import styled from "styled-components";
import devices from "../utils/styledUtils";

const StyledMovieContainer = styled.section`
    background: ${props => props.theme.secondaryBG};
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: relative;

    ${devices.md`
        width: 646px;
        height: 390px;
        border-radius: 15px;
    `};
`;

export default StyledMovieContainer;