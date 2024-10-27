import { memo, type ReactElement, useState } from 'react';
import cls from './TodoPage.module.scss';
import { HStack } from 'shared/ui/Stack';
import { JustItms, Wrap } from 'shared/ui/Stack/stackConfig';
import { Tabs } from 'shared/ui/Tabs/Tabs';
import { TodoEveryDay } from 'pages/Todo/ui/TodoEveryDay/TodoEveryDay';
import { TodoGlobal } from 'pages/Todo/ui/TodoGlobal/TodoGlobal';

function TodoPage(): ReactElement {
  // const rowSizes = new Array(1000).fill(true).map(() => 25 + Math.round(Math.random() * 50));
  //
  // const getItemSize = (index) => rowSizes[index];
  //
  // const Row = ({ index, style }) => (
  //   <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
  //     Row {index}
  //   </div>
  // );
  //
  // const Example = () => (
  //   <VariableSizeList
  //     className="List"
  //     height={800}
  //     itemCount={1000}
  //     itemSize={getItemSize}
  //     width={1300}>
  //     {Row}
  //   </VariableSizeList>
  // );

  const [itemTab, setItemTab] = useState(0);

  return (
    <HStack max justIt={JustItms.START} wrap={Wrap.wrap} className={cls.TodoPage}>
      <Tabs itemTab={itemTab} setTab={setItemTab} tabsList={['every day', 'global']} />

      {itemTab === 0 ? <TodoEveryDay /> : <TodoGlobal />}
    </HStack>
  );
}

export default memo(TodoPage);
