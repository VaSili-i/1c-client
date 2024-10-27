import { HStack, VStack } from 'shared/ui/Stack';
import { Content, Gap } from 'shared/ui/Stack/stackConfig';
import cls from './DropdownLinc.module.scss';
import { AppLink } from 'shared/ui/Link/AppLink';
import React from 'shared/assets/icon/nav/react-nav.svg';
import { type ReactElement } from 'react';
import { type AppLincType } from 'app/provider/nav/types/types';
import { joinClassName } from 'shared/lib/joinClassName/joinClassName';

interface DropdownProps {
  listItem: AppLincType[];
  isOpen: boolean;
  className?: string;
}

export function DropdownLinc({ listItem, isOpen, className }: DropdownProps): ReactElement {
  const dropdownClassNames = joinClassName(cls.Dropdown, { [cls.close]: !isOpen }, className);
  return (
    <VStack className={dropdownClassNames}>
      {listItem.map(({ to, Icon, title }) => (
        <AppLink className={cls.linc} key={to} to={to}>
          <HStack max justify={Content.START} gap={Gap.G20}>
            <Icon className={cls.icon} />
            <span className={cls.textIcon}>{title}</span>
          </HStack>
        </AppLink>
      ))}
    </VStack>
  );
}
