import cls from './Card.module.scss';
import React, { type DetailedHTMLProps, type HTMLAttributes, type ReactElement } from 'react';
import { Icon } from 'shared/ui/Icon/Icon';
import { HStack, VStack } from 'shared/ui/Stack';
import { Gap, JustItms } from 'shared/ui/Stack/stackConfig';
import { Button } from 'shared/ui/Button/Button';
import Star from 'shared/assets/icon/card/star.svg';
import { AppLink } from 'shared/ui/Link/AppLink';
import { joinClassName } from 'shared/lib/joinClassName/joinClassName';
import { type LearnResourceTp } from 'shared/types/entities/learnTypes';
import { getTimeFormat } from 'shared/lib/time/getTimeFormat';

interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  IconPr: React.VFC<React.SVGProps<SVGSVGElement>>;
  learn: LearnResourceTp;
  view: 'list' | 'grid';
}

export function Card({ IconPr, learn, view }: CardProps): ReactElement {
  const cardViewClassName = view === 'list' ? cls.list : cls.grid;
  const cardClassNames = joinClassName(cls.Card, {}, cardViewClassName);

  return (
    <VStack justIt={JustItms.START} gap={Gap.G60} className={cardClassNames}>
      <HStack>
        <HStack className={cls.iconBox}>
          <div className={cls.circleIcon}>
{/*            <Icon clsName={cls.icon} SvgIcon={IconPr} />*/}
          </div>
        </HStack>
        <VStack max gap={Gap.G4} className={cls.metaInfo}>
          <span>{getTimeFormat(learn.timeCreate)}</span>
          <span>0 / 10</span>
          <HStack gap={Gap.G4}>
            <Star />
            <Star />
            <Star />
          </HStack>
        </VStack>
      </HStack>

      <div className={cls.content}>
        <h3>{learn.name}</h3>
        <p>{learn.content}</p>
      </div>
      <Button className={cls.button}>
        <AppLink target={'_blank'} className={cls.button} to={learn.link}>
          Read more
        </AppLink>
      </Button>
    </VStack>
  );
}
