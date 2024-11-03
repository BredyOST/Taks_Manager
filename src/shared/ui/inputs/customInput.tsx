import React from 'react';
import { FilterIndicatorHome } from '../../../pages/home/types/HomeTypes';
import { InputFilterHome } from './styled/styledInput';

interface ICustomInputProps extends React.HTMLAttributes<HTMLInputElement> {
    type: 'text' | 'password';
    indicator: FilterIndicatorHome;
    placeholder: string;
}

const CustomInput = ({ type = 'text', indicator, placeholder }: ICustomInputProps) => {
    if (indicator === FilterIndicatorHome.filterHome) {
        return <InputFilterHome type={type} placeholder={placeholder} />;
    }

    return null;
};

export default CustomInput;
