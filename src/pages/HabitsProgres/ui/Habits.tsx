import { memo, type ReactElement, useState } from 'react';
import { VStack } from 'shared/ui/Stack';
import { HabitsProgress } from 'entities/HabitsProgres';
import cls from './HabitsProgress.module.scss';
import { Content, Gap, Items } from 'shared/ui/Stack/stackConfig';
import { AddHabits } from 'features/AddHabits/ui/AddHabits';
import { useGetAllHabitsQuery } from 'shared/api/general/HabitsRtqQueryApi';
import { Notification } from 'shared/ui/Notification/Notification';

import PlusIcon from 'shared/assets/icon/add_black_24dp.svg';

function Habits(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  const { data: habitList } = useGetAllHabitsQuery(undefined);

  return (
    <VStack max gap={Gap.G8} justify={Content.START} align={Items.START} className={cls.Habits}>
      <AddHabits isOpen={isOpen} toggleOpen={setIsOpen} />
    {/*  <FloatButton
        onClick={() => {
          setIsOpen(true);
        }}
        className={cls.colorFill}
        icon={<PlusIcon />}
        type="default"
        style={{ right: 100 }}
      />*/}
      {habitList?.map((habit, index) => <HabitsProgress key={habit.id} number={index + 1} habit={habit} />)}
      <div style={{ height: '50px' }}></div>
      <Notification description={'Важно'} message={'Добавлять по 1 +; Добавлять новую через 5 дней'} />
    </VStack>
  );
}

export default memo(Habits);
