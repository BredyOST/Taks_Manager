import React from 'react';
import { HomeWrapper } from './styled/homeStyled';
import { HomeContainer } from '../../app/styles/variable/globalStyled';
import Tabs from '../../shared/ui/tabs/tabs';
import Filter from '../../features/filter/filter';
import Tasks from './tasks/tasks';
import { TEXT_FOR_TABS } from '../../shared/const/index.constant';

const Home = () => {
    return (
        <HomeWrapper>
            <Tabs values={TEXT_FOR_TABS} />
            <Filter />
            <Tasks />
        </HomeWrapper>
    );
};

export default Home;
