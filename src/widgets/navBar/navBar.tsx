import React from 'react';
import CustomButton from '../../shared/ui/buttons/CustomButton';
import { HomeTypesButton } from '../../pages/home/types/HomeTypes';
import { ROUTES_REGISTERED } from '../../app/routes/routes';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            {ROUTES_REGISTERED.length > 0 &&
                ROUTES_REGISTERED.map((item) => (
                    <Link key={item.id} to={item.path}>
                        {item.label}
                    </Link>
                ))}
            <CustomButton type='button' indicator={HomeTypesButton.btnOpenTask}>
                Войти
            </CustomButton>
        </div>
    );
};

export default NavBar;
