import React from 'react';
import { WrappedMainDiv } from './styled/homeStyled';
import { ContainerDiv } from '../../app/styles/variable/globalStyled';
import Tabs from './ui/tabs/tabs';
import Filter from '../../features/filter/filter';
import Tasks from './tasks/tasks';

const Home = () => {

    return (
        <WrappedMainDiv>
            <ContainerDiv>
                <Tabs />
                <Filter />
                <Tasks />
            </ContainerDiv>
        </WrappedMainDiv>
    );
};

export default Home;
