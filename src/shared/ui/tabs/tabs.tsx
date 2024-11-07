import React from 'react';
import { TabsHome, TabsIdsType } from '../../../pages/home/types/HomeTypes';
import { useAppDispatch, useAppSelector } from '../../../app/redux/hooks/hooks';
import { filterActions } from '../../../app/redux/slices/filterSlice/filterSlice';
import { Tab } from '@mui/material';
import { TabsBox, TabsContext, TabsItemCover, TabsWrapper } from './styled/tabsStyle';

interface ITab {
    values: TabsHome[];
}

const Tabs = ({ values }: ITab) => {
    const dispatch = useAppDispatch();
    const { changeActiveTab } = filterActions;
    const { activeTab, searchTasks, countTusks, tasksActive, tasksArchived, tasksFinished } = useAppSelector((state) => state.filter);

    const changeTab = (event: React.SyntheticEvent, newValue: TabsIdsType) => {
        dispatch(changeActiveTab(newValue));
    };

    return (
        <TabsWrapper>
            <TabsContext value={activeTab}>
                <TabsBox sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabsItemCover onChange={changeTab} aria-label='lsss'>
                        {values?.map((item: TabsHome) => (
                            <Tab
                                key={item.id}
                                value={item.id}
                                label={`${item.text} (${
                                    item.id == 1
                                        ? tasksActive.length
                                        : item.id == 2
                                          ? tasksFinished.length
                                          : item.id == 3
                                            ? tasksArchived.length
                                            : ''
                                })`}
                            />
                        ))}
                    </TabsItemCover>
                </TabsBox>
            </TabsContext>
        </TabsWrapper>
    );
};

export default Tabs;
