import React from 'react';
import {OptionSelect, SelectCover} from "../../styled/homeStyled";



const OPTIONS_FRO_SELECT = [
    {id:1, count: 10},
    {id:2, count: 30},
    {id:3, count: 50},
]

const Select = () => {
    return (
        <>
            <label htmlFor=""></label>
            <SelectCover >
                {OPTIONS_FRO_SELECT.length > 1 && OPTIONS_FRO_SELECT.map((item) =>
                    <OptionSelect key={item.id} value={item.count}>{item.count}</OptionSelect>
                )}

            </SelectCover>
        </>
    );
};

export default Select;