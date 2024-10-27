export enum AppRoutes {
  MAIN = 'main',
  TODO = 'todo',

  // last
  NOT_FOUND = 'not_found'
}

export const getRouteMain = (): string => '/';
export const getRouteTodo = (): string => '/todo';
export const getRouteResource = (): string => '/resource';
export const getRouteResourceDetails = (): string => '/resource/details';
export const getRouteRepeat = (): string => '/repeat';
export const getRouteProfile = (): string => '/profile';
export const getRouteSetting = (): string => '/setting';
export const getRouteHabit = (): string => '/habit';
export const getRouteLogin = (): string => '/login';
export const getRouteRegister = (): string => '/register';
export const getRouteLogout = (): string => '/logout';
export const getRouteMail = (): string => '/mail';
export const getRouteTreeResource = (): string => '/tree';
export const getRouteResourceLink = (): string => '/resourcelink';

