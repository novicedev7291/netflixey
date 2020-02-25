import { css } from "styled-components";

const devices = {
    md: (...args) => css`
        @media screen and (min-width: 746px) {
            ${css(...args)};
        }
    `
};

export default devices;