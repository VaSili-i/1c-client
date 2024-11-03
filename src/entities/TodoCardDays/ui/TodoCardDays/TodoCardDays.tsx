import { InputAddTodo } from 'shared/ui/InputAddTodo/InputAddTodo';
import { memo, type ReactElement, useState } from 'react';
import { TodoList } from 'entities/TodoCardGlobal/ui/TodoList/TodoList';
import { type TodoCompleteTp } from 'shared/types/entities/todoTypes';
import { getTimeFormat } from 'shared/lib/time/getTimeFormat';
import { Card } from 'shared/ui/deprecated/Card/Card';
import cls from './TodoCardDays.module.scss';
import { Content } from 'shared/ui/Stack/stackConfig';

interface TodoCardDaysProps {
  className?: string;
  todo: TodoCompleteTp;
}

// eslint-disable-next-line react/display-name
export const TodoCardDays = memo(({ todo }: TodoCardDaysProps): ReactElement => {
  const [text, setText] = useState('');

  return (
    <Card justify={Content.START} className={cls.TodoCardDays}>
      <h4>{getTimeFormat(todo.timeCreate)}</h4>
      <InputAddTodo idGroup={todo._id ?? ''} text={text} changeText={setText} />
      <TodoList todoList={todo.todos} />
    </Card>
  );
});
