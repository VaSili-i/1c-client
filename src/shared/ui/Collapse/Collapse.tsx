import React, { type ReactElement } from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';

interface CollapsePersonProps {
  items: CollapseProps['items'];
}

export const CollapsePerson = ({ items }: CollapsePersonProps): ReactElement => {
  const onChange = (key: string | string[]): void => {
    console.log(key);
  };

  return <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />;
};
