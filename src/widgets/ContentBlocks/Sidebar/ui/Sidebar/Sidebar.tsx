import { memo, type ReactElement, useState } from 'react';
import Nav from '../Nav/Nav';
import cls from './Sidebar.module.scss';
import { BurgerMenu } from 'shared/ui/BurgerMenu/BurgerMenu';

function Sidebar(): ReactElement {
 // const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={cls.Sidebar}>
{/*      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />*/}
      <Nav />
    </div>
  );
}

export default memo(Sidebar);
