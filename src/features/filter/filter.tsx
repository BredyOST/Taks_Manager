import React from 'react';
import { FilterWrapper } from './styled/filterStyled';
import CustomInput from '../../shared/ui/inputs/customInput';
import { FilterIndicatorHome, HomeTypesButton } from '../../pages/home/types/HomeTypes';
import { useDispatch } from 'react-redux';
import { filterActions } from '../../app/redux/slices/filterSlice/filterSlice';
import { useAppSelector } from '../../app/redux/hooks/hooks';
import CustomButton from '../../shared/ui/buttons/CustomButton';
import { activeTaskSliceActions } from '../../app/redux/slices/additionalIndicators/additionalIndicators';

const Filter = () => {
    const dispatch = useDispatch();
    const { searchTasks, activeTab } = useAppSelector((state) => state.filter);
    const { activeModalAddTask } = useAppSelector((state) => state.additionalIndicators);
    const { changeCountTasks, changeSearchTasks } = filterActions;
    const { changeStateModalAddTask } = activeTaskSliceActions;

    const changeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeSearchTasks(e.target.value));
    };
    const openModalWindow = () => {
        dispatch(changeStateModalAddTask(!activeModalAddTask));
    };
    return (
        <FilterWrapper>
            <CustomButton
                type='button'
                indicator={HomeTypesButton.addTask}
                isActive={false}
                onClickTab={null}
                activeTab={null}
                onClickTask={openModalWindow}
                onClickOpenTask={null}
                disabled={activeTab === 1}
            >
                добавить задачу
            </CustomButton>
            <CustomInput
                value={searchTasks}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeSearchText(e)}
                defaultValue={searchTasks}
                type='text'
                indicator={FilterIndicatorHome.filterHome}
                placeholder='Поиск'
            />
        </FilterWrapper>
    );
};

export default Filter;
