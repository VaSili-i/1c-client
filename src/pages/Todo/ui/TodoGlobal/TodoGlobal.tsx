import { Card } from 'shared/ui/deprecated/Card/Card';
import Plus from 'shared/assets/icon/plus.svg';
import cls from './TodoGlobal.module.scss';
import { type TodoCompleteTp } from 'shared/types/entities/todoTypes';
import { TodoCardGlobal } from 'entities/TodoCardGlobal';
import { useAddTodoGroupMutation, useGetAllTodoByTypeQuery } from 'entities/TodoCardDays/service/TodoRtqQueryApi';
import { type ReactElement } from 'react';
import { Icon } from 'shared/ui/Icon/Icon';

export function TodoGlobal(): ReactElement {
  const { data: todoGlobalList } = useGetAllTodoByTypeQuery('DAY');
  const [createTodo] = useAddTodoGroupMutation();

  const createTodoAction = async (): Promise<void> => {
    await createTodo({
      name: '',
      todoType: { id: '2' },
      timeCreate: ''
    });
  };

  return (
    <>
      <Card>
        <Icon isClickable onClickAct={createTodoAction} SvgIcon={Plus} clsName={cls.icon} />
      </Card>
      {todoGlobalList?.map((todo: TodoCompleteTp) => <TodoCardGlobal key={todo.id} todoComplete={todo} />)}
    </>
  );
}
