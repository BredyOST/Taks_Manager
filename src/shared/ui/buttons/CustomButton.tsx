import React from 'react';
import {HomeTypesButton, TabsIdsType} from '../../../pages/home/types/HomeTypes';
import {BtnAddTask, BtnTasks, TabsButton} from './styled/styledButtons';

interface ICustomButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode | string;
    type: 'button' | 'submit' | 'reset';
    indicator: HomeTypesButton;
    isActive: boolean;
    onClickTab: (num: number) => void | null;
    onClickTask: () => void | null;
    onClickOpenTask: () => void | null;
    activeTab: TabsIdsType | null;
}

const CustomButton = ({ children, type = 'button', indicator, isActive, onClickTab, activeTab, onClickTask, onClickOpenTask}: ICustomButtonProps) => {

    if (indicator === HomeTypesButton.tabHome) {
        return (
            <TabsButton type={type} $isActive={isActive} onClick={() => onClickTab(activeTab)}>
                {children}
            </TabsButton>
        );
    }

    if(indicator === HomeTypesButton.btnOpenTask) {
        return (
            <>
                <BtnTasks onClick={() => {
                    onClickOpenTask ? onClickOpenTask() :
                        onClickTask()
                }}  type={type}>{children}</BtnTasks>
            </>
        )
    }

    if(indicator === HomeTypesButton.addTask) {
        return (
            <>
                <BtnAddTask onClick={() => {
                    onClickOpenTask ? onClickOpenTask() :
                        onClickTask()
                }}  type={type}>{children}</BtnAddTask>
            </>
        )
    }

    return null
};

export default CustomButton;
