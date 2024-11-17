import { type rtkQueryApi } from 'shared/api/config/rtkQuery';
import { type AnyAction, type EnhancedStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit';
import { type UserSchema } from 'shared/types/stateSchema/UserSchema';
import { type LearnSchema } from 'shared/types/stateSchema/LearnSchema';
import { type ResourceSchema } from 'shared/types/stateSchema/ResourceSchema';

export interface StateSchema {
  [rtkQueryApi.reducerPath]: ReturnType<typeof rtkQueryApi.reducer>;
  user?: UserSchema;
  learn: LearnSchema;
  resource?: ResourceSchema;
  profile?: any;
}

export type KeyStateSchema = keyof StateSchema;

export interface ReducerManagerTp {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => void;
  add: (key: KeyStateSchema, reducer: Reducer) => void;
  remove: (key: KeyStateSchema) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManagerTp;
}
