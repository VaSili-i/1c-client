import { Flex, type FlexProps } from '../Flex/Flex';
import { Dir } from 'shared/ui/Stack/stackConfig';
import { type ReactElement } from 'react';

type HStackProps = Omit<FlexProps, 'direction'>;

export function HStack(props: HStackProps): ReactElement {
  return <Flex direction={Dir.ROW} {...props} />;
}
