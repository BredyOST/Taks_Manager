import React, {Component} from 'react';
import {TitleAddBlock, WrapperAddBlock} from "./styled/addBlock";
import CustomInput from "../../shared/ui/inputs/customInput";
import {FilterIndicatorHome} from "../../pages/home/types/HomeTypes";

interface IAddBlock {
    title:string;
    indicator: FilterIndicatorHome;
    placeholder: string;
    value: string;
    onChange: (args:React.ChangeEvent<HTMLInputElement>) => void;
}

const AddBlock = ({title, indicator, placeholder, onChange, value}:IAddBlock) =>  {

        return (
            <WrapperAddBlock>
                <TitleAddBlock>{title}</TitleAddBlock>
                <CustomInput type='text' indicator={indicator} placeholder={placeholder} value={value} onChange={onChange}/>
            </WrapperAddBlock>
        );
}

export default AddBlock;