import { type ReactElement, useCallback } from 'react';
import { VStack } from 'shared/ui/Stack';
import { Input } from 'shared/ui/Input/Input';
import { learnReducer, updateCode, updateName } from 'features/AddLearn/model/slice/learnSlice';
import { useSelector } from 'react-redux';
import {
  selectLearn,
  selectLearnCode,
  selectLearnName
} from 'features/AddLearn/model/selectors/selectName';
import { type ReducerList } from 'app/provider/store/ui/DynamicReducer';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { addLearn } from 'features/AddLearn/service/fetchAddLearn';
import { Button } from 'shared/ui/Button/Button';

export function AddLearn(): ReactElement {
  const learnName = useSelector(selectLearnName);
  const learnCode = useSelector(selectLearnCode);
  const learn = useSelector(selectLearn);

  const dispatch = useAppDispatch();

  const reducers: ReducerList = {
    learn: learnReducer
  };

  const changeLearnName = useCallback(
    ({ name }: Record<string, string>) => {
      dispatch(updateName(name));
    },
    [dispatch]
  );

  const changeLearnCode = useCallback(
    ({ code }: Record<string, string>) => {
      dispatch(updateCode(code));
    },
    [dispatch]
  );

  return (
    <VStack>
      <Input label={'name'} name={'name'} value={learnName} changeValue={changeLearnName} />
      <Input label={'code'} name={'code'} value={learnCode} changeValue={changeLearnCode} />
      <Button onClick={async () => await dispatch(addLearn(learn!))}>fdsf</Button>
    </VStack>
  );
}
