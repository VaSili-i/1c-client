import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { type ReducerManagerTp, type StateSchema } from 'app/provider/store/config/StateSchema';
import { rtkQueryApi } from 'shared/api/config/rtkQuery';
import { createReducerManager } from './reducerManager';
import { type CombinedState, type Reducer } from 'redux';
import { learnReducer } from 'features/AddLearn/model/slice/learnSlice';

const rootReducer: ReducersMapObject<StateSchema> = {
  [rtkQueryApi.reducerPath]: rtkQueryApi.reducer,
  learn: learnReducer
};

const reducerManager: ReducerManagerTp = createReducerManager(rootReducer);

let initialState: StateSchema | undefined;

export const store = configureStore({
  reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
  preloadedState: initialState,
  devTools: __IS_DEV__,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(rtkQueryApi.middleware)
});

// @ts-expect-error
store.reducerManager = reducerManager;

export type AppDispatch = typeof store.dispatch;
