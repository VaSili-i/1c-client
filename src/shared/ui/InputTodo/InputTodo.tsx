import { HStack } from 'shared/ui/Stack';
import cls from './InputTodo.module.scss';
import { type ReactElement } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { Gap } from 'shared/ui/Stack/stackConfig';
import CrossIcon from 'shared/assets/icon/cross-lite.svg';
import { useChangeIsDoneMutation, useDeleteTodoMutation } from 'entities/TodoCardDays/service/TodoRtqQueryApi';
import { type TodoTp } from 'shared/types/entities/todoTypes';

interface TodoInputProps {
  todo: TodoTp;
}

export function InputTodo({ todo }: TodoInputProps): ReactElement {
  const [changeIsDone] = useChangeIsDoneMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  return (
    <HStack max gap={Gap.G8}>
      <HStack className={cls.item}>
        <input
          checked={todo.isDone}
          type={'checkbox'}
          onChange={async () => await changeIsDone({ ...todo, isDone: !todo.isDone })}
          className={cls.checkb}
        />
        <input type={'text'} value={todo.name} className={cls.text} />
      </HStack>
      <Button onClick={async () => await deleteTodo(todo.id ?? '')} typeButton={'circle'}>
        <CrossIcon className={cls.icon} />
      </Button>
    </HStack>
  );
}
