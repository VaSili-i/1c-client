import cls from './RegistrationFrom.module.scss';
import { joinClassName } from 'shared/lib/joinClassName/joinClassName';
import UserIcon from 'shared/assets/icon/nav/user-nav.svg';
import { Button } from 'shared/ui/Button/Button';
import { AppLink } from 'shared/ui/Link/AppLink';
import { VStack } from 'shared/ui/Stack';
import { Items } from 'shared/ui/Stack/stackConfig';
import { type ReactElement } from 'react';
import type { UserLogTp } from 'shared/types/entities/authTypes';
import { useLoginMutation } from 'shared/api/general/AuthRtqQueryApi';

interface RegisterFormProps {
  disableCls: boolean;
  setDisableCls: (disable: 'login' | 'register') => void;
}

export function RegistrationFrom({ disableCls, setDisableCls }: RegisterFormProps): ReactElement {
  const disable = disableCls ? 'disable' : '';
  const [login, { data, isSuccess, isLoading, isError }] = useLoginMutation();
  const handleLogin = async (user: UserLogTp) => {
    try {
      await login(user).unwrap();
      // Обработка успешного входа
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  return (
    <div className={joinClassName(cls.RegisterForm, {}, cls[disable])}>
      <form className={cls.form}>
        <h2 className={cls.title}>Регистрация</h2>
        <div className={joinClassName(cls.inputBox, {}, cls.animation)}>
          <input required={true} className={cls.input} />
          <label className={cls.label}>Имя пользователя</label>
          <UserIcon className={cls.icon} />
        </div>

        <div className={joinClassName(cls.inputBox, {}, cls.animation)}>
          <input required={true} className={cls.input} />
          <label className={cls.label}>Почта</label>
          <UserIcon className={cls.icon} />
        </div>

        <div className={joinClassName(cls.inputBox, {}, cls.animation)}>
          <input required={true} className={cls.input} />
          <label className={cls.label}>Пароль</label>
          <UserIcon className={cls.icon} />
        </div>

        <Button
          className={cls.btn}
          onClick={() => {
            console.log(343);
         //   void handleLogin({ username, password });
          }}>
          Sing Up
        </Button>
        <div className={cls.toggleText}>
          <p>
            Already have an account?
            <AppLink
              onClick={() => {
                setDisableCls('login');
              }}
              className={cls.linkText}
              to={''}>
              {'Login'}
            </AppLink>
          </p>
        </div>
      </form>
      <VStack align={Items.START} className={joinClassName(cls.infoLogin, {}, cls.rightH)}>
        <h2 className={cls.animation}>Welcome to registration!</h2>
        <p className={cls.animation}></p>
      </VStack>
    </div>
  );
}
