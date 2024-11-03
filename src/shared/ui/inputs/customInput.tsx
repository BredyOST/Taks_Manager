import React from 'react';
import {FilterIndicatorHome} from "../../../pages/home/types/HomeTypes";

interface ICustomInputProps extends React.HTMLAttributes<HTMLInputElement> {
    type: 'text' | 'password';
    indicator: FilterIndicatorHome;
}

const CustomInput = ({type = 'text', indicator}: ICustomInputProps) => {

    if(indicator === FilterIndicatorHome.filterHome) {
        return (
            <input
                type={type}
            />
        );
    }

    return null

};

export default CustomInput;