import { type DetailedHTMLProps, type HTMLAttributes, type ReactElement, type ReactNode } from 'react';
import cls from './Flex.module.scss';
import { Content, Dir, type Gap, Items, type JustItms, type PlaceItems, type Wrap } from 'shared/ui/Stack/stackConfig';
import { joinClassName, type Mods } from 'shared/lib/joinClassName/joinClassName';

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends DivProps {
  className?: string;
  children: ReactNode;
  justify?: Content;
  align?: Items;
  direction: Dir;
  placeItems?: PlaceItems;
  justIt?: JustItms;
  gap?: Gap;
  max?: boolean;
  wrap?: Wrap;
}

export function Flex(props: FlexProps): ReactElement {
  const {
    className,
    children,
    justify = Content.CENTER,
    align = Items.CENTER,
    direction = Dir.ROW,
    gap = '',
    max,
    wrap = '',
    placeItems = '',
    justIt = '',
    ...otherProps
  } = props;

  const classes = [className, cls[justify], cls[align], cls[direction], cls[gap], cls[wrap], cls[placeItems], cls[justIt]];

  const mods: Mods = {
    [cls.max]: max
  };

  return (
    <div className={joinClassName(cls.Flex, mods, ...classes)} {...otherProps}>
      {children}
    </div>
  );
}
