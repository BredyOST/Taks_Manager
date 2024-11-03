import React from 'react';
import { CoverTabs } from '../../styled/homeStyled';
import { HomeTypesButton, TabsHome, TabsIdsType } from '../../types/HomeTypes';
import CustomButton from '../../../../shared/ui/buttons/styled/CustomButton';
import { TEXT_FOR_TABS } from '../../../../shared/const/index.constant';
import {useAppDispatch, useAppSelector} from "../../../../app/redux/hooks/hooks";
import {filterActions} from "../../../../app/redux/slices/filterSlice";

const Tabs = () => {

    const dispatch = useAppDispatch();

    const {changeActiveTab} = filterActions
    const {activeTab} = useAppSelector(state => state.filter)
    const changeTab = (num: TabsIdsType) => {
        dispatch(changeActiveTab(num))
    };

    return (
        <CoverTabs>
            {TEXT_FOR_TABS.length > 1 &&
                TEXT_FOR_TABS.map((item: TabsHome) => (
                    <CustomButton
                        key={item.id}
                        type='button'
                        indicator={HomeTypesButton.tabHome}
                        isActive={activeTab == item.id}
                        onClickTab={() => changeTab(item.id)}
                        activeTab={activeTab}
                    >
                        {item.text}
                        <span>2</span>
                    </CustomButton>
                ))}
        </CoverTabs>
    );
};

export default Tabs;
