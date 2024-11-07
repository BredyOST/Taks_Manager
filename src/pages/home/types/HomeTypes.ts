import { TEXT_FOR_TABS } from '../../../shared/const/index.constant';

/**
 * для отображения определенной кнопки исходя из того, что передается компоненту
 */
export enum HomeTypesButton {
    'btnOpenTask' = 'btnOpenTask',
    'addTask' = 'addTask',
    'closePopup' = 'closePopup',
    'pickData' = 'pickData',
}

export enum FilterIndicatorHome {
    'filterHome' = 'filterHome',
    'addTaskInput' = 'addTaskInput',
}

export enum IndexTasks {
    'activeTask' = '1',
    'finishedTask' = '2',
    'archivedTask' = '3',
}

/**
 * тип для табов - числовое значение
 */
export type TabsIdsType = (typeof TEXT_FOR_TABS)[number]['id'];

/**
 * тип для объекта таба
 */
export type TabsHome = { id: number; text: string };

/**
 * для задач
 */
export interface ITasks {
    id: number;
    title: string;
    subtitle: string;
    taskText: string;
    dataStart: string;
    dataEnd: string;
    index: IndexTasks;
}

/**
 * для кнопок в тасках
 */

export interface ITextBtnTask {
    id: number;
    text: string;
}

export type ForFuncType<T, U> = (arg: T) => U;
