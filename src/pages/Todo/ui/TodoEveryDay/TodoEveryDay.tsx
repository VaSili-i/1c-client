import cls from './TodoEveryDay.module.scss';
import { HStack } from 'shared/ui/Stack';
import LeftArrow from 'shared/assets/icon/left-arrow.svg';
import { TodoCardDays } from 'entities/TodoCardDays/ui/TodoCardDays/TodoCardDays';
import RightArrow from 'shared/assets/icon/right-arrow.svg';
import { type ReactElement, useEffect, useRef, useState } from 'react';
import { useAddTodoGroupMutation, useGetAllTodoByTypeQuery } from 'entities/TodoCardDays/service/TodoRtqQueryApi';
import { type TodoCompleteTp, TypeTodoEnum } from 'shared/types/entities/todoTypes';
import Plus from 'shared/assets/icon/plus.svg';
import { DateTime } from 'luxon';
import { Icon } from 'shared/ui/Icon/Icon';
import Hammer from 'hammerjs';

export function TodoEveryDay(): ReactElement {
  const { data: todoEveryDayList } = useGetAllTodoByTypeQuery(TypeTodoEnum.EVERY_DAY);
  const [createGroupTodo] = useAddTodoGroupMutation();

  const [todo, setTodo] = useState<TodoCompleteTp | undefined>();
  const indexTodo = useRef(0);
  const arrowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (todoEveryDayList != null && todoEveryDayList.length > 0) {
      indexTodo.current = todoEveryDayList.length - 1;
      setTodo({ ...todoEveryDayList[todoEveryDayList.length - 1] }); // Копируем объект, чтобы React отреагировал
    }
  }, [todoEveryDayList]);

  const createTodoAction = async (): Promise<void> => {
    await createGroupTodo({
      name: 'Задача без описания',
      type: 'everyDay',
      timeCreate: DateTime.now().toString()
    });

    if (todoEveryDayList != null && todoEveryDayList.length > 0) {
      setTodo({ ...todoEveryDayList[todoEveryDayList.length - 1] });
    }
  };

  const nextTodo = (): void => {
    if (todoEveryDayList != null && indexTodo.current < todoEveryDayList.length - 1) {
      indexTodo.current += 1;
      setTodo({ ...todoEveryDayList[indexTodo.current] }); // Создаем новый объект для обновления состояния
    } else {
      setTodo(undefined);
      console.log('Достигнут конец списка');
    }
  };

  const prevTodo = (): void => {
    if (todoEveryDayList != null && indexTodo.current > 0) {
      indexTodo.current -= 1;
      setTodo({ ...todoEveryDayList[indexTodo.current] }); // Создаем новый объект для обновления состояния
    } else {
      console.log('Достигнуто начало списка');
    }
  };

  useEffect(() => {
    if (arrowRef.current != null) {
      const hammer = new Hammer(arrowRef.current);

      hammer.get('swipe').set({
        direction: Hammer.DIRECTION_HORIZONTAL,
        velocity: 0.1,
        threshold: 1
      });

      hammer.on('swipeleft', () => {
        prevTodo();
      });

      hammer.on('swiperight', () => {
        nextTodo();
      });

      return () => {
        hammer.off('swipeleft');
        hammer.off('swiperight');
        hammer.destroy();
      };
    }
  }, [arrowRef, todoEveryDayList]);

  return (
    <div ref={arrowRef} className={cls.EveryDay} style={{ touchAction: 'none', display: 'block' }}>
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
