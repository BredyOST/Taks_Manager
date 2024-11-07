import React from 'react';
import {HeaderWrapper} from "./styled/headerStyled";
import {HomeContainer} from "../../app/styles/variable/globalStyled";
import NavBar from "../navBar/navBar";

const Header = () => {
    return (
        <HeaderWrapper>
            <HomeContainer>
                <div>
                    <div>Task Manager</div>
                </div>
                <NavBar/>
            </HomeContainer>
    </HeaderWrapper>
    )
};

export default Header;
