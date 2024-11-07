import React from 'react';
import CustomButton from '../../shared/ui/buttons/CustomButton';
import { HomeTypesButton } from '../../pages/home/types/HomeTypes';
import { ROUTES_REGISTERED } from '../../app/routes/routes';
import {HeaderCoverLinks, HeaderLink, NavWrapper} from "./styled/navbarStyled/navBarStyled";
import {useLocation, useNavigate} from "react-router-dom";

const NavBar = () => {

    const {pathname} = useLocation()

    return (
        <NavWrapper>
            <HeaderCoverLinks>
            {ROUTES_REGISTERED.length > 0 &&
                ROUTES_REGISTERED.map((item) => (
                    <HeaderLink $isActive={pathname === item.path} key={item.id} to={item.path}>
                        {item.label}
                    </HeaderLink>
                ))}
            </HeaderCoverLinks>
            <CustomButton type='button' indicator={HomeTypesButton.logIn}>
                Войти
            </CustomButton>
        </NavWrapper>
    );
};

export default NavBar;
