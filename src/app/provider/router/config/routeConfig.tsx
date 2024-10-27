import {
  getRouteHabit,
  getRouteLogin,
  getRouteLogout,
  getRouteMain,
  getRouteProfile,
  getRouteRepeat,
  getRouteResource,
  getRouteResourceLink,
  getRouteTodo,
  getRouteTreeResource
} from '../../routeConsts';
import { type RouteProps } from 'react-router-dom';
import { TodoPage } from 'pages/Todo';
import { ResourcePage } from 'pages/Resource';
import { ProfilePage } from 'pages/Profile';
import { RepeatPage } from 'pages/Repeat';
import { Habits } from 'pages/HabitsProgres';
import { WeekPlan } from 'pages/WeekPlan';
import { TreeResource } from 'pages/TreeResource/ui/TreeResource';
import ResourceLink from 'pages/ResourceLink/ui/ResourceLink';
import { AuthPage } from 'pages/Auth';
import Logout from 'pages/Logout/ui/Loguot';
// import { ResourceDetails } from 'pages/ResourceDetails/ui/ResourceDetails/ResourceDetails';

export const routes: RouteProps[] = [
  { path: getRouteMain(), element: <WeekPlan /> },
  { path: getRouteTodo(), element: <TodoPage /> },
  { path: getRouteResource(), element: <ResourcePage /> },
  { path: getRouteProfile(), element: <ProfilePage /> },
  { path: getRouteRepeat(), element: <RepeatPage /> },
  { path: getRouteHabit(), element: <Habits /> },
  { path: getRouteTreeResource(), element: <TreeResource /> },
  { path: getRouteLogin(), element: <AuthPage /> },
  { path: getRouteResourceLink(), element: <ResourceLink /> },
  { path: getRouteLogout(), element: <Logout /> }
  // { path: getRouteSetting(), element: <ResourceDetails /> },
  // { path: getRouteResourceDetails(), element: <ResourceDetails /> }
];
