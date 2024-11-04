import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {IndexTasks, ITasks} from "../../../../pages/home/types/HomeTypes";

export interface FilterSliceType {
    activeTab: number;
    countTusks: number;
    searchTasks: string;
    tasksActive:ITasks[] | [];
    tasksFinished: ITasks[] | [];
    tasksArchived: ITasks[] | [];
}

const initialState: FilterSliceType = {
    activeTab: 1,
    countTusks: 30,
    searchTasks: '',
    tasksActive: [
        { id: 1, title: 'Соцсети', subtitle:'Создание площадки', taskText: 'Создать площадку для торговли товарами через корею. Для этого создаем модуль и начинаем его копоновать', dataStart: '01-10-2023', dataEnd: '02-10-2023', index:IndexTasks.activeTask },
        { id: 2, title: 'Путешествие', subtitle:'Создание площадки контроля продаж и покупок', taskText: 'Слетать в дубай и прикупить там веще для дальнейшей эксплуатации', dataStart: '01-10-2023', dataEnd: '02-10-2023', index:IndexTasks.activeTask},
        // { id: 3, title: 'Ремонт', subtitle:'Ремонт лоджии', taskText: 'Сделать лоджию', dataStart: '01-10-2023', dataEnd: '02-10-2023', index:IndexTasks.activeTask},
        // { id: 4, title: 'языки', subtitle:'Изучить язык', taskText: 'Выыучить английский для путешествий и работы в америке или европе,  а такде купить недвижимость для того чтобы там жить или сдавать в аренду', dataStart: '01-10-2023', dataEnd: '02-10-2023', index:IndexTasks.activeTask},
    ],
    tasksFinished: [
    ],
    tasksArchived: [
    ]
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeActiveTab: (state: FilterSliceType, action: PayloadAction<number>) => {
            state.activeTab = action.payload;
        },
        changeCountTasks: (state: FilterSliceType, action: PayloadAction<number>) => {
            state.countTusks = action.payload;
        },
        changeSearchTasks: (state: FilterSliceType, action: PayloadAction<string>) => {
            state.searchTasks = action.payload;
        },
        addActiveTask: (state: FilterSliceType, action: PayloadAction<ITasks[]>) => {
            state.tasksActive = action.payload;
        },
        addArchiveTask: (state: FilterSliceType, action: PayloadAction<ITasks[]>) => {
            state.tasksArchived = action.payload;
        },
        addFinishedTask: (state: FilterSliceType, action: PayloadAction<ITasks[]>) => {
            state.tasksFinished = action.payload;
        },
    },
});


export default filterSlice.reducer;
export const { actions: filterActions } = filterSlice;
