import React from 'react';
import {TabsButton} from "../../pages/home/styled/homeStyled";
import {HomeTypesButton} from "../../pages/home/types/HomeTypes";
import {TabsIdsType} from "../../pages/home/ui/tabs/tabs";

interface ICustomButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode | string;
    type: 'button' | 'submit' | 'reset';
    indicator: HomeTypesButton;
    isActive: boolean;
    onClickTab: (num:number) => void;
    activeTab: TabsIdsType
}

const CustomButton = ({ children, type, indicator, isActive, onClickTab, activeTab}: ICustomButtonProps,) => {

    if(indicator === HomeTypesButton.tabHome) {
        return <TabsButton type={type ?? 'button'} isActive={isActive} onClick={() => onClickTab(activeTab)}>
            {children}
        </TabsButton>;
    }
};

export default CustomButton;
