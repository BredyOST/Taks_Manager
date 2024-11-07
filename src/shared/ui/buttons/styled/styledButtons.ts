import styled from 'styled-components';
import { rem } from '../../../../app/styles/common';
import LoadingButton from '@mui/lab/LoadingButton';
import { BUTTON_COLOR_B, BUTTON_COLOR_B_HOVER } from '../../../../app/styles/variable/globalConstant';

interface ITabsButton {
    $isActive?: boolean;
}

export const TabsButton = styled.button<ITabsButton>`
    font-family: 'Tinos';
    outline: none;
    padding-top: ${rem(8)};
    padding-bottom: ${rem(8)};
    display: flex;
    column-gap: ${rem(15)};
    border-bottom: ${(props) => (props.$isActive ? '2px solid #007bff' : '2px solid transparent')};

    align-items: center;
    justify-content: center;
    span {
        font-size: ${rem(14)};
        background-color: #cfe8dd;
        border-radius: ${rem(3)};
        padding-top: ${rem(2)};
        padding-bottom: ${rem(2)};
        padding-left: ${rem(8)};
        padding-right: ${rem(8)};
        display: flex; // Устанавливаем flex для центрирования содержимого
        align-items: center; // Центрируем по вертикали
        justify-content: center; // Центрируем по горизонтали
    }
`;

export const BtnOpenTasks = styled.button`
    background-color: ${BUTTON_COLOR_B};
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color ease 0.3s 0s;
    &:hover {
        background-color: ${BUTTON_COLOR_B_HOVER};
        transition: background-color ease 0.3s 0s;
    }
`;

export const BtnAddTask = styled(LoadingButton)``;

export const BtnPopup = styled.button``;

export const BtnPickData = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
`;
