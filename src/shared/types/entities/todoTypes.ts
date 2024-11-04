import { type IdNameCodeTimeCreate } from 'shared/types/entities/type';

export interface LevelTp {
  readonly id?: string;
  readonly name: string;
  readonly code: string;
  readonly power: number;
  readonly isDeleted: boolean;
}

export interface UserTp {
  readonly id?: string;
}

export interface TodoGroupTp extends Omit<IdNameCodeTimeCreate, 'code'> {
  user: UserTp;
  todoType: TodoTypeTp;
}

export interface TodoTp extends Pick<IdNameCodeTimeCreate, 'id' | '_id' | 'name'> {
  readonly timeDone?: string;
  isDone: boolean;
  priority?: LevelTp;
}

export interface TodoAddTp {
  id: string;
  isDone: boolean;
}

export interface TodoTypeTp extends Omit<IdNameCodeTimeCreate, 'timeCreate'> {}

export interface TodoCompleteAddTp extends Pick<IdNameCodeTimeCreate, 'id' | 'name'> {
  readonly type: string;
  readonly timeCreate: string;
}

export interface TodoCompleteTp extends Pick<IdNameCodeTimeCreate, '_id' | 'name'> {
  readonly type: TodoTypeTp;
  readonly timeCreate: string;
  todos: TodoTp[];
}

export interface TodoItemType {
  isDone: boolean;
  text: string;
}

export enum TypeTodoEnum {
  EVERY_DAY = 'everyDay',
  GLOBAL = 'global'
}