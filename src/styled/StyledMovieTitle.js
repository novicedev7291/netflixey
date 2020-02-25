import styled from "styled-components";

const StyledMovieTitle = styled.div`
    color: ${props => (props.isLarge ? "#ECF0F1" : "#554321")};
    font-size: ${props => (props.isLarge ? "2.2rem" : "1rem")};
    margin-bottom: 4px;
    text-overflow: ellipsis;
    width: ${props => (props.isLarge ? "auto" : props.theme.posterW)};
    overflow: hidden;
    white-space: ${props => (props.isLarge ? "wrap" : "nowrap")};
`;

export default StyledMovieTitle;