import React from 'react';
import cls from './ResourceLink.module.scss';
import PlusIcon from 'shared/assets/icon/add_black_24dp.svg';
import { useGetAllResourceQuery } from 'shared/api/general/ResourceAnswerRtqQueryApi';
import { useGetAllResourceLinkQuery } from 'shared/api/general/ResourceRtqQueryApi';

const ResourceLink: React.FC = () => {
  const { data: columnsTwo } = useGetAllResourceQuery(undefined);
  const { data: dateList } = useGetAllResourceLinkQuery(undefined);
  return (
   <></>
  );
};

export default ResourceLink;
