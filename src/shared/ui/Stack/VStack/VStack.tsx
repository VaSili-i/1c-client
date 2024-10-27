import { Flex, type FlexProps } from '../Flex/Flex';
import { type ReactElement } from 'react';
import { Dir } from 'shared/ui/Stack/stackConfig';

type VStackProps = Omit<FlexProps, 'direction'>;

export function VStack(props: VStackProps): ReactElement {
  return <Flex {...props} direction={Dir.COLUMN} />;
}
