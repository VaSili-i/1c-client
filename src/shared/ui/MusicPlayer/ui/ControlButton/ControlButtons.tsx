import { HStack, VStack } from 'shared/ui/Stack';
import cls from './ControlButtons.module.scss';
import { Gap } from 'shared/ui/Stack/stackConfig';
import SkipPrevious from 'shared/assets/icon/musicPlayer/skip-previous.svg';
import Play from 'shared/assets/icon/musicPlayer/play.svg';
import SkipNext from 'shared/assets/icon/musicPlayer/skip-next.svg';
import { type ReactElement } from 'react';
import { Icon } from 'shared/ui/Icon/Icon';

export function ControlButtons(): ReactElement {
  return (
    <VStack max>
      <VStack gap={Gap.G16} className={cls.controllButtons}>
        <HStack gap={Gap.G24}>
          <Icon SvgIcon={SkipPrevious} clsName={cls.icon} />
          <Icon SvgIcon={Play} clsName={cls.icon} />
          <Icon SvgIcon={SkipNext} clsName={cls.icon} />
        </HStack>
      </VStack>
    </VStack>
  );
}
