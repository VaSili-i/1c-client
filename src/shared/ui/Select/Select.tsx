import { type ChangeEvent, type ReactElement, useEffect } from 'react';
import cls from './Select.module.scss';
import { VStack } from 'shared/ui/Stack';

interface SelectProps<T> {
  options?: T[];
  label: string;
  name?: string;
  value?: string;
  changeValue?: (value: Record<string, string>) => void;
}

export function Select(props: SelectProps<any>): ReactElement {
  const { options, label, changeValue, value, name } = props;
  const changeValueAct = (event: ChangeEvent<HTMLSelectElement>): void => {
    const opt = options?.find((opt) => opt.name === event.target.value);
    changeValue?.({ [event.target.name]: opt });
  };

  useEffect(() => {
    changeValueAct({ target: { value: value ?? 'MIDDLE', name: name ?? label } } as ChangeEvent<HTMLSelectElement>);
  }, []);

  return (
    <VStack max className={cls.container}>
      <select name={name ?? label} value={value ?? 'MIDDLE'} onChange={changeValueAct} required={true} className={cls.Select}>
        {options?.map((option) => (
          <option value={option.name} key={option.name}>
            {option.name}
          </option>
        ))}
      </select>
      <label className={cls.placeholder}>{label}</label>
    </VStack>
  );
}
