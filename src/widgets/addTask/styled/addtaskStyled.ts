import styled from 'styled-components';
import { math, rem } from '../../../app/styles/common';

export const FormAddTask = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: ${rem(15)};
    min-width: 100%;
`;

export const CoverBtnsAddTask = styled.div`
    padding-top: ${rem(20)};
    display: flex;
    column-gap: ${rem(20)};
    padding-bottom: ${rem(20)};
    justify-content: center;
`;

export const CoverBlockInpAddTask = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: ${rem(10)};
    flex: 1 1 auto;
`;

export const TitleAddTaskBlock = styled.h3`
    font-size: ${rem(20)};
    font-weight: 600;
    line-height: ${math(20, 30)};
    text-align: center;
`;
