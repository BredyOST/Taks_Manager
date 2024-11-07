import Profile from '../../pages/profile/profile';
import { IROUTES } from '../../shared/types/types';
import Home from '../../pages/home/home';

export const ROUTES_REGISTERED: IROUTES[] = [
    { id: 1, label: 'Задачи', element: <Home />, path: '/' },
    { id: 2, label: 'Профиль', element: <Profile />, path: '/Profile' },
];
