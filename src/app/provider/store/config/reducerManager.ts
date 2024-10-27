import {
  type KeyStateSchema,
  type ReducerManagerTp,
  type StateSchema
} from 'app/provider/store/config/StateSchema';
import { type AnyAction, combineReducers, type ReducersMapObject } from '@reduxjs/toolkit';
export function createReducerManager(
  initialReducers: ReducersMapObject<StateSchema>
): ReducerManagerTp {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: KeyStateSchema[] = [];

  return {
    getReducerMap: () => reducers,
    reduce: (state, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };

        for (const key of keysToRemove) {
          delete state[key];
        }
        keysToRemove = [];
      }

      return combinedReducer(state, action);
    },

    add: (key, reducer) => {
      if (key != null && reducers[key] == null) {
        reducers[key] = reducer;

        combinedReducer = combineReducers(reducers);
      }
    },

    remove: (key) => {
      if (key != null && reducers[key] != null) {
        delete reducers[key];
        keysToRemove.push(key);

        combinedReducer = combineReducers(reducers);
      }
    }
  };
}
