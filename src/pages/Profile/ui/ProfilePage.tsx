import { memo, type ReactElement, useCallback, useEffect } from 'react';
import cls from './ProfilePage.module.scss';
import { HStack, VStack } from 'shared/ui/Stack';
import { Content, Items, Wrap } from 'shared/ui/Stack/stackConfig';
import backgroundIcon from 'shared/assets/image/whiteBackground.jpg';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { userDataInProfile } from 'entities/Profile/model/selectors/select';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { editUserForm, userReducer } from 'entities/Profile/model/userSlice';
import { fetchUser } from 'entities/Profile/service/fetchUser';
import { DynamicReducer, type ReducerList } from 'app/provider/store/ui/DynamicReducer';

function ProfilePage(): ReactElement {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchUser());
  }, []);

  const userProfileData = useSelector(userDataInProfile);

  const changeUserName = useCallback(
    ({ name }: Record<string, string>) => {
      dispatch(editUserForm({ username: name }));
    },
    [dispatch]
  );

  const changeUserMail = useCallback(
    ({ mail }: Record<string, string>) => {
      dispatch(editUserForm({ mail }));
    },
    [dispatch]
  );

  /*  const changeUserRole = useCallback(
    (value: UserRoleTp) => {
      dispatch(editUserForm({ userRole: value }));
    },
    [dispatch]
  );

  const changeUserActive = useCallback(
    (value: boolean) => {
      dispatch(editUserForm({ isDeleted: value }));
    },
    [dispatch]
  ); */

  const reducerList: ReducerList = {
    user: userReducer
  };

  return (
    <DynamicReducer reducerList={reducerList}>
      <VStack className={cls.ProfilePage} justify={Content.START} align={Items.START}>
        <VStack className={cls.baseBlock}>
          <img className={cls.profileImage} src={backgroundIcon} />
          <HStack max align={Items.START} className={cls.personInfo} wrap={Wrap.wrap}>
            <Input
              className={cls.input}
              changeValue={changeUserName}
              name={'name'}
              value={userProfileData?.username ?? ''}
              label={'user name'}
            />
            <Input changeValue={changeUserMail} name={'mail'} value={userProfileData?.mail ?? ''} label={'mail'} />
          </HStack>
        </VStack>
      </VStack>
    </DynamicReducer>
  );
}

export default memo(ProfilePage);
