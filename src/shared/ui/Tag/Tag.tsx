import cls from './Tag.module.scss';
import { type ReactElement } from 'react';

export function Tag(): ReactElement {
  return <label className={cls.Tag}>STATE</label>;
}
