import styled from 'styled-components';
import { math, rem } from '../../../app/styles/common';

export const HomeWrapper = styled.div`
    padding-top: ${rem(30)};
`;

export const CoverTabs = styled.div`
    display: flex;
    justify-content: left;
    column-gap: ${rem(15)};
    border-bottom: 1px solid rgba(27, 8, 8, 0.08);
`;

export const TaskWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-template-rows: auto;
    column-gap: ${rem(10)};
    row-gap: ${rem(10)};
    padding-top: ${rem(15)};
`;
export const TaskNoItems = styled.div`
    font-size: ${rem(18)};
    font-weight: 600;
    background-color: antiquewhite;
    border: 2px solid rgba(27, 8, 8, 0.08);
    padding-top: ${rem(5)};
    padding-bottom: ${rem(5)};
    padding-left: ${rem(8)};
    padding-right: ${rem(8)};
    border-radius: ${rem(5)};
`;

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

export const TaskCard = styled.div`
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 10px 0;
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }
`;

export const TaskTitle = styled.h3`
    font-size: ${rem(18)};
    font-weight: 600;
    color: #333;
    margin-bottom: ${rem(10)};
`;

export const TaskSubtitle = styled.p`
    font-size: ${rem(16)};
    color: #555;
    margin-bottom: ${rem(15)};
    flex: 1 1 auto;
`;

export const TaskInfo = styled.div`
    font-size: ${rem(14)};
    color: #777;
    margin-bottom: ${rem(15)};
`;

export const TaskData = styled.div`
    margin-bottom: ${rem(5)};
`;
