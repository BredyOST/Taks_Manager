import React from 'react';
import {
    DataTask,
    DataTitle, TaskCoverButton, TaskCoverHead,
    TaskCoverTextAndTitle,
    TaskTitle,
    TextTask
} from '../../styled/homeStyled';
import {HomeTypesButton, ITasks} from '../../types/HomeTypes';
import {useDispatch} from "react-redux";
import CustomButton from "../../../../shared/ui/buttons/CustomButton";
import {activeTaskSliceActions} from "../../../../app/redux/slices/additionalIndicators/additionalIndicators";

interface ITask {
    item: ITasks;
}

const Task = ({ item }: ITask) => {

    const dispatch = useDispatch();
    const {changeActiveTask} = activeTaskSliceActions


    const changeValueOfActiveTask = (elem:ITasks) => {
        console.log(elem)
        dispatch(changeActiveTask(elem))
    }

    return (
        <CustomButton
            indicator={HomeTypesButton.btnOpenTask}
            isActive={false}
            onClick={null}
            onClickTab={null}
            onClickOpenTask={() => changeValueOfActiveTask(item)}
            onClickTask={null}
            activeTab={null}
        type='button'
        >
            <TaskCoverHead>
                <TaskTitle>{item.title}</TaskTitle>
                <TextTask>{item.subtitle}</TextTask>
            </TaskCoverHead>
            <TaskCoverTextAndTitle>
                <DataTask>
                    <DataTitle>Создана</DataTitle>
                    {item.dataStart}
                </DataTask>
                <DataTask>
                    <DataTitle>Срок завершения</DataTitle>
                    {item.dataEnd}
                </DataTask>
            </TaskCoverTextAndTitle>
        </CustomButton>
    );
};

export default Task;
