import { type Content, Gap, type Items } from 'shared/ui/Stack/stackConfig';
import { VStack } from 'shared/ui/Stack';
import { type ReactElement, type ReactNode } from 'react';
import { joinClassName } from 'shared/lib/joinClassName/joinClassName';
import cls from './Card.module.scss';

interface CardProps {
  children: ReactNode;
  className?: string;
  justify?: Content;
  align?: Items;
}

export function Card(props: CardProps): ReactElement {
  const { children, className, justify, align } = props;

  const clsNamesCard = joinClassName(cls.Card, {}, className);

  return (
    <VStack align={align} justify={justify} gap={Gap.G16} className={clsNamesCard}>
      {children}
    </VStack>
  );
}
