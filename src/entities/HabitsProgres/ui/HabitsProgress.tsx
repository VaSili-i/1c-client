import { type ReactElement } from 'react';
import { HStack, VStack } from 'shared/ui/Stack';
import cls from './HabitsProgress.module.scss';
import { type HabitTp } from 'shared/types/entities/learnTypes';
import { Content, Items } from 'shared/ui/Stack/stackConfig';
import { getTimeFormat } from 'shared/lib/time/getTimeFormat';
import { usePlusOneProgressMutation } from 'shared/api/general/HabitsRtqQueryApi';

interface HabitsProgressProps {
  habit: HabitTp;
  number: number;
}
export function HabitsProgress({ habit, number }: HabitsProgressProps): ReactElement {
  const [createHabit] = usePlusOneProgressMutation();

  return (
    <></>
  /*  <ConfigProvider
      theme={{
        components: {
          Progress: {
            defaultColor: 'var(--main-color)',
            colorText: 'var(--main-color)'
          }
        }
      }}>
      <VStack onClick={async () => await createHabit(habit)} className={cls.HabitsProgress} max>
        <h2 className={cls.title}>{habit.name}</h2>
        <div style={{ width: '100%' }}>
          <h2 className={cls.title}>{number}.</h2>
          <Progress className={cls.progress} percent={Math.ceil((habit.progress / habit.percent) * 100)} />
        </div>
        <HStack max justify={Content.AROUND}>
          <span className={cls.progressCount}>{`${habit.progress} / ${habit.percent}`}</span>
          <span className={cls.progressCount}>{getTimeFormat(habit.timeStart)}</span>
        </HStack>
      </VStack>
    </ConfigProvider>*/
  );
}
