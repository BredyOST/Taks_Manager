import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {IndexTasks, ITasks} from "../../../pages/home/types/HomeTypes";

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
        { id: 1, title: 'web', taskText: 'зайти на wb', dataStart: '01-10-2023', dataEnd: '02-10-2023', index:IndexTasks.activeTask },
        { id: 2, title: 'web', taskText: 'cлетать в дубай', dataStart: '01-10-2023', dataEnd: '02-10-2023', index:IndexTasks.activeTask},
        { id: 3, title: 'web', taskText: 'слетать в америку', dataStart: '01-10-2023', dataEnd: '02-10-2023', index:IndexTasks.activeTask},
        { id: 4, title: 'web', taskText: 'купить машину', dataStart: '01-10-2023', dataEnd: '02-10-2023', index:IndexTasks.activeTask},
        { id: 5, title: 'web', taskText: 'начат продавать а потом улететь в америку и купить тамдом ', dataStart: '01-10-2023', dataEnd: '02-10-2023', index:IndexTasks.activeTask},
        { id: 6, title: 'web', taskText: 'прыгнуть с паршютом', dataStart: '01-10-2023', dataEnd: '02-10-2023', index:IndexTasks.activeTask},
    ],
    tasksFinished: [
        { id: 1, title: 'web', taskText: 'тут удалено', dataStart: '01-10-2023', dataEnd: '02-10-2023', index:IndexTasks.finishedTask},
    ],
    tasksArchived: [
        { id: 1, title: 'web', taskText: 'а тут архивно', dataStart: '01-10-2023', dataEnd: '02-10-2023', index:IndexTasks.archivedTask},
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
