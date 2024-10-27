import { type ReactElement } from 'react';
import { VStack } from 'shared/ui/Stack';
import cls from './Player.module.scss';
import { Content, Gap, Items } from 'shared/ui/Stack/stackConfig';
import { TopBar } from 'shared/ui/MusicPlayer/ui/TopBar/TopBar';
import { InfoSong } from 'shared/ui/MusicPlayer/ui/InfoSong/InfoSong';
import { ControlButtons } from 'shared/ui/MusicPlayer/ui/ControlButton/ControlButtons';

function Player(): ReactElement {
  return (
    <VStack gap={Gap.G8} justify={Content.START} align={Items.START} className={cls.MusicPlayer}>
      <TopBar />
      <InfoSong />
      <ControlButtons />
    </VStack>
  );
}

export default Player;
