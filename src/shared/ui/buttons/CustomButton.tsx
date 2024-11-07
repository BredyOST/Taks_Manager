import React from 'react';
import { HomeTypesButton, TabsIdsType } from '../../../pages/home/types/HomeTypes';
import { BtnAddTask, BtnOpenTasks, BtnPickData, BtnPopup } from './styled/styledButtons';

interface ICustomButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode | string;
    type: 'button' | 'submit' | 'reset';
    indicator: HomeTypesButton;
    isActive?: boolean;
    onClickTab?: (num: number) => void | null;
    onClickTask?: () => void | null;
    onClickOpenTask?: () => void | null;
    activeTab?: TabsIdsType | null;
    disabled?: boolean;
}

const CustomButton = ({
    children,
    type = 'button',
    indicator,
    isActive,
    onClickTab,
    activeTab,
    disabled,
    onClickTask,
    onClickOpenTask,
}: ICustomButtonProps) => {
    if (indicator === HomeTypesButton.btnOpenTask) {
        return (
            <>
                <BtnOpenTasks
                    onClick={() => {
                        onClickOpenTask ? onClickOpenTask() : onClickTask();
                    }}
                    type={type}
                >
                    {children}
                </BtnOpenTasks>
            </>
        );
    }
    if (indicator === HomeTypesButton.addTask) {
        return (
            <>
                <BtnAddTask disabled={disabled ? !disabled : false} variant='contained' onClick={() => onClickTask()} type={type}>
                    {children}
                </BtnAddTask>
            </>
        );
    }
    if (indicator === HomeTypesButton.closePopup) {
        return (
            <>
                <BtnPopup onClick={() => onClickTask()} type={type}>
                    {children}
                </BtnPopup>
            </>
        );
    }
    if (indicator === HomeTypesButton.pickData) {
        return (
            <>
                <BtnPickData onClick={() => onClickTask()} type={type}>
                    {children}
                </BtnPickData>
            </>
        );
    }

    return null;
};

export default CustomButton;
