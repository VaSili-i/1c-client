import { type ReactElement, useState } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { useAddLearnResourceMutation } from 'shared/api/general/LearnResourceRtqQueryApi';
import { type LearnResourceTp } from 'shared/types/entities/learnTypes';
import { Select } from 'shared/ui/Select/Select';
import { useGetAllLearnStatusQuery } from 'shared/api/general/LearnStatusRtqQueryApi';
import { useGetAllLevelQuery } from 'shared/api/general/LevelRtqQueryApi';
import { useGetAllTagQuery } from 'shared/api/general/LearnTagRtqQueryApi';
import { useGetAllTypeLearnQuery } from 'shared/api/general/LearnTypeRtqQueryApi';
import { useGetAllMasteringQuery } from 'shared/api/general/LearnMasteringRtqQueryApi';
import { Modal } from 'shared/ui/Modal/Modal';
import { DateTime } from 'luxon';

interface AddLearnResourceProps {
  clsName?: string;
  isOpen: boolean;
  toggleOpen: (isOpen: boolean) => void;
}

export function AddLearnResource({ clsName, toggleOpen, isOpen }: AddLearnResourceProps): ReactElement {
  const [learn, setLearn] = useState<LearnResourceTp | Partial<LearnResourceTp>>({});

  const changeAct = (changedState: Record<string, string | number>): void => {
    setLearn({ ...learn, ...changedState });
  };

  const [addLearnResourceAct] = useAddLearnResourceMutation();
  const { data: statusList } = useGetAllLearnStatusQuery(undefined);
  const { data: levelList } = useGetAllLevelQuery(undefined);
  const { data: learnTagList } = useGetAllTagQuery(undefined);
  const { data: learnTypeList } = useGetAllTypeLearnQuery(undefined);
  const { data: learnMasteringList } = useGetAllMasteringQuery(undefined);

  const addAction = async (): Promise<any> => await addLearnResourceAct(learn);

  return (
    <Modal isOpen={isOpen} toggleOpen={toggleOpen} addAction={addAction}>
      <Input value={learn.name} changeValue={changeAct} label={'name'} />
      <Input value={learn.fullName} changeValue={changeAct} label={'fullName'} />
      <Input value={learn.link} changeValue={changeAct} label={'link'} />
      <Input value={learn.key} changeValue={changeAct} label={'key'} />
      <Input value={learn.content} changeValue={changeAct} label={'content'} />
      <Select value={learn.type?.code} changeValue={changeAct} options={learnTypeList} label={'type'} />
      <Select value={learn.priority?.code} changeValue={changeAct} options={levelList} label={'priority'} />
      <Select value={learn.status?.code} changeValue={changeAct} options={statusList} label={'status'} />
      <Select value={learn.mastering?.code} changeValue={changeAct} options={learnMasteringList} label={'mastering'} />

    </Modal>
  );
}
