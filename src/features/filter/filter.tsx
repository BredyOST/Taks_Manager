import React from 'react';
import Select from '../../pages/home/ui/select/select';
import { FilterCoverDiv } from './styled/filterStyled';
import CustomInput from '../../shared/ui/inputs/customInput';
import { FilterIndicatorHome } from '../../pages/home/types/HomeTypes';
import {useDispatch} from "react-redux";
import {filterActions} from "../../app/redux/slices/filterSlice";
import {useAppSelector} from "../../app/redux/hooks/hooks";

const Filter = () => {


    const dispatch = useDispatch();
    const {searchTasks, countTusks} = useAppSelector(state => state.filter);
    const {changeCountTasks, changeSearchTasks} = filterActions
    const changeSelectCount = (num:number) => {
        dispatch(changeCountTasks(num))
    }
    const changeSearchText = (str:string) => {
       dispatch(changeSearchTasks(str))
    }
    console.log(searchTasks)

    return (
        <FilterCoverDiv>
            <Select />
            <CustomInput defaultValue={searchTasks} type='text' indicator={FilterIndicatorHome.filterHome} placeholder='Поиск' />
        </FilterCoverDiv>
    );
};

export default Filter;
