import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { IStore } from './storeType';
import FilterSliceReducer from '../slices/filterSlice/filterSlice';
import ActiveTaskForPortalStateReducer from '../slices/acitiveTaskForPortal/acitiveTaskForPortal'

const rootReducer: ReducersMapObject<IStore> = {
    filter: FilterSliceReducer,
    activeTaskForPortal: ActiveTaskForPortalStateReducer,
};

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
