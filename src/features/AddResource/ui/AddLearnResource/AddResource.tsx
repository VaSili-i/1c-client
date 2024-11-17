import { type ReactElement, useState } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { useAddLearnResourceMutation } from 'shared/api/general/LearnResourceRtqQueryApi';
import { type ResourceTvP, type TagTpV } from 'shared/types/entities/learnTypes';
import { Select } from 'shared/ui/Select/Select';
import { useGetAllLearnStatusQuery } from 'shared/api/general/LearnStatusRtqQueryApi';
import { useGetAllTagQuery } from 'shared/api/general/LearnTagRtqQueryApi';
import { Modal } from 'shared/ui/Modal/Modal';
import TagInput from 'shared/ui/TagChakra/TagChakra';
import { useGetAllLevelQuery } from 'shared/api/general/LevelRtqQueryApi';

interface AddLearnResourceProps {
  clsName?: string;
  isOpen: boolean;
  toggleOpen: (isOpen: boolean) => void;
}

export function AddResource({ clsName, toggleOpen, isOpen }: AddLearnResourceProps): ReactElement {
  const [learn, setLearn] = useState<ResourceTvP | Partial<ResourceTvP>>({});

  const changeAct = (changedState: Record<string, string | number>): void => {
    setLearn({ ...learn, ...changedState });
  };

  const changeActTag = (changedState: TagTpV[]): void => {
    setLearn({ ...learn, tag: changedState });
  };

  const [addLearnResourceAct] = useAddLearnResourceMutation();
  const { data: statusList } = useGetAllLearnStatusQuery(undefined);
  const { data: levelList } = useGetAllLevelQuery(undefined);
  const { data: resourceTagList } = useGetAllTagQuery(undefined);

  const addAction = async (): Promise<any> => await addLearnResourceAct(learn);

  return (
    <Modal isOpen={isOpen} toggleOpen={toggleOpen} addAction={addAction}>
      <Input value={learn.name} changeValue={changeAct} label={'name'} />
      <Input value={learn.description} changeValue={changeAct} label={'description'} />
      <Input value={learn.link} changeValue={changeAct} label={'link'} />
      <Input value={learn.img} changeValue={changeAct} label={'img'} />
      <Select value={learn.priority?.name} changeValue={changeAct} options={levelList} label={'priority'} />
      <Select value={learn.status?.name} changeValue={changeAct} options={statusList} label={'status'} />
      <TagInput options={resourceTagList ?? []} changeValue={changeActTag} valueList={[]} />
    </Modal>
  );
}
