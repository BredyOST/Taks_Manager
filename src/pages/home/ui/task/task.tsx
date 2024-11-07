import React from 'react';
import {TaskCard, TaskData, TaskInfo, TaskSubtitle, TaskTitle,} from '../../styled/homeStyled';
import {HomeTypesButton, ITasks} from '../../types/HomeTypes';
import {useDispatch} from 'react-redux';
import CustomButton from '../../../../shared/ui/buttons/CustomButton';
import {activeTaskSliceActions} from '../../../../app/redux/slices/additionalIndicators/additionalIndicators';

interface ITask {
    item: ITasks;
}

const Task = ({ item }: ITask) => {
    const dispatch = useDispatch();
    const { changeActiveTask } = activeTaskSliceActions;

    const changeValueOfActiveTask = (elem: ITasks) => {
        dispatch(changeActiveTask(elem));
    };

    return (
        <TaskCard>
            <TaskTitle>{item.title}</TaskTitle>
            <TaskSubtitle>{item.subtitle}</TaskSubtitle>
            <TaskInfo>
                <TaskData>
                    Создана: {item.dataStart}
                </TaskData>
                <TaskData>
                    Срок завершения: {item.dataEnd}
                </TaskData>
            </TaskInfo>
            <CustomButton type='button' indicator={HomeTypesButton.btnOpenTask} onClickTask={() => changeValueOfActiveTask(item)}>
                Открыть задачу
            </CustomButton>
        </TaskCard>
    );
};

export default Task;
