import React from 'react';
import { CoverTabs } from '../../styled/homeStyled';
import { HomeTypesButton, TabsHome, TabsIdsType } from '../../types/HomeTypes';
import CustomButton from '../../../../shared/ui/buttons/styled/CustomButton';
import { TEXT_FOR_TABS } from '../../../../shared/const/index.constant';

const Tabs = () => {
    const [activeTab, setActiveTab] = React.useState<TabsIdsType>(1);
    const changeActiveTab = (num: TabsIdsType) => {
        setActiveTab(num);
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
                        onClickTab={() => changeActiveTab(item.id)}
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
