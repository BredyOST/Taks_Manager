import React from 'react';
import CustomButton from "../../shared/ui/buttons/CustomButton";
import {HomeTypesButton} from "../../pages/home/types/HomeTypes";

const NavBar = () => {
    return (
        <div>
            <CustomButton type='button' indicator={HomeTypesButton.btnOpenTask}>
                Войти
            </CustomButton>
        </div>
    );
};

export default NavBar;