import React, { useState } from 'react';
import cls from './TreeResource.module.scss';
import { useGetAllLearnResourceTreeQuery } from 'shared/api/general/LearnResourceTreeRtqQueryApi';



export const TreeResource: React.FC = () => {
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);

  const [autoExpandParent, setAutoExpandParent] = useState(true);

  const onExpand = (newExpandedKeys: React.Key[]) => {
    setExpandedKeys(newExpandedKeys);
    setAutoExpandParent(false);
  };

  const { data: learnTree } = useGetAllLearnResourceTreeQuery(undefined);

  return (
    <></>
  );
};
