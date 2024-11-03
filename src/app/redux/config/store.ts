import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { IStore } from './storeType';
import FilterSliceReducer from './../slices/filterSlice';

const rootReducer: ReducersMapObject<IStore> = {
    filter: FilterSliceReducer,
};

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
