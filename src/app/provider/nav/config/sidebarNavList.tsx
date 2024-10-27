import { type AppLincType } from 'app/provider/nav/types/types';
import {
  getRouteLogin,
  getRouteMain,
  getRouteRepeat,
  getRouteResource,
  getRouteSetting,
  getRouteTodo,
  getRouteProfile,
  getRouteMail,
  getRouteLogout,
  getRouteHabit,
  getRouteTreeResource,
  getRouteResourceLink
} from 'app/provider/routeConsts';
import TodoNav from 'shared/assets/icon/nav/todo-nav.svg';
import ReactNav from 'shared/assets/icon/nav/react-nav.svg';
import ResourceNav from 'shared/assets/icon/nav/resource-nav.svg';
import RepeatNav from 'shared/assets/icon/nav/repeat-nav.svg';
import UserNav from 'shared/assets/icon/nav/user-nav.svg';
import Profile from 'shared/assets/icon/nav/profilen-nav.svg';
import SettingNav from 'shared/assets/icon/nav/setting-nav.svg';
import Signin from 'shared/assets/icon/nav/sign-in-nav.svg';
import Logout from 'shared/assets/icon/nav/logout-nav.svg';
import MailNav from 'shared/assets/icon/nav/mail-nav.svg';
import HabitNav from 'shared/assets/icon/nav/habit.svg';
import LinkNav from 'shared/assets/icon/nav/chains_114296.svg';

export const sidebarNavList: AppLincType[] = [
  { to: getRouteMain(), title: 'Main', Icon: ReactNav },
  { to: getRouteTodo(), title: 'To-Do', Icon: TodoNav },
  { to: getRouteResource(), title: 'Resource', Icon: ResourceNav },
  { to: getRouteRepeat(), title: 'Repeat', Icon: RepeatNav },
  { to: getRouteProfile(), title: 'Profile', Icon: UserNav },
  { to: getRouteResourceLink(), title: 'Resource Link', Icon: LinkNav },
  { to: getRouteHabit(), title: 'Habit', Icon: HabitNav },
  { to: getRouteTreeResource(), title: 'Tree resource', Icon: ResourceNav },
  { to: getRouteSetting(), title: 'Setting', Icon: SettingNav },
  { to: getRouteLogout(), title: 'Signin', Icon: Signin }
  /*  { to: getRouteLogout(), title: 'Logout', Icon: Logout, lastIt */
];

export const profileNavList: AppLincType[] = [
  { to: getRouteProfile(), title: 'Profile', Icon: Profile },
  { to: getRouteSetting(), title: 'Setting', Icon: SettingNav },
  { to: getRouteMail(), title: 'Mail', Icon: MailNav },
  { to: getRouteLogout(), title: 'Logout', Icon: Logout }
];
