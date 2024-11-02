import React from 'react';
import {CoverTabs} from '../../styled/homeStyled';
import {HomeTypesButton, TabsHome} from '../../types/HomeTypes';
import CustomButton from '../../../../shared/ui/buttons/CustomButton';

const TEXT_FOR_TABS: TabsHome[] = [
    { id: 1, text: 'Активные задачи' },
    { id: 2, text: 'Завершенные задачи' },
    { id: 3, text: 'Архив' },
];

export type TabsIdsType = typeof TEXT_FOR_TABS[number]['id'];


const Tabs = () => {

    const [activeTab, setActiveTab] = React.useState<TabsIdsType>(1);
    const changeActivetab = (num:TabsIdsType) => {
        setActiveTab(num)
    }

    return (
        <CoverTabs>
            {TEXT_FOR_TABS.length > 1 &&
                TEXT_FOR_TABS.map((item: TabsHome) => (
                        <CustomButton
                            key={item.id}
                            type='button'
                            indicator={HomeTypesButton.tabHome}
                            isActive={activeTab == item.id}
                            onClickTab={() => changeActivetab(item.id)}
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
