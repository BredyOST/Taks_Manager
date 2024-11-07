import React from 'react';
import {
    CoverBlockDatePick,
    CoverBlockInformation,
    WrapperDates,
} from './styled/dateStyled';
import DatePickerMain from './datePickerMain';
import dayjs, {Dayjs} from "dayjs";
import TimePickerMain from "./timePicker";

const Dates = () => {
    const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(dayjs('2022-04-17'));
    const [selectedTime, setSelectedTime] = React.useState<Dayjs | null>(dayjs('2022-04-17T15:30'));
    const handleDayClick = (day:Dayjs) => {
        setSelectedDate(day);
    };
    const handleTimeClick = (day:Dayjs) => {
        setSelectedDate(day);
    };

    return (
        <WrapperDates>
            <CoverBlockDatePick>
               <DatePickerMain onClickDay={handleDayClick} selectedDays={selectedDate} />
            </CoverBlockDatePick>
            <CoverBlockInformation>
                <TimePickerMain selectedTime={selectedTime} onClickTime={handleTimeClick} />
            </CoverBlockInformation>
        </WrapperDates>
    );
};

export default Dates;
