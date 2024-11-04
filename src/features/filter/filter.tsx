import React from 'react';
import Select from '../../pages/home/ui/select/select';
import { FilterCoverDiv } from './styled/filterStyled';
import CustomInput from '../../shared/ui/inputs/customInput';
import {FilterIndicatorHome, HomeTypesButton} from '../../pages/home/types/HomeTypes';
import {useDispatch} from "react-redux";
import {filterActions} from "../../app/redux/slices/filterSlice/filterSlice";
import {useAppSelector} from "../../app/redux/hooks/hooks";
import CustomButton from "../../shared/ui/buttons/CustomButton";

const Filter = () => {

    const dispatch = useDispatch();
    const {searchTasks, countTusks} = useAppSelector(state => state.filter);
    const {changeCountTasks, changeSearchTasks} = filterActions
    const changeSelectCount = (e:React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeCountTasks(+e.target.value))
    }
    const changeSearchText = (e:React.ChangeEvent<HTMLInputElement>) => {
       dispatch(changeSearchTasks(e.target.value))
    }

    return (
        <FilterCoverDiv>
            <CustomButton
                type='button'
                indicator={HomeTypesButton.tabHome}
                isActive={false}
                onClickTab={null}
                activeTab={null}
                onClickTask={null}
                onClickOpenTask={null}
            >
                добавить задачу
            </CustomButton>
            <Select
                onChange={(e:React.ChangeEvent<HTMLSelectElement>) => changeSelectCount(e)}
                defaultValue={countTusks}
            />
            <CustomInput value={searchTasks} onChange={(e:React.ChangeEvent<HTMLInputElement>) => changeSearchText(e)} defaultValue={searchTasks} type='text' indicator={FilterIndicatorHome.filterHome} placeholder='Поиск' />
        </FilterCoverDiv>
    );
};

export default Filter;
