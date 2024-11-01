import AppRouter from './provider/router/ui/AppRouter';
import { type ReactElement } from 'react';
import { MainLayout } from 'shared/Layouts/MainLayout/MainLayout';
import { Sidebar } from 'widgets/ContentBlocks/Sidebar';
import { Header } from 'widgets/ContentBlocks/Header';

export const isAuthenticated = (): boolean => {
  return Boolean(localStorage.getItem('token')); // Проверка наличия токена
};
function App(): ReactElement {
  const isAuth = isAuthenticated();

  return (
    <MainLayout header={<Header />} sidebar={<Sidebar />} main={<AppRouter isAuthenticated={isAuth} />} rightbar={<div></div>} />
  );
}

export default App;
