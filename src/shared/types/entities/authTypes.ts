export interface UserTp {
  readonly id?: string;
  readonly username: string;
  readonly password: string;
  readonly email: number;
}

export interface UserLogTp {
  readonly id?: string;
  readonly username?: string;
  readonly password?: string;
}
