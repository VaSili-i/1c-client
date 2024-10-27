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

export interface TodoTp extends Pick<IdNameCodeTimeCreate, 'id' | 'name'> {
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
  readonly todoType: { id: string };
  readonly timeCreate: string;
}

export interface TodoCompleteTp extends Pick<IdNameCodeTimeCreate, 'id' | 'name'> {
  readonly todoType: TodoTypeTp;
  readonly timeCreate: string;
  todoList: TodoTp[];
}

export interface TodoItemType {
  isDone: boolean;
  text: string;
}
