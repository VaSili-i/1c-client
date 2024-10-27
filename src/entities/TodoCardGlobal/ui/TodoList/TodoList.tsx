import { InputTodo } from 'shared/ui/InputTodo/InputTodo';
import { type ReactElement } from 'react';
import { type TodoItemType, type TodoTp } from 'shared/types/entities/todoTypes';

interface TodoListCardProps {
  todoList: TodoTp[];
  changeTodoList?: (todoList: TodoItemType[]) => void;
}

export function TodoList({ todoList }: TodoListCardProps): ReactElement {
  return <>{todoList?.map((todo) => <InputTodo key={todo.id} todo={todo} />)}</>;
}
