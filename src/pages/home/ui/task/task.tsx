import React from 'react';
import {
    CoverBtnsInTask,
    DataTask,
    DataTitle,
    TaskCoverDiv, TaskCoverHead,
    TaskCoverTextAndTitle,
    TaskTitle,
    TextTask
} from '../../styled/homeStyled';
import {HomeTypesButton, ITasks, ITextBtnTask} from '../../types/HomeTypes';
import CustomButton from "../../../../shared/ui/buttons/styled/CustomButton";
import {TasksZBtnText} from "../../../../shared/const/index.constant";

interface ITask {
    item: ITasks;
}

const Task = ({ item }: ITask) => {
    return (
        <TaskCoverDiv>
            <TaskCoverHead>
                <TaskTitle>{item.title}</TaskTitle>
                <TextTask>{item.taskText}</TextTask>
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
            <CoverBtnsInTask>
                {TasksZBtnText.length > 0 && TasksZBtnText.map((item:ITextBtnTask) =>
                    <CustomButton
                        type = 'button'
                        indicator ={HomeTypesButton.btnChangeTask}
                        isActive = {false}
                        onClickTab = {() => console.log(1)}
                        activeTab = {null}
                        key={item.id}
                    >
                        {item.text}
                    </CustomButton>
                )}
            </CoverBtnsInTask>
        </TaskCoverDiv>
    );
};

export default Task;
