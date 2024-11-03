import React from 'react';
import Select from '../../pages/home/ui/select/select';
import { FilterCoverDiv } from './styled/filterStyled';
import CustomInput from '../../shared/ui/inputs/customInput';
import { FilterIndicatorHome } from '../../pages/home/types/HomeTypes';

const Filter = () => {
    return (
        <FilterCoverDiv>
            <Select />
            <CustomInput type='text' indicator={FilterIndicatorHome.filterHome} placeholder='Поиск' />
        </FilterCoverDiv>
    );
};

export default Filter;
