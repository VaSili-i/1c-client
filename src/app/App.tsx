import AppRouter from './provider/router/ui/AppRouter';
import { type ReactElement } from 'react';
import { MainLayout } from 'shared/Layouts/MainLayout/MainLayout';
import { Sidebar } from 'widgets/ContentBlocks/Sidebar';
import { Header } from 'widgets/ContentBlocks/Header';

function App(): ReactElement {
  console.log(54353);
  return <MainLayout header={<Header />} sidebar={<Sidebar />} main={<AppRouter />} rightbar={<div></div>} />;
}

export default App;
