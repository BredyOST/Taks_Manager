import { IROUTES } from '../../shared/types/types';
import React from 'react';

const HomeLazy = React.lazy(() => import("./../../pages/home/home"));
const ProfileLazy = React.lazy(() => import("./../../pages/profile/profile"));

export const ROUTES_REGISTERED: IROUTES[] = [
    { id: 1, label: 'Задачи', element: <HomeLazy />, path: '/' },
    { id: 2, label: 'Профиль', element: <ProfileLazy />, path: '/Profile' },
];
