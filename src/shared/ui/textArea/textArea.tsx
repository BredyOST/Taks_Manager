import React from 'react';
import { TextAreaAddTask } from './styled/textAreaStyled';
import { FilterIndicatorHome } from '../../../pages/home/types/HomeTypes';

interface ITextAreaProps {
    placeholder: string;
    value: string;
    onChange: (args: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextArea = ({ placeholder, value, onChange }: ITextAreaProps) => {
    return (
        <TextAreaAddTask id='outlined-multiline-static' label={placeholder} defaultValue={value} onChange={onChange} multiline rows={6} />
    );
};

export default TextArea;
