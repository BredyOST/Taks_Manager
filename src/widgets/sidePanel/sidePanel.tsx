import React from 'react';
import {HomeTypesButton, IndexTasks, ITasks, ITextBtnTask} from "../../pages/home/types/HomeTypes";
import {
    CloseActiveTabs,
    CoverBtnsInTask, CoverDateSidePanel,
    CoverSidePanel,
    CoverTextTaskSidePanel, DateTextSidePanelCover, HeaderSidePanel, TextDataSidePanel,
    TextTaskSidePanel, TitleDataSidePanel,
    TitleTaskSidPanel
} from "./styled/sidepanelStyled";
import {TasksBtnText} from "../../shared/const/index.constant";
import CustomButton from "../../shared/ui/buttons/CustomButton";
import {useAppDispatch, useAppSelector} from "../../app/redux/hooks/hooks";
import {filterActions} from "../../app/redux/slices/filterSlice/filterSlice";
import {activeTaskSliceActions} from "../../app/redux/slices/acitiveTaskForPortal/acitiveTaskForPortal";

interface ISidePanel {
    task: ITasks
}

const SidePanel = ({task}:ISidePanel) => {

    const dispatch = useAppDispatch();
    const {tasksArchived, tasksFinished, tasksActive, activeTab} = useAppSelector(state => state.filter)
    const {addActiveTask, addFinishedTask, addArchiveTask} = filterActions
    const {changeActiveTask} = activeTaskSliceActions

    const resetActiveTasks = () => {
        dispatch(changeActiveTask(null))
    }

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
        const newListsArchivedTask:ITasks[] = tasksArchived.filter((item:ITasks) => item.id !== task.id).map((item, index) => {
            return {...item,id: index +1}
        })

        dispatch(addArchiveTask(newListsArchivedTask))
    }

    const addTaskToArchivedTask = () => {
        const newListsArchivedTask = [...tasksArchived, {...task, index: IndexTasks.archivedTask}].map((item:ITasks, index) => {
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
                let newListsFinishedTask = [...tasksFinished,  {...task, index: IndexTasks.finishedTask}].map((item:ITasks, index) => {
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
        <CoverSidePanel>
            <HeaderSidePanel>
                <CoverBtnsInTask>
                    <CloseActiveTabs
                        type = 'button'
                        onClick={resetActiveTasks}
                      >
                        <span></span>
                    </CloseActiveTabs>
                    {TasksBtnText.length > 0 && TasksBtnText.map((elem:ITextBtnTask) => {
                            /**
                             * @param activeTab = 2 (завершенные задачи) не отобраражаем кнопки "выполнено" и "удалить"
                             * @param activeTab = 3 (архивные задачи) не отобраражаем кнопки "выполнено", "архив", "изменить"
                             * */
                            if(task.index === IndexTasks.finishedTask && (elem.id == 1 || elem.id == 2)){
                                return null
                            }

                            if (task.index === IndexTasks.archivedTask && (elem.id == 1 || elem.id == 2 || elem.id == 4)) {
                                return null
                            }
                            return <CustomButton
                                type = 'button'
                                indicator ={HomeTypesButton.btnOpenTask}
                                isActive = {false}
                                onClickTab = {null}
                                activeTab = {null}
                                key={elem.id}
                                onClickTask={() => changeTasks(task, elem.id)}
                                onClickOpenTask={null}
                            >
                                {elem.text}
                            </CustomButton>
                        }
                    )}
                </CoverBtnsInTask>
            </HeaderSidePanel>
            <CoverTextTaskSidePanel>
                <TitleTaskSidPanel>{task.title}</TitleTaskSidPanel>
                <TextTaskSidePanel>{task.taskText}</TextTaskSidePanel>
                <CoverDateSidePanel>
                    <DateTextSidePanelCover>
                        <TitleDataSidePanel>
                            дата создания:
                        </TitleDataSidePanel>
                        <TextDataSidePanel>
                            {task.dataStart}
                        </TextDataSidePanel>
                    </DateTextSidePanelCover>
                    <DateTextSidePanelCover>
                        <TitleDataSidePanel>
                            дата завершения:
                        </TitleDataSidePanel>
                        <TextDataSidePanel>
                            {task.dataEnd}
                        </TextDataSidePanel>
                    </DateTextSidePanelCover>
                </CoverDateSidePanel>
            </CoverTextTaskSidePanel>
        </CoverSidePanel>
    );
};

export default SidePanel;