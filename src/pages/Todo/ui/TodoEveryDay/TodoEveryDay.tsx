import cls from './TodoEveryDay.module.scss';
import { HStack } from 'shared/ui/Stack';
import LeftArrow from 'shared/assets/icon/left-arrow.svg';
import { TodoCardDays } from 'entities/TodoCardDays/ui/TodoCardDays/TodoCardDays';
import RightArrow from 'shared/assets/icon/right-arrow.svg';
import { type ReactElement, useEffect, useRef, useState } from 'react';
import { useAddTodoGroupMutation, useGetAllTodoByTypeQuery } from 'entities/TodoCardDays/service/TodoRtqQueryApi';
import { type TodoCompleteTp } from 'shared/types/entities/todoTypes';
import Plus from 'shared/assets/icon/plus.svg';
import { DateTime } from 'luxon';
import { Icon } from 'shared/ui/Icon/Icon';

export function TodoEveryDay(): ReactElement {
  const { data: todoEveryDayList } = useGetAllTodoByTypeQuery('EVERY_DAY');
  const [createGroupTodo] = useAddTodoGroupMutation();

  const [todo, setTodo] = useState<TodoCompleteTp | undefined>();
  const indexTodo = useRef(0);

  useEffect((): void => {
    if (todoEveryDayList != null) {
      indexTodo.current = todoEveryDayList.length - 1;
      setTodo(todoEveryDayList[todoEveryDayList.length - 1]);
    }
  }, [todoEveryDayList]);

  const createTodoAction = async (): Promise<void> => {
    await createGroupTodo({
      name: 'Задача без описания',
      type: 'everyDay',
      timeCreate: DateTime.now().toString()
    });

    if (todoEveryDayList != null) {
      setTodo(todoEveryDayList[todoEveryDayList.length - 1]);
    }
  };

  const nextTodo = (): void => {
    if (todoEveryDayList != null && indexTodo.current < todoEveryDayList.length) {
      setTodo(todoEveryDayList[++indexTodo.current]);
    } else {
      setTodo(undefined);
    }
  };

  const prevTodo = (): void => {
    if (todoEveryDayList != null && indexTodo.current > 0) {
      setTodo(todoEveryDayList[--indexTodo.current]);
    }
  };

  return (
    <div className={cls.EveryDay}>
      <HStack max className={cls.blockInput}>
        <Icon isClickable onClickAct={nextTodo} SvgIcon={LeftArrow} clsName={cls.imageArrow} />
        {todo != null ? (
          <TodoCardDays key={todo._id} className={cls.blockInput} todo={todo} />
        ) : (
          <Icon isClickable onClickAct={createTodoAction} SvgIcon={Plus} clsName={cls.icon} />
        )}
        <Icon isClickable onClickAct={prevTodo} SvgIcon={RightArrow} clsName={cls.imageArrow} />
      </HStack>
    </div>
  );
}
