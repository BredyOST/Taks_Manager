
import styled from "styled-components";
import {math, rem} from "../../../app/styles/common";

const COLOR = `2px solid rgba(0, 0, 0, 0.11);`
const PADDING_BOTTOM = 10;

export const CoverSidePanel = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    max-width: 45%;
    height: 100vh;
    background-color: #ffffff;
    border-left: 10px solid rgba(218, 206, 206, 0.48);
    box-shadow: ${rem(-2)} ${rem(0)} ${rem(5)} ${rem(1)} rgba(184, 179, 179, 0.24);
    padding-left: ${rem(10)};
    padding-right: ${rem(10)};
    padding-top: ${rem(35)};
    padding-bottom: ${rem(15)};
    overflow: auto;
`;

export const HeaderSidePanel = styled.div`
    display: flex;
    justify-content: flex-start;
    padding-bottom: ${rem(15)};
    border-bottom: ${COLOR};
`;

export const CoverTextTaskSidePanel = styled.div`
  
`;

export const TitleTaskSidPanel = styled.h3`
  font-size: ${rem(25)};
    font-weight: 600;
    line-height: ${math(18, 26)};
    border-bottom: ${COLOR};
    padding-bottom: ${rem(PADDING_BOTTOM)};
    text-align: center;
`;

export const TextTaskSidePanel = styled.div`
    font-size: ${rem(16)};
    font-weight: 400;
    line-height: ${math(16, 22)};
    border-bottom: ${COLOR};
    padding-bottom: ${rem(PADDING_BOTTOM)};
`;

export const CoverDateSidePanel = styled.div`
    font-size: ${rem(16)};
    font-weight: 400;
    line-height: ${math(16, 22)};
    border-bottom: ${COLOR};
    padding-bottom: ${rem(PADDING_BOTTOM)};
`;

export const CoverBtnsInTask = styled.div`
    display: flex;
    column-gap: ${rem(7)};
    justify-content: flex-end;
    align-items: center;
`;

export const DateTextSidePanelCover = styled.div`
  
`;

export const TitleDataSidePanel = styled.div`
`;

export const TextDataSidePanel = styled.div`
  
`;

export const CloseActiveTabs = styled.button`

    min-width: ${rem(30)};
    min-height: ${rem(30)};
    max-width: ${rem(30)};
    max-height: ${rem(30)};
    flex: 0 0 ${rem(30)};
    border-radius: 50%;
    border: 2px solid #0001;
    background-color: #f3e6e6;
    transition: background-color ease 0.3s 0s;

    &:hover {
        background-color: #cc9595;
        transition: background-color ease 0.3s 0s;
    }

    span {
        position: relative;

        &::before, &::after {
            content: '';
            min-width: ${rem(18)};
            min-height: ${rem(2)};
            background-color: #292828;
            position: absolute;
            top: 0;
            left: 0;
            transform-origin: center
        }

        &::before {
            transform: translate(-50%, -50%) rotate(-45deg);
        }

        &::after {
            transform: translate(-50%, -50%) rotate(45deg);
        }
    }
`;
