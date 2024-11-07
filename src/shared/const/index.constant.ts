import { IndexTasks, TabsHome } from '../../pages/home/types/HomeTypes';

/**
 * для табов
 */
export const TEXT_FOR_TABS: TabsHome[] = [
    { id: 1, text: 'Активные задачи' },
    { id: 2, text: 'Завершенные задачи' },
    { id: 3, text: 'Архив' },
];

export const TasksBtnText = [
    // {id:1, text: 'Изменить'},
    { id: 2, text: 'Выполнть' },
    { id: 3, text: 'Удалить' },
    { id: 4, text: 'В архив' },
];

/**
 * для селекта
 */
export const OPTIONS_FRO_SELECT = [
    { id: 1, count: 10 },
    { id: 2, count: 30 },
    { id: 3, count: 50 },
];

/**
 * количество полей в задаче для ее создания
 */
export const COUNT_VALUES_IN_TASK = [
    { id: 1, title: 'Название задачи', placeholder: 'Название задачи', textArea: false },
    { id: 2, title: 'Короткое описание', placeholder: 'Короткое описание', textArea: false },
    { id: 3, title: 'Описание задачи', placeholder: 'Описание задачи', textArea: true },
];



