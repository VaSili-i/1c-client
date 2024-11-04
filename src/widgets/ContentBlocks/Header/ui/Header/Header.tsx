import { memo, type ReactElement, useState } from 'react';
import { HStack } from 'shared/ui/Stack';
import { Content, Gap } from 'shared/ui/Stack/stackConfig';
import { AvatarDropdown } from 'widgets/ContentBlocks/Header/ui/AvatarDropdown/AvatarDropdown';
import cls from './Header.module.scss';
import Calendar from 'shared/assets/icon/header/calendar.svg';
import { getCurrentDay } from 'shared/lib/time/getCurrentDay';
import { Notification } from 'widgets/ContentBlocks/Header/ui/Notification/Notification';
import { Icon } from 'shared/ui/Icon/Icon';
import Cross from 'shared/assets/icon/cross.svg';
import MenuNav from 'shared/assets/icon/nav/menu-nav.svg';

function Header(): ReactElement {
  const currentDay = getCurrentDay();
  const [fullMenuBar, setFulMenuBar] = useState(false);
  function getToggleButton(): ReactElement {
    const props = {
      onClick: () => {
        setFulMenuBar(!fullMenuBar);
      },
      className: cls.iconNav
    };

    return fullMenuBar ? <Cross {...props} /> : <MenuNav {...props} />;
  }

  return (
    <HStack max className={cls.Header} gap={Gap.G40} justify={Content.END}>
      {getToggleButton()}
      <HStack style={{ height: '100%' }} gap={Gap.G16}>
        <Notification />
        <Icon clsName={cls.icon} SvgIcon={Calendar} />
        <span className={cls.timeText}>{currentDay}</span>
      </HStack>
      <AvatarDropdown />
    </HStack>
  );
}

export default memo(Header);
