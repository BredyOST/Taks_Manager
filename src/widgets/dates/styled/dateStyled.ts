import styled from 'styled-components';
import { DayPicker } from 'react-day-picker';
import { rem } from '../../../app/styles/common';
import {DesktopDatePicker, LocalizationProvider, PickersLayout} from "@mui/x-date-pickers";
import {TimePicker} from "@mui/x-date-pickers";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
export const StyledTimePicker = styled(TimePicker)`
    .react-time-picker {
        display: flex;
        align-items: center;
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 5px;
        width: 200px;
    }

    .react-time-picker__inputGroup__leadingZero {
        display: none;
    }

    .react-time-picker__wrapper {
        display: flex;
        border: none;
        width: 100%;
        align-items: center;
        gap: ${rem(10)};
    }

    .react-time-picker__inputGroup {
        display: flex;
        align-items: center;
        gap: ${rem(5)};
    }

    .react-time-picker__inputGroup__input {
        min-width: ${rem(60)};
        font-size: ${rem(14)};
        padding: ${rem(2)};
        border: 1px solid #ddd;
        border-radius: ${rem(5)};
        text-align: center;
    }

    .react-time-picker__inputGroup__input:focus {
        border-color: blue;
        outline: none;
    }

    .react-time-picker__clock-button {
        background: transparent;
        border: none;
        cursor: pointer;
    }

    .react-time-picker__clear-button {
        background: transparent;
        border: none;
        cursor: pointer;
        font-size: 1.25rem;
        margin-left: auto;
    }
`;

export const StyledDayPicker = styled(DayPicker)`
    background-color: #ffffff;
    border-radius: 8px;
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(32px);

    .rdp-root {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .rdp-caption {
        order: 1; /* Поместите текст с датой между кнопками */
        flex-grow: 1;
        text-align: center;
    }
    .rdp-button_previous,
    .rdp-button_next {
        order: 0; /* Убедитесь, что кнопки расположены по краям */
    }
    .rdp-nav {
        display: flex;
        align-items: center; /* Выравнивание по вертикали */
        justify-content: space-between;
    }

    .rdp-nav_button {
        height: ${rem(20)};
        width: ${rem(20)};
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .rdp-nav_disabled {
        opacity: 0.5;
    }

    .rdp-today {
        color: #4caf50;
    }

    .rdp-weekday {
        text-align: center;
    }

    .rdp-day {
        height: ${rem(25)};
        width: ${rem(25)};
        border-radius: 100%;
        border: 2px solid transparent;
        transition:
            background 0.3s ease,
            transform 0.3s ease;
    }

    .rdp-day_today {
        border: 2px solid #ffeb3b;
    }

    .rdp-week_number {
        border-radius: 100%;
        border: 2px solid transparent;
        height: ${rem(15)};
        opacity: 0.75;
        width: ${rem(15)};
    }

    .rdp-disabled {
        opacity: 0.5;
    }

    .rdp-outside {
        opacity: 0.75;
    }

    .rdp-month {
        color: #000000;
    }

    .rdp-today {
        color: var(--rdp-accent-color);
    }

    .rdp-months {
        gap: 2rem;
    }

    .rdp-weekday {
        opacity: 0.75;
        padding: 0.5rem 0rem;
    }
`;

export const WrapperDates = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: ${rem(25)};
    padding-right: ${rem(25)};
`;

export const CoverBlockDatePick = styled.div`
    display: flex;
    row-gap: ${rem(10)};
    align-items: center;
    column-gap: ${rem(10)};
    position: relative;
    width: ${rem(250)};
`;

export const CoverBlockInformation = styled.div`
    display: flex;
    column-gap: ${rem(10)};
    align-items: center;
    width: ${rem(250)};
`;
export const StyledPickersLayout = styled(DesktopDatePicker)`
    .MuiOutlinedInput-root {
             padding-top: ${rem(10)};
    }
         .MuiInputBase-input {
             font-size: ${rem(14)};
             padding-top: ${rem(5)};
             padding-bottom: ${rem(5)};
             padding-left: ${rem(10)};
             padding-right: ${rem(10)};
         },
    
    .MuiOutlinedInput-root {
    align-items: center;
    display: flex;
    }
    
`;

export const StyledTimePickerMain = styled(TimePicker)`
   
     .MuiOutlinedInput-root {
             padding-top: ${rem(10)};
    }
         .MuiInputBase-input {
             font-size: ${rem(14)};
             padding-top: ${rem(5)};
             padding-bottom: ${rem(5)};
             padding-left: ${rem(10)};
             padding-right: ${rem(10)};
         },
`;
