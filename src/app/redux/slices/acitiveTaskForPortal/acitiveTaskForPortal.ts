import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITasks} from "../../../../pages/home/types/HomeTypes";


export interface IActiveTaskForPortalState {
    activeTask: ITasks | null;
}

const initialState:IActiveTaskForPortalState = {
    activeTask: null,
}

const activeTaskSlice = createSlice({
    name: "activeTaskForPortal",
    initialState,
    reducers: {
        changeActiveTask: (state:IActiveTaskForPortalState, action: PayloadAction<ITasks | null>) => {
            state.activeTask = action.payload;
        },
    }
})

export default activeTaskSlice.reducer;
export const {actions: activeTaskSliceActions} = activeTaskSlice