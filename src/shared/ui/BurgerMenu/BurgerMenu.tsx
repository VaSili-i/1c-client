import cls from './BurgerMenu.module.scss';
import { joinClassName } from 'shared/lib/joinClassName/joinClassName';
import { type ReactElement } from 'react';

interface BurgerMenuProps {
  className?: string;
  isOpen: boolean;
  setIsOpen: (event: any) => void;
  children?: ReactElement | string;
}

export function BurgerMenu(props: BurgerMenuProps): ReactElement {
  const { className, children, isOpen, setIsOpen } = props;
  // const joinClassNames = joinClassName(cls.Button, {}, className, cls[typeButton]);
  function changeIsOpen(): void {
    setIsOpen(!isOpen);
  }

  return (
    <div className={cls.burgerMenu}>
      <input type="checkbox" className={cls.menuToggle} id="menu-toggle" />
      <label htmlFor="menu-toggle" onClick={changeIsOpen} className={cls.menuIcon}>
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
  );
}
