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
import { ProfilePage } from 'pages/Profile';
import { RepeatPage } from 'pages/Repeat';
import { Habits } from 'pages/HabitsProgres';
import { WeekPlan } from 'pages/WeekPlan';
import { TreeResource } from 'pages/TreeResource/ui/TreeResource';
import ResourceLink from 'pages/ResourceLink/ui/ResourceLink';
import { AuthPage } from 'pages/Auth';
import React from 'react';

export interface AppRouteCast {
  path: string;
  element: React.ReactNode;
  isPrivate?: boolean;
}

export const routes: AppRouteCast[] = [
  { path: getRouteMain(), element: <WeekPlan />, isPrivate: true },
  { path: getRouteTodo(), element: <TodoPage />, isPrivate: true },
  { path: getRouteResource(), element: <></>, isPrivate: true },
  { path: getRouteProfile(), element: <ProfilePage />, isPrivate: true },
  { path: getRouteRepeat(), element: <RepeatPage />, isPrivate: true },
  { path: getRouteHabit(), element: <Habits />, isPrivate: true },
  { path: getRouteTreeResource(), element: <TreeResource />, isPrivate: true },
  { path: getRouteLogin(), element: <AuthPage />, isPrivate: false },
  { path: getRouteResourceLink(), element: <ResourceLink />, isPrivate: true }
 // { path: getRouteLogout(), element: <Logout />, isPrivate: true }
  // { path: getRouteSetting(), element: <ResourceDetails /> },
  // { path: getRouteResourceDetails(), element: <ResourceDetails /> }
];
