import { memo, type ReactElement } from 'react';
import Nav from '../Nav/Nav';
import cls from './Sidebar.module.scss';

function Sidebar(): ReactElement {
  return (
    <div className={cls.Sidebar}>
      <Nav />
    </div>
  );
}

export default memo(Sidebar);
