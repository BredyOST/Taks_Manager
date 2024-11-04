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
import {HomeTypesButton, IndexTasks, ITasks, ITextBtnTask} from '../../types/HomeTypes';
import CustomButton from "../../../../shared/ui/buttons/styled/CustomButton";
import {TasksBtnText} from "../../../../shared/const/index.constant";
import {useAppDispatch, useAppSelector} from "../../../../app/redux/hooks/hooks";
import {filterActions} from "../../../../app/redux/slices/filterSlice";

interface ITask {
    item: ITasks;
}

const Task = ({ item }: ITask) => {
    const dispatch = useAppDispatch();
    const {tasksArchived, tasksFinished, tasksActive, activeTab} = useAppSelector(state => state.filter)
    const {addActiveTask, addFinishedTask, addArchiveTask} = filterActions

    const sortedActiveTasks = (task:ITasks) => {
        const newListsActiveTask:ITasks[] = tasksActive.filter((item:ITasks) => item.id !== task.id).map((item:ITasks, index) => {
            return {...item, id: index + 1}
        });
        dispatch(addActiveTask(newListsActiveTask))
    }

    const sortedFinishedTask = (task:ITasks) => {
        const newListDeletedTask:ITasks[] = tasksFinished.filter((item:ITasks) => item.id !== task.id).map((item, index) => {
            return {...item,id: index +1}
        })
        dispatch(addFinishedTask(newListDeletedTask))
    }

    const sortedArchivedTask = (task:ITasks) => {
        console.log(task)
        const newListsArchivedTask:ITasks[] = tasksArchived.filter((item:ITasks) => item.id !== task.id).map((item, index) => {
            return {...item,id: index +1}
        })

        dispatch(addArchiveTask(newListsArchivedTask))
    }

    const addTaskToArchivedTask = () => {
        const newListsArchivedTask = [...tasksArchived, {...item, index: IndexTasks.archivedTask}].map((item:ITasks, index) => {
            return {...item, id: index + 1}
        })
        dispatch(addArchiveTask(newListsArchivedTask))
    }

    const changeTasks = (task:ITasks, indexBtn:number) => {
        /**
         * @param activeTab = 1 (активные задачи)
         * @param activeTab = 2 (завершенные задачи)
         * @param activeTab = 3 (архивные задачи)
         * @param indexBtn = 1 (кнопка изменить)
         * @param indexBtn = 2 (кнопка выполнено)
         * @param indexBtn = 3 (кнопка удалить)
         * @param indexBtn = 4 (в архив)
         */
        if (activeTab === 1) {
            if(indexBtn === 1) {

            }
            if(indexBtn === 2) {
                sortedActiveTasks(task)
                let newListsFinishedTask = [...tasksFinished,  {...item, index: IndexTasks.finishedTask}].map((item:ITasks, index) => {
                    return {...item, id: index + 1}
                })
                dispatch(addFinishedTask(newListsFinishedTask))
            }

            if(indexBtn === 3) {
                sortedActiveTasks(task)
            }
            if(indexBtn === 4) {
                sortedActiveTasks(task)
                addTaskToArchivedTask()
            }
        }

        if (activeTab === 2) {
            if(indexBtn === 3) {
                sortedFinishedTask(task)
            }
            if(indexBtn === 4) {
                sortedFinishedTask(task)
                addTaskToArchivedTask()
            }
        }
        if (activeTab === 3) {
            if(indexBtn === 3) {
                sortedArchivedTask(task)
            }
        }

    }

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
                {TasksBtnText.length > 0 && TasksBtnText.map((elem:ITextBtnTask) => {
                    /**
                     * @param activeTab = 2 (завершенные задачи) не отобраражаем кнопки "выполнено" и "удалить"
                     * @param activeTab = 3 (архивные задачи) не отобраражаем кнопки "выполнено", "архив", "изменить"
                     * */
                    if(item.index === IndexTasks.finishedTask && (elem.id == 1 || elem.id == 2)){
                        return null
                    }

                    if (item.index === IndexTasks.archivedTask && (elem.id == 1 || elem.id == 2 || elem.id == 4)) {
                        return null
                    }
                   return <CustomButton
                        type = 'button'
                        indicator ={HomeTypesButton.btnChangeTask}
                        isActive = {false}
                        onClickTab = {null}
                        activeTab = {null}
                        key={elem.id}
                        onClickTask={() => changeTasks(item, elem.id)}
                    >
                        {elem.text}
                    </CustomButton>
                    }
                )}
            </CoverBtnsInTask>
        </TaskCoverDiv>
    );
};

export default Task;
