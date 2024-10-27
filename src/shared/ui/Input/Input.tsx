import cls from './Input.module.scss';
import { type ChangeEvent, type InputHTMLAttributes, type ReactElement } from 'react';
import { HStack } from 'shared/ui/Stack';
import { joinClassName } from 'shared/lib/joinClassName/joinClassName';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  changeValue: (value: Record<string, string>) => void;
  className?: string;
  value?: string | number;
  name?: string;
}

export function Input(props: InputProps): ReactElement {
  const { label, changeValue, className, value, name, ...otherPrp } = props;

  const changeValueAct = (event: ChangeEvent<HTMLInputElement>): void => {
    changeValue({ [event.target.name]: event.target.value });
  };

  return (
    <HStack className={cls.blockInput}>
      <input
        {...otherPrp}
        name={name ?? label}
        value={value}
        onChange={changeValueAct}
        required={true}
        className={joinClassName(cls.Input, {}, className)}
      />
      <label className={cls.label}>{label}</label>
    </HStack>
  );
}
