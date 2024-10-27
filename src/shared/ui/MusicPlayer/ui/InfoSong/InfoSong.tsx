import { HStack, VStack } from 'shared/ui/Stack';
import { Gap } from 'shared/ui/Stack/stackConfig';
import cls from './InfoSong.module.scss';
import teoAndSiluca from 'shared/assets/image/teoAndSiluca.jpg';
import { type ReactElement } from 'react';

export function InfoSong(): ReactElement {
  return (
    <VStack gap={Gap.G8} className={cls.imageBlock}>
      <img className={cls.image} src={teoAndSiluca} alt={'music'} />
      <p className={cls.singleName}>Song title</p>
      <p className={cls.avtorName}>Name artist</p>
      <HStack gap={Gap.G8}>
        <input className={cls.slider} type={'range'} min={'0'} max={'100'} value={'0'} />
        <span>3:00</span>
      </HStack>
    </VStack>
  );
}
