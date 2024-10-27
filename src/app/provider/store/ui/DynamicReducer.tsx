import { type ReactElement, type ReactNode, useEffect } from 'react';
import {
  type KeyStateSchema,
  type ReduxStoreWithManager,
  type StateSchema
} from 'app/provider/store/config/StateSchema';
import { type Reducer } from '@reduxjs/toolkit';
import { useDispatch, useStore } from 'react-redux';

export type ReducerList = {
  [key in KeyStateSchema]?: Reducer<NonNullable<StateSchema[key]>>;
};

interface ManagerReducerProps {
  children: ReactNode;
  reducerList: ReducerList;
  deleteByUnmount?: boolean;
}

export function DynamicReducer({
  children,
  reducerList,
  deleteByUnmount = true
}: ManagerReducerProps): ReactElement {
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    for (const [key, reducer] of Object.entries(reducerList)) {
      store.reducerManager.add(key as KeyStateSchema, reducer);
    }

    return () => {
      if (deleteByUnmount) {
        for (const key of Object.keys(reducerList)) {
          store.reducerManager.remove(key as KeyStateSchema);
        }
      }
    };
  });

  return <>{children}</>;
}
