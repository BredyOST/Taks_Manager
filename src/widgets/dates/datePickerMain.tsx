import React from 'react';
import {Locale} from "date-fns/locale/types";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFnsV3";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

interface IDatePickerProps {
    onDayClick: (arg: Date | null) => void;
    locale: Locale
    selectedDays: Date | Date[]
    month: Date
}

const DatePickerMain = ({ onDayClick, selectedDays, month, locale }: IDatePickerProps) => {
    const [value, setValue] = React.useState<Date | null>(new Date());

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker', 'DatePicker', 'DatePicker']}>
                <DatePicker
                    label={'"year", "month" and "day"'}
                    views={['year', 'month', 'day']}
                />
                <DatePicker label={'"day"'} views={['day']} />
                <DatePicker label={'"month" and "year"'} views={['month', 'year']} />
            </DemoContainer>
        </LocalizationProvider>
    );
    // <StyledDayPicker locale={locale} month={month} selected={selectedDays} onDayClick={onDayClick} />;
};

export default DatePicker;
