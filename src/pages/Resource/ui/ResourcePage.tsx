import { memo, type ReactElement, useEffect, useState } from 'react';
import { HStack } from 'shared/ui/Stack';
import { Content, Items } from 'shared/ui/Stack/stackConfig';
import cls from './ResourcePage.module.scss';
import { Card } from 'shared/ui/Card/Card';
import { useGetAllTypeLearnQuery } from 'shared/api/general/LearnTypeRtqQueryApi';
import { imagesList } from 'shared/imageCode/consts';
import { type DropdownTs } from 'shared/ui/Dropdown/Dropdawn/types';
import { useGetAllLearnResourceQuery } from 'shared/api/general/LearnResourceRtqQueryApi';
import { AddLearnResource } from 'features/AddLearnResource/ui/AddLearnResource/AddLearnResource';
import PlusIcon from 'shared/assets/icon/add_black_24dp.svg';
import { FloatButton } from 'antd';

function ResourcePage(): ReactElement {
  const { data: learnTypeList } = useGetAllTypeLearnQuery(undefined);
  const [isOpen, setIsOpen] = useState(false);

  const learnTypeDropdownList: DropdownTs[] = (learnTypeList ?? []).map(({ id, name, code }) => ({
    id: id ?? '',
    name,
    IconSvg: imagesList[code]
  }));

  const { data: resourceList1 } = useGetAllLearnResourceQuery(undefined);
  const [resourceList, setRes] = useState(resourceList1?.slice(0, 10) ?? []);

  useEffect(() => {
    setRes(resourceList1?.slice(0, 10) ?? []);
  }, [resourceList1]);

  const loadMore = () => {
    // Исправлено название функции на loadMore
    setRes((prevResourceList) => [
      ...prevResourceList,
      ...(resourceList1?.slice(prevResourceList.length, prevResourceList.length + 10) ?? [])
    ]);
  };

  const Row = ({ index }: { index: number }) => {
    const item = resourceList[index];
    console.log(resourceList[index]);
    // Рендеринг элемента списка на основе данных
    return <Card key={item.id} view={'list'} IconPr={imagesList[item.type.code]} learn={item} />;
  };

  return (
    <HStack align={Items.START} justify={Content.AROUND} className={cls.ResourcePage}>
      <AddLearnResource isOpen={isOpen} toggleOpen={setIsOpen} />
      <FloatButton
        onClick={() => {
          setIsOpen(true);
        }}
        className={cls.colorFill}
        icon={<PlusIcon />}
        type="default"
        style={{ right: 100 }}
      />
      <div className={cls.container}>
        {(resourceList1 ?? []).map((item) => (
          <Card key={item.id} view={'list'} IconPr={imagesList[item.type.code]} learn={item} />
        ))}
      </div>
    </HStack>
  );
}
export default memo(ResourcePage);
