import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import customTheme from 'app/style/theme/theme'; // Ваш кастомный стиль
import AppRouter from './provider/router/ui/AppRouter';
import React, { type ReactElement } from 'react';
import { MainLayout } from 'shared/Layouts/MainLayout/MainLayout';
import { Header } from 'widgets/ContentBlocks/Header';
import SidebarWithHeader from 'components/ui/sedbar';

export const isAuthenticated = (): boolean => {
  return Boolean(localStorage.getItem('token')); // Проверка наличия токена
};

function App(): ReactElement {
  const isAuth = isAuthenticated();

  return (
    <ChakraProvider theme={customTheme}>
      <MainLayout
        header={<Header />}
        sidebar={<SidebarWithHeader />}
        main={<AppRouter isAuthenticated={isAuth} />}
        rightbar={<div></div>}
      />
    </ChakraProvider>
  );
}

export default App;
