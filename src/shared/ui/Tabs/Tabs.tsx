import { HStack } from 'shared/ui/Stack';
import { Content } from 'shared/ui/Stack/stackConfig';
import cls from './Tabs.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { type ReactElement } from 'react';
import { joinClassName } from 'shared/lib/joinClassName/joinClassName';

interface TabsProps {
  tabsList: string[];
  itemTab: number;
  setTab: (item: number) => void;
}

export function Tabs({ tabsList, itemTab, setTab }: TabsProps): ReactElement {
  const setActiveAction = (index: number): void => {
    setTab(index);
    setTab(index);
  };

  const buttonClsNames = (index: number): string =>
    joinClassName(cls.tab, { [cls.active]: itemTab === index });
  const tabsClsNames: string = joinClassName(cls.tabsBox, { [cls.active]: Boolean(itemTab) });

  return (
    <HStack justify={Content.AROUND} className={tabsClsNames}>
      {tabsList.map((tab, index) => (
        <Button
          key={tab}
          className={buttonClsNames(index)}
          onClick={() => {
            setActiveAction(index);
          }}
        >
          {tab}
        </Button>
      ))}
    </HStack>
  );
}
