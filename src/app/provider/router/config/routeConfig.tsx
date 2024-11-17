import {
  getRouteHabit,
  getRouteLogin,
  getRouteMain,
  getRouteProfile,
  getRouteRepeat,
  getRouteResourceLink,
  getRouteTodo,
  getRouteTreeResource
} from '../../routeConsts';
import { TodoPage } from 'pages/Todo';
import { ProfilePage } from 'pages/Profile';
import { RepeatPage } from 'pages/Repeat';
import { Habits } from 'pages/HabitsProgres';
import { WeekPlan } from 'pages/WeekPlan';
import { TreeResource } from 'pages/TreeResource/ui/TreeResource';
import { AuthPage } from 'pages/Auth';
import React from 'react';
import { ResourcePage } from 'pages/Resource';

export interface AppRouteCast {
  path: string;
  element: React.ReactNode;
  isPrivate?: boolean;
}

export const routes: AppRouteCast[] = [
  { path: getRouteMain(), element: <WeekPlan />, isPrivate: true },
  { path: getRouteTodo(), element: <TodoPage />, isPrivate: true },
  { path: getRouteResourceLink(), element: <ResourcePage />, isPrivate: true },
  { path: getRouteProfile(), element: <ProfilePage />, isPrivate: true },
  { path: getRouteRepeat(), element: <RepeatPage />, isPrivate: true },
  { path: getRouteHabit(), element: <Habits />, isPrivate: true },
  { path: getRouteTreeResource(), element: <TreeResource />, isPrivate: true },
  { path: getRouteLogin(), element: <AuthPage />, isPrivate: false }
  // { path: getRouteLogout(), element: <Logout />, isPrivate: true }
  // { path: getRouteSetting(), element: <ResourceDetails /> },
  // { path: getRouteResourceDetails(), element: <ResourceDetails /> }
];
