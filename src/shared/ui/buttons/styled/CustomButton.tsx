import React from 'react';
import {HomeTypesButton, ITasks, TabsIdsType} from '../../../../pages/home/types/HomeTypes';
import {BtnTasks, TabsButton} from '../styledButtons';

interface ICustomButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode | string;
    type: 'button' | 'submit' | 'reset';
    indicator: HomeTypesButton;
    isActive: boolean;
    onClickTab: (num: number) => void | null;
    onClickTask: () => void | null;
    activeTab: TabsIdsType | null;
}

const CustomButton = ({ children, type = 'button', indicator, isActive, onClickTab, activeTab, onClickTask }: ICustomButtonProps) => {

    if (indicator === HomeTypesButton.tabHome) {
        return (
            <TabsButton type={type} $isActive={isActive} onClick={() => onClickTab(activeTab)}>
                {children}
            </TabsButton>
        );
    }

    if(indicator === HomeTypesButton.btnChangeTask) {
        return (
            <BtnTasks onClick={() => onClickTask()} type={type}>{children}</BtnTasks>
        )
    }

    return null
};

export default CustomButton;
