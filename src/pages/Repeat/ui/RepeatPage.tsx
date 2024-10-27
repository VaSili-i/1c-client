import { memo, type ReactElement } from 'react';
import cls from './Repeat.module.scss';
import { RepeatTable } from 'entities/RepeatTable';

function RepeatPage(): ReactElement {
  return (
    <div className={cls.RepeatPage}>
      <RepeatTable />
    </div>
  );
}

export default memo(RepeatPage);
