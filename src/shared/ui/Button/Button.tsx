import cls from './Button.module.scss';
import { joinClassName } from 'shared/lib/joinClassName/joinClassName';
import { type ReactElement } from 'react';

interface ButtonProps {
  className?: string;
  typeButton?: string;
  typeForm?: string;
  children?: ReactElement | string;
  onClick?: (event: any) => void;
}

export function Button(props: ButtonProps): ReactElement {
  const { className, typeButton = 'def', children, onClick } = props;
  const joinClassNames = joinClassName(cls.Button, {}, className, cls[typeButton]);
  return (
    <button className={joinClassNames} onClick={onClick}>
      {children ?? ''}
    </button>
  );
}
