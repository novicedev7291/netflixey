import styled from "styled-components";
import devices from "../utils/styledUtils";

const StyledLargeBtn = styled.button`
    background: red;
    color: #fff;
    border: 0;
    border-radius: 5px;
    width: 100%;
    height: 50px;
    display: block;
    margin: 0 auto;
    font-size: 14px;
    outline: none;
    transition: all 0.1s cubic-bezier(0.67, 0.13, 0.1, 0.81);

    &:hover {
        cursor: pointer;
        transform: tranlateY(2px);
        box-shadow: 10px 55px 150px -20px #fff;
    }

    &:active {
        transform: translateY(4px);
        background: #2a628f;
    }

    ${devices.md`
        width: 60%;
        position: relative;
        top: 70%;
    `};
`;

export default StyledLargeBtn;