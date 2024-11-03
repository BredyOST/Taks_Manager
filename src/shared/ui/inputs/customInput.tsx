import React from 'react';
import {FilterIndicatorHome} from "../../../pages/home/types/HomeTypes";

interface ICustomInputProps extends React.HTMLAttributes<HTMLInputElement> {
    type: 'text' | 'password';
    indicator: FilterIndicatorHome;
}

const CustomInput = ({type = 'text'}: ICustomInputProps) => {

    return (
        <input
            type={type}
        />
    );
};

export default CustomInput;