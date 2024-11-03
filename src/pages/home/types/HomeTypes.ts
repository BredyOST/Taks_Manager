import { TEXT_FOR_TABS } from '../../../shared/const/index.constant';

/**
 * для отображения определенной кнопки исходя из того, что передается компоненту
 */
export enum HomeTypesButton {
    'tabHome' = 'tabHome',
}

export enum FilterIndicatorHome {
    'filterHome' = 'filterHome',
}

/**
 * тип для табов - числовое значение
 */
export type TabsIdsType = (typeof TEXT_FOR_TABS)[number]['id'];

/**
 * тип для объекта таба
 */
export type TabsHome = { id: number; text: string };
