import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface FilterSliceType {
    activeTab: number;
    countTusks: number;
    searchTasks: string;
}

const initialState: FilterSliceType = {
    activeTab: 1,
    countTusks: 10,
    searchTasks: '',
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
    },
});

export default filterSlice.reducer;
export const { actions: filterActions } = filterSlice;
