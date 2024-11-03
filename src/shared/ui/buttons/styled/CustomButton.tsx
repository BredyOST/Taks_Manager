import React from 'react';
import { HomeTypesButton, TabsIdsType } from '../../../../pages/home/types/HomeTypes';
import { TabsButton } from '../styledButtons';

interface ICustomButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode | string;
    type: 'button' | 'submit' | 'reset';
    indicator: HomeTypesButton;
    isActive: boolean;
    onClickTab: (num: number) => void;
    activeTab: TabsIdsType;
}

const CustomButton = ({ children, type = 'button', indicator, isActive, onClickTab, activeTab }: ICustomButtonProps) => {
    if (indicator === HomeTypesButton.tabHome) {
        return (
            <TabsButton type={type} $isActive={isActive} onClick={() => onClickTab(activeTab)}>
                {children}
            </TabsButton>
        );
    }
};

export default CustomButton;
