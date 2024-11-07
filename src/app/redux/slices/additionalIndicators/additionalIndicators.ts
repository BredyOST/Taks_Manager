import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITasks } from '../../../../pages/home/types/HomeTypes';

export interface IAdditionalIndicators {
    activeTask: ITasks | null;
    isClosedSideBar: boolean;
    activeModalAddTask: boolean;
    isCloseModalAddTask: boolean;
}

const initialState: IAdditionalIndicators = {
    activeTask: null,
    isClosedSideBar: false,
    activeModalAddTask: false,
    isCloseModalAddTask: false,
};

const activeTaskSlice = createSlice({
    name: 'additionalIndicators',
    initialState,
    reducers: {
        changeActiveTask: (state: IAdditionalIndicators, action: PayloadAction<ITasks | null>) => {
            state.activeTask = action.payload;
        },
        changeStateModalAddTask: (state: IAdditionalIndicators, action: PayloadAction<boolean>) => {
            state.activeModalAddTask = action.payload;
        },
        handleIndicatorIsClosedModalAddTask: (state: IAdditionalIndicators, action: PayloadAction<boolean>) => {
            state.isCloseModalAddTask = action.payload;
        },
        handleIndicatorIsClosedSidebar: (state: IAdditionalIndicators, action: PayloadAction<boolean>) => {
            state.isClosedSideBar = action.payload;
        },
    },
});

export default activeTaskSlice.reducer;
export const { actions: activeTaskSliceActions } = activeTaskSlice;
