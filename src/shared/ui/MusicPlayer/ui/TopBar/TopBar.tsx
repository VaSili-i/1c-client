import { HStack } from 'shared/ui/Stack';
import { Content, Gap } from 'shared/ui/Stack/stackConfig';
import cls from './TopBar.module.scss';
import ChevronRight from 'shared/assets/icon/musicPlayer/chevron-right.svg';
import Menu from 'shared/assets/icon/menu-alt.svg';
import { type ReactElement } from 'react';
import Volume from 'shared/assets/icon/musicPlayer/volume-min.svg';
import Music from 'shared/assets/icon/musicPlayer/music.svg';
import Edit from 'shared/assets/icon/edit.svg';
import mp3 from 'shared/service/music/Whisper_Whisper_Whisper.mp3';
import { Icon } from 'shared/ui/Icon/Icon';

export function TopBar(): ReactElement {
  function play(): void {
    const audio = new Audio(mp3);
    audio.volume = 0.3;
    audio.play();
  }

  return (
    <HStack max justify={Content.BETWEEN} className={cls.topBar}>
      <Icon isClickable onClickAct={play} clsName={cls.icon} SvgIcon={ChevronRight} />

      <HStack gap={Gap.G16} justify={Content.CENTER}>
        <Icon clsName={cls.icon} SvgIcon={Volume} />
        <Icon clsName={cls.icon} SvgIcon={Music} />
        <Icon clsName={cls.icon} SvgIcon={Edit} />
      </HStack>
      <Icon clsName={cls.icon} SvgIcon={Menu} />
    </HStack>
  );
}
