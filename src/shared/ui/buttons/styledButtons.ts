import styled from 'styled-components';
import { rem } from '../../../app/styles/common';

interface ITabsButton {
    $isActive: boolean;
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


export const BtnTasks = styled.button`
    font-family: 'Tinos';
    outline: none;
    padding-top: ${rem(6)};
    padding-bottom: ${rem(6)};
    padding-left: ${rem(8)};
    padding-right: ${rem(8)};
    border-radius: ${rem(5)};
    background-color: antiquewhite;
    transition: background-color ease 0.3s 0s;
    &:hover {
        background-color: #cfbfa9;
        transition: background-color ease 0.3s 0s;
    }
`;