import React from 'react';
import { FilterIndicatorHome } from '../../../pages/home/types/HomeTypes';
import {InputAddTask, InputFilterHome, InputSearch} from './styled/styledInput';

interface ICustomInputProps extends React.HTMLAttributes<HTMLInputElement> {
    type: 'text' | 'password';
    indicator: FilterIndicatorHome;
    placeholder: string;
    value: string;
    onChange: (args: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = ({ type = 'text', indicator, placeholder, defaultValue, onChange }: ICustomInputProps) => {
    if (indicator === FilterIndicatorHome.filterHome) {
        return  <InputSearch  size="small"  id="outlined-basic"  label={placeholder} variant="outlined" onChange={onChange} defaultValue={defaultValue} type={type} />
    }
    if (indicator === FilterIndicatorHome.addTaskInput) {
        return (
                <InputAddTask  size="small"  id="outlined-basic"  label={placeholder} variant="outlined" onChange={onChange} defaultValue={defaultValue} type={type} />
        )
    }

    return null;
};

export default CustomInput;
