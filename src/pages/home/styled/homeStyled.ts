import styled from "styled-components";
import {rem} from "../../../app/styles/common";


export const WrappedMainDiv = styled.div`
        padding-top: ${rem(30)};
`;

export const CoverTabs = styled.div`
    display: flex;
    justify-content: left;
    column-gap: ${rem(15)};
    border-bottom: 1px solid rgba(27, 8, 8, 0.08);
`;

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
    border-bottom: ${(props) =>
            props.$isActive ? "2px solid #007bff" : "2px solid transparent"};
    
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

export const CoverSelect = styled.div`
  
`;

export const SelectCover = styled.select`
  
`;

export const OptionSelect = styled.option`
  
`;