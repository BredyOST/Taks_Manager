import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITasks} from "../../../../pages/home/types/HomeTypes";


export interface IAdditionalIndicators {
    activeTask: ITasks | null;
    activeModalAddTask: boolean
}

const initialState:IAdditionalIndicators = {
    activeTask: null,
    activeModalAddTask: false,
}

const activeTaskSlice = createSlice({
    name: "additionalIndicators",
    initialState,
    reducers: {
        changeActiveTask: (state:IAdditionalIndicators, action: PayloadAction<ITasks | null>) => {
            state.activeTask = action.payload;
        },
        changeStateModalAddTask: (state:IAdditionalIndicators, action: PayloadAction<boolean>) => {
            state.activeModalAddTask = action.payload;
        },
    }
})

export default activeTaskSlice.reducer;
export const {actions: activeTaskSliceActions} = activeTaskSlice