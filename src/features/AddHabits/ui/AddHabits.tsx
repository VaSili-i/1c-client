import { type ReactElement, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { Input } from 'shared/ui/Input/Input';
import { type HabitTp } from 'shared/types/entities/learnTypes';
import { Select } from 'shared/ui/Select/Select';
import { useGetAllLevelQuery } from 'shared/api/general/LevelRtqQueryApi';
import { useAddHabitsMutation } from 'shared/api/general/HabitsRtqQueryApi';

interface AddHabitsProps {
  isOpen: boolean;
  toggleOpen: (value: boolean) => void;
}

export function AddHabits({ isOpen, toggleOpen }: AddHabitsProps): ReactElement {
  const [habit, setHabit] = useState<HabitTp | Partial<HabitTp>>({});

  const { data: levelList } = useGetAllLevelQuery(undefined);
  const [createHabits] = useAddHabitsMutation(undefined);
  const changeAct = (changedState: Record<string, string | number>): void => {
    setHabit({ ...habit, ...changedState });
  };

  const actionAdd = async (): Promise<any> => await createHabits(habit);

  return (
    <Modal isOpen={isOpen} toggleOpen={toggleOpen} addAction={actionAdd}>
      <Input value={habit.name} changeValue={changeAct} label={'name'} />
      <Input value={habit.progress} changeValue={changeAct} label={'progress'} />
      <Input value={habit.percent} changeValue={changeAct} label={'percent'} />
      <Select value={habit.progressLevel?.code} changeValue={changeAct} options={levelList} label={'progressLevel'} />
      <Select value={habit.effort?.code} changeValue={changeAct} options={levelList} label={'effort'} />
      <Input value={habit.timeDo} changeValue={changeAct} label={'timeDo'} />
    </Modal>
  );
}
