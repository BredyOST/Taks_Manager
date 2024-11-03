import React from 'react';
import { OptionSelect, SelectCover } from '../../styled/homeStyled';
import {useDispatch} from "react-redux";
import {filterActions} from "../../../../app/redux/slices/filterSlice";

const OPTIONS_FRO_SELECT = [
    { id: 1, count: 10 },
    { id: 2, count: 30 },
    { id: 3, count: 50 },
];

const Select = () => {

    return (
        <div>
            <label htmlFor=''>Показать</label>
            <SelectCover>
                {OPTIONS_FRO_SELECT.length > 1 &&
                    OPTIONS_FRO_SELECT.map((item) => (
                        <OptionSelect key={item.id} value={item.count}>
                            {item.count}
                        </OptionSelect>
                    ))}
            </SelectCover>
        </div>
    );
};

export default Select;
