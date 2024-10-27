import { memo, type ReactElement } from 'react';
import { HStack } from 'shared/ui/Stack';
import { Content, Gap } from 'shared/ui/Stack/stackConfig';
import { AvatarDropdown } from 'widgets/ContentBlocks/Header/ui/AvatarDropdown/AvatarDropdown';
import cls from './Header.module.scss';
import Calendar from 'shared/assets/icon/header/calendar.svg';
import { getCurrentDay } from 'shared/lib/time/getCurrentDay';
import { Notification } from 'widgets/ContentBlocks/Header/ui/Notification/Notification';
import { Icon } from 'shared/ui/Icon/Icon';

function Header(): ReactElement {
  const currentDay = getCurrentDay();

  return (
    <HStack max className={cls.Header} gap={Gap.G40} justify={Content.END}>
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
