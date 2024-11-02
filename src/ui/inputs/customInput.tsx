import React from 'react';

interface ICustomInputProps extends React.HTMLAttributes<HTMLInputElement> {
    type: 'text' | 'password';
}

const CustomInput = ({type = 'text'}: ICustomInputProps) => {

    return (
        <input type={type}/>
    );
};

export default CustomInput;