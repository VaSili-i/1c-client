import { memo, type ReactElement } from 'react';
import { AuthForm } from 'entities/AuthForm';

function Auth(): ReactElement {
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

  return <AuthForm />;
}

export default memo(Auth);
