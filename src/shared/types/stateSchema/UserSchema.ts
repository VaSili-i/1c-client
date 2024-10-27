import { type UserReadTp, type UserTp } from 'shared/types/entities/profileTypes';

export interface UserSchema {
  isLoading: boolean;
  error?: string;
  user?: UserTp;
  userInForm?: UserReadTp;
}
