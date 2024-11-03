import React from 'react';
import { WrappedMainDiv } from './styled/homeStyled';
import { ContainerDiv } from '../../app/styles/variable/globalStyled';
import Tabs from "./ui/tabs/tabs";
import Filter from "../../features/filter/filter";

const Home = () => {
    return (
        <WrappedMainDiv>
            <ContainerDiv>
                <Tabs/>
                <Filter/>
            </ContainerDiv>
        </WrappedMainDiv>
    );
};

export default Home;
