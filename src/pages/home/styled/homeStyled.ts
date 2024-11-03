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
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-template-rows: auto;
    column-gap: ${rem(10)};
    row-gap: ${rem(10)};
    padding-top: ${rem(15)};
`;

export const CoverSelect = styled.div``;

export const SelectCover = styled.select``;

export const OptionSelect = styled.option``;

export const TaskCoverDiv = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid rgba(0, 0, 0, 0.55);
    border-radius: ${rem(5)};
    padding: ${rem(7)};
`;

export const TaskCoverTextAndTitle = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: ${rem(10)};
`;
export const TaskCoverHead = styled.div`
    display: flex;    
    flex-direction: column;
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


export const CoverBtnsInTask = styled.div`
  display: flex;
  column-gap: ${rem(5)};
    justify-content: flex-end;
`;
