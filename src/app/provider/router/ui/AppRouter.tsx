import { Route, Routes, type RouteProps } from 'react-router-dom';
import { routes } from 'app/provider/router/config/routeConfig';
import { type ReactElement } from 'react';

function AppRouter(): ReactElement {
  const getRoute = (route: RouteProps): ReactElement => (
    <Route key={route.path} path={route.path} element={route.element} />
  );

  return <Routes>{routes.map((route) => getRoute(route))}</Routes>;
}

export default AppRouter;
