import { type UserRoleTp, type UserTp } from 'shared/types/entities/profileTypes';
import { type StateSchema } from 'app/provider/store/config/StateSchema';

export const userDataInProfile = (state: StateSchema): UserTp | undefined => state.user?.userInForm;
export const userNameProfile = (state: StateSchema): string | undefined => state.user?.userInForm?.username;
export const userMailProfile = (state: StateSchema): string | undefined => state.user?.userInForm?.mail;

export const userRoleProfile = (state: StateSchema): UserRoleTp | undefined => state.user?.userInForm?.userRole;
export const userDeletedProfile = (state: StateSchema): boolean | undefined => state.user?.userInForm?.isDeleted;
