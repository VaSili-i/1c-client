import { Provider } from 'react-redux';
import { type ReactElement, type ReactNode } from 'react';
import { store } from 'app/provider/store/config/store';

interface StoreProviderProps {
  children: ReactNode;
}

export function StoreProvider({ children }: StoreProviderProps): ReactElement {
  if (__IS_DEV__) {
    console.log('STORE INITIAL');
  }

  return <Provider store={store}>{children}</Provider>;
}
