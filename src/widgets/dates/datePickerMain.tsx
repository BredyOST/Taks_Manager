import React from 'react';
import {LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {Dayjs} from "dayjs";
import {StyledPickersLayout} from "./styled/dateStyled";

interface IDatePickerProps {
    onClickDay: (arg: Dayjs) => void;
    selectedDays:  Dayjs;
}

const DatePickerMain = ({ onClickDay, selectedDays }: IDatePickerProps) => {

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StyledPickersLayout
                label="Срок завершения задачи"
                value={selectedDays}
                onChange={(newValue) => onClickDay(newValue)}
            />
        </LocalizationProvider>
    );

    // <StyledDayPicker locale={locale} month={month} selected={selectedDays} onDayClick={onDayClick} />;
};

export default DatePickerMain;
