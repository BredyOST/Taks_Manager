import React from 'react';
import {HeaderBody, HeaderLogo, HeaderWrapper} from './styled/headerStyled';
import { HomeContainer } from '../../app/styles/variable/globalStyled';
import NavBar from '../navBar/navBar';

const Header = () => {
    return (
        <HeaderWrapper>
            <HomeContainer>
                <HeaderBody>
                    <HeaderLogo>Task Manager</HeaderLogo>
                <NavBar />
                </HeaderBody>
            </HomeContainer>
        </HeaderWrapper>
    );
};

export default Header;
