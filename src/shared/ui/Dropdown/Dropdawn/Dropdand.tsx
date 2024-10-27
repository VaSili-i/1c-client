import { HStack } from 'shared/ui/Stack';
import { Content } from 'shared/ui/Stack/stackConfig';
import cls from './Dropdawn.module.scss';
import React from 'shared/assets/icon/nav/react-nav.svg';
import { type ReactElement, useState } from 'react';
import { joinClassName } from 'shared/lib/joinClassName/joinClassName';
import { type DropdownTs } from 'shared/ui/Dropdown/Dropdawn/types';

interface DropdownProps {
  listItem: DropdownTs[];
  defaultText: string;
  className?: string;
}

export function Dropdown({ listItem, className, defaultText }: DropdownProps): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [activeOption, setActiveOption] = useState(0);
  const [activeText, setActiveText] = useState(defaultText);

  const dropdownClassNames = joinClassName(cls.Dropdown, { [cls.open]: isOpen });
  const selectClassNames = joinClassName(cls.select, { [cls.checked]: isOpen }, className);
  const menuClassNames = joinClassName(cls.menu, { [cls.menuOpen]: isOpen }, className);
  const getItmCls = (index: number): string =>
    activeOption === index ? cls.active : cls.notActive;

  const toggleIsOpen = (): void => {
    setIsOpen(!isOpen);
  };

  const chooseItem = (index: number, text: string): void => {
    setIsOpen(false);
    setActiveOption(index);
    setActiveText(text);
  };
  return (
    <div className={dropdownClassNames}>
      <div onClick={toggleIsOpen} className={selectClassNames}>
        <span className={cls.selected}>{activeText}</span>
      </div>

      <ul className={menuClassNames}>
        {listItem.map(({ IconSvg, name }, index) => (
          <HStack
            max
            key={name}
            className={getItmCls(index)}
            onClick={() => {
              chooseItem(index, name);
            }}
            justify={Content.START}
          >
            {IconSvg != null && <IconSvg className={cls.icon} />}
            <li className={cls.textIcon} key={name}>
              {name}
            </li>
          </HStack>
        ))}
      </ul>
    </div>
  );
}
