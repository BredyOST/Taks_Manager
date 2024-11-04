import styled from "styled-components";
import {rem} from "../../../../app/styles/common";


export const WrapperModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.42);
`;

export const ContentModal = styled.div`
    position: absolute;
    width: ${rem(600)};
    height: ${rem(600)};
    background-color: #f5f7fa;
    top: 50%;
    border-radius: ${rem(15)};
    left: 50%;
    transform: translate(-50%, -50%);
    padding-top: ${rem(10)};
    padding-bottom: ${rem(10)};
    padding-left: ${rem(10)};
    padding-right: ${rem(10)};
`