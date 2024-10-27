import { type IdNameCodeTimeCreate } from 'shared/types/entities/type';

export interface UserRoleTp extends Omit<IdNameCodeTimeCreate, 'timeCreate'> {
  readonly power: number;
  readonly isDeleted: boolean;
}

export interface UserTp extends Partial<Omit<IdNameCodeTimeCreate, 'code' | 'name'>> {
  username?: string;
  mail?: string;
  readonly lastActive?: string;
  isDeleted?: boolean;
  readonly userRole?: UserRoleTp;
}

export type UserReadTp = Readonly<UserTp>;
