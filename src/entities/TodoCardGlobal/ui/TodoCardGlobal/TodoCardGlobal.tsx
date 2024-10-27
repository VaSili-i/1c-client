import cls from './TodoCardGlobal.module.scss';
import { InputAddTodo } from 'shared/ui/InputAddTodo/InputAddTodo';
import { memo, type ReactElement, useState } from 'react';
import { TodoList } from 'entities/TodoCardGlobal/ui/TodoList/TodoList';
import { type TodoCompleteTp } from 'shared/types/entities/todoTypes';
import { Card } from 'shared/ui/deprecated/Card/Card';
import { getTimeFormat } from 'shared/lib/time/getTimeFormat';

interface TodoCardProps {
  todoComplete: TodoCompleteTp;
  className?: string;
}

// eslint-disable-next-line react/display-name
export const TodoCardGlobal = memo(({ todoComplete }: TodoCardProps): ReactElement => {
  const [text, setText] = useState('');

  return (
    <Card className={cls.padding}>
      <h4 className={cls.title}>
        {`${todoComplete.name} / ${getTimeFormat(todoComplete.timeCreate)}`}
      </h4>
      <InputAddTodo idGroup={todoComplete?.id!} text={text} changeText={setText} />
      <TodoList todoList={todoComplete.todoList} />
    </Card>
  );
});
