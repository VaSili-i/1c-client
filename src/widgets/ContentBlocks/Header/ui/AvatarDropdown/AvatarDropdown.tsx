import { type ReactElement, useState } from 'react';
import React from 'shared/assets/icon/nav/react-nav.svg';
import { profileNavList } from 'app/provider/nav/config/sidebarNavList';
import { DropdownLinc } from 'shared/ui/Dropdown/DropdawnLinc/DropdownLinc';
import cls from './AvatarDropdown.module.scss';
import Teo from 'shared/assets/image/teoAndSiluca.jpg';

export function AvatarDropdown(): ReactElement {
  const [dropdown, setDropdown] = useState(false);

  const setDropdownAction = (): void => {
    setDropdown(!dropdown);
  };

  return (
    <div className={cls.AvatarDropdown}>
      <div className={cls.boxIcon}>
        <img onClick={setDropdownAction} className={cls.icon} src={Teo} alt="Teo and Siluca" />
      </div>
      <DropdownLinc isOpen={dropdown} listItem={profileNavList} />
    </div>
  );
}
