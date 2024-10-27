import React, { useState } from 'react';
import { ConfigProvider, Input, Tree } from 'antd';
import cls from './TreeResource.module.scss';
import { useGetAllLearnResourceTreeQuery } from 'shared/api/general/LearnResourceTreeRtqQueryApi';

const { Search } = Input;

export const TreeResource: React.FC = () => {
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);

  const [autoExpandParent, setAutoExpandParent] = useState(true);

  const onExpand = (newExpandedKeys: React.Key[]) => {
    setExpandedKeys(newExpandedKeys);
    setAutoExpandParent(false);
  };

  const { data: learnTree } = useGetAllLearnResourceTreeQuery(undefined);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: 'var(--up-bg-color)',
          colorText: 'var(--main-color)'
        }
      }}>
      <div className={cls.Tree}>
        <Search style={{ marginBottom: 8 }} placeholder="Search" onChange={() => {}} />
        <Tree onExpand={onExpand} expandedKeys={expandedKeys} autoExpandParent={autoExpandParent} treeData={learnTree as any} />
      </div>
    </ConfigProvider>
  );
};
