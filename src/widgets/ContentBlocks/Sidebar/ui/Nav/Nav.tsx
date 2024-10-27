import { memo, type ReactElement, useState } from 'react';
import { AppLink } from 'shared/ui/Link/AppLink';
import { sidebarNavList } from 'app/provider/nav/config/sidebarNavList';
import { type AppLincType } from 'app/provider/nav/types/types';
import cls from './Nav.module.scss';
import { joinClassName } from 'shared/lib/joinClassName/joinClassName';
import MenuNav from 'shared/assets/icon/nav/menu-nav.svg';
import Cross from 'shared/assets/icon/cross.svg';
import { HStack, VStack } from 'shared/ui/Stack';
import { Gap } from 'shared/ui/Stack/stackConfig';
import { useLocation } from 'react-router-dom';

function Nav(): ReactElement {
  const location = useLocation();

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

  const getIconClassNames = (to: string): string => joinClassName(cls.icon, { [cls.active]: to === location.pathname });

  return (
    <VStack className={joinClassName(cls.Nav, { [cls.fullMenu]: fullMenuBar })}>
      {getToggleButton()}
      <div className={cls.container}>
        {sidebarNavList.map(({ Icon, to, title }: AppLincType) => (
          <AppLink key={to} to={to}>
            <HStack gap={Gap.G24} max>
              <Icon className={getIconClassNames(to)} />
              <span className={cls.textIcon}>{title}</span>
            </HStack>
          </AppLink>
        ))}
      </div>
    </VStack>
  );
}

export default memo(Nav);
