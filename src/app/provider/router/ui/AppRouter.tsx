// AppRouter.tsx
import { Route, Routes } from 'react-router-dom';
import { type AppRouteCast, routes } from 'app/provider/router/config/routeConfig';
import PrivateRoute from 'app/provider/PrivateRoute/PrivareRoure';
import { type ReactElement } from 'react';

interface IntAppRouter {
  isAuthenticated: boolean;
}

function AppRouter({ isAuthenticated }: IntAppRouter): ReactElement {
  const getRoute = (route: AppRouteCast): ReactElement => {
    const { path, element, isPrivate } = route;

    // Если маршрут защищён, оборачиваем его в PrivateRoute
    const wrappedElement =
      isPrivate === true ? <PrivateRoute isAuthenticated={isAuthenticated}>{element}</PrivateRoute> : element;

    return <Route key={path} path={path} element={wrappedElement} />;
  };

  return <Routes>{routes.map((route) => getRoute(route))}</Routes>;
}

export default AppRouter;
