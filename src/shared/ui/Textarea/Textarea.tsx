import {
  type ChangeEvent,
  InputHTMLAttributes,
  type ReactElement,
  type TextareaHTMLAttributes
} from 'react';
import cls from './Textarea.module.scss';
import { HStack } from 'shared/ui/Stack';
import { joinClassName } from 'shared/lib/joinClassName/joinClassName';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  changeValue: (value: Record<string, string>) => void;
  className?: string;
  value?: string;
  name?: string;
}

export function Textarea(props: TextareaProps): ReactElement {
  const { label, changeValue, className, value, name, ...otherPrp } = props;

  const changeValueAct = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    changeValue({ [event.target.name]: event.target.value });
  };

  return (
    <HStack className={cls.blockInput}>
      <textarea
        {...otherPrp}
        name={name ?? label}
        required={true}
        onChange={changeValueAct}
        className={joinClassName(cls.TextArea, {})}
      />
      <label className={cls.label}>{label}</label>
    </HStack>
  );
}
