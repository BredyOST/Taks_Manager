import React from 'react';
import { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StyledTimePickerMain } from './styled/dateStyled';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

interface ITimePickerProps {
    onClickTime: (arg: Dayjs) => void;
    selectedTime: any;
}

const TimePickerMain = ({ selectedTime, onClickTime }: ITimePickerProps) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer sx={{ padding: '0', overflow: 'none' }} components={['TimePicker']}>
                <StyledTimePickerMain
                    label='Время завершения звдачи'
                    value={selectedTime}
                    onChange={(newValue) => onClickTime(newValue)}
                    sx={{ padding: '0' }}
                />
            </DemoContainer>
        </LocalizationProvider>
    );
};

export default TimePickerMain;
