import cls from './InputAddTodo.module.scss';
import { type ChangeEvent, type ReactElement } from 'react';
import { HStack } from 'shared/ui/Stack';
import AddTodoIcon from 'shared/assets/icon/right-circle.svg';
import { useAddTodoMutation } from 'entities/TodoCardDays/service/TodoRtqQueryApi';
import { Icon } from 'shared/ui/Icon/Icon';
import { DateTime } from 'luxon';

interface AddTodoProps {
  text: string;
  changeText: (value: string) => void;
  idGroup: string;
}

export function InputAddTodo({ text, changeText, idGroup }: AddTodoProps): ReactElement {
  const changeTextAction = (event: ChangeEvent<HTMLInputElement>): void => {
    changeText(event.target.value);
  };

  const [addTodo] = useAddTodoMutation();

  const addTodoAction = async (): Promise<void> => {
    await addTodo({ name: text, isDone: false, dataCreate: DateTime.local().toFormat('dd.MM.yyyy') });
  };

  return (
    <HStack className={cls.container}>
      <input type={'text'} value={text} onChange={changeTextAction} className={cls.Input} />
      <Icon clsName={cls.icon} SvgIcon={AddTodoIcon} isClickable onClickAct={addTodoAction} />
    </HStack>
  );
}
