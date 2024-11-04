import React from 'react';
import { OptionSelect, SelectCover } from '../../styled/homeStyled';
import {OPTIONS_FRO_SELECT} from "../../../../shared/const/index.constant";

interface ISelect {
    onChange: (e:React.ChangeEvent<HTMLSelectElement>) => void
    defaultValue: number
}

const Select = ({onChange, defaultValue}:ISelect) => {

    return (
        <div>
            <label htmlFor=''>Показать</label>
            <SelectCover
                onChange={onChange}
                defaultValue={defaultValue}
            >
                {OPTIONS_FRO_SELECT.length > 1 &&
                    OPTIONS_FRO_SELECT.map((item) => (
                        <OptionSelect  key={item.id} value={item.count}>
                            {item.count}
                        </OptionSelect>
                    ))}
            </SelectCover>
        </div>
    );
};

export default Select;
