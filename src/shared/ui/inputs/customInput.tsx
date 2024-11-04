import React from 'react';
import { FilterIndicatorHome } from '../../../pages/home/types/HomeTypes';
import { InputFilterHome } from './styled/styledInput';

interface ICustomInputProps extends React.HTMLAttributes<HTMLInputElement> {
    type: 'text' | 'password';
    indicator: FilterIndicatorHome;
    placeholder: string;
    value: string;
    onChange: (args:React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = ({ type = 'text', indicator, placeholder,defaultValue,onChange }: ICustomInputProps) => {
    if (indicator === FilterIndicatorHome.filterHome) {
        return <InputFilterHome onChange={onChange} value={defaultValue} type={type} placeholder={placeholder} />;
    }

    return null;
};

export default CustomInput;
