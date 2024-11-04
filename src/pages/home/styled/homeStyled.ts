import styled from 'styled-components';
import {math, rem} from '../../../app/styles/common';

export const WrappedMainDiv = styled.div`
    padding-top: ${rem(30)};
`;

export const CoverTabs = styled.div`
    display: flex;
    justify-content: left;
    column-gap: ${rem(15)};
    border-bottom: 1px solid rgba(27, 8, 8, 0.08);
`;

export const CoverMainTask = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-template-rows: auto;
    column-gap: ${rem(10)};
    row-gap: ${rem(10)};
    padding-top: ${rem(15)};
`;

export const CoverSelect = styled.div``;

export const SelectCover = styled.select``;

export const OptionSelect = styled.option``;

export const TaskCoverButton = styled.button`
    display: flex;
    flex-direction: column;
    border: 2px solid rgba(50, 103, 156, 0.55);
    border-radius: ${rem(10)};
    padding: ${rem(7)};
    max-width: ${rem(350)};
    transition: background-color ease 0.3s 0s;

    &:hover {
        background-color: rgb(246, 242, 242);
        transition: background-color ease 0.3s 0s;
    }
`;

export const TaskCoverTextAndTitle = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: ${rem(10)};
`;
export const TaskCoverHead = styled.div`
    display: flex;    
    flex-direction: column;
    min-width: 100%;
    row-gap: ${rem(10)};
`;

export const TaskTitle = styled.h3`
    font-weight: 600;
    text-align: center;
    font-size: ${rem(18)};
    line-height: ${math(18, 26)};
`;
export const TextTask = styled.div`
    font-weight: 400;
    font-size: ${rem(16)};
    line-height: ${math(16, 20)};
    text-align: left;
`;

export const DataTask = styled.div`
    font-weight: 400;
    font-size: ${rem(16)};
    line-height: ${math(16, 20)};
    display: flex;
    column-gap: ${rem(10)};
`;

export const DataTitle = styled.div`
    font-weight: 400;
    font-size: ${rem(16)};
    line-height: ${math(16, 20)};
`;


