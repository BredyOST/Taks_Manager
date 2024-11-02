import React from 'react';
import { WrappedMainDiv } from './styled/homeStyled';
import { ContainerDiv } from '../../app/styles/variable/globalStyled';
import Tabs from "./ui/tabs/tabs";

const Home = () => {
    return (
        <WrappedMainDiv>
            <ContainerDiv>
                <Tabs/>

            </ContainerDiv>
        </WrappedMainDiv>
    );
};

export default Home;
