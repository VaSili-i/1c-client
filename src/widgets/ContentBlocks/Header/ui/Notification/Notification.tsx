import cls from './Notification.module.scss';
import NotificationIcon from 'shared/assets/icon/header/notification.svg';
import { type ReactElement, useState } from 'react';
import { VStack } from 'shared/ui/Stack';
import { DropdownLinc } from 'shared/ui/Dropdown/DropdawnLinc/DropdownLinc';
export function Notification(): ReactElement {
  const [dropdown, setDropdown] = useState(false);

  const setDropdownAction = (): void => {
    setDropdown(!dropdown);
  };
  return (
    <VStack max className={cls.Notification}>
      <button onClick={setDropdownAction}>
        <div className={cls.notificationCount}>3</div>
        <NotificationIcon className={cls.icon} />
      </button>
      <DropdownLinc className={cls.notificationList} listItem={[]} isOpen={dropdown} />
    </VStack>
  );
}
