import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { IStore } from './storeType';
import FilterSliceReducer from '../slices/filterSlice/filterSlice';
import AdditionalIndicatorsReducer from '../slices/additionalIndicators/additionalIndicators'

const rootReducer: ReducersMapObject<IStore> = {
    filter: FilterSliceReducer,
    additionalIndicators: AdditionalIndicatorsReducer,
};

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
