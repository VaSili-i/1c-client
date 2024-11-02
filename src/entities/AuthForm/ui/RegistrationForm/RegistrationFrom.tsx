import cls from './RegistrationFrom.module.scss';
import { joinClassName } from 'shared/lib/joinClassName/joinClassName';
import UserIcon from 'shared/assets/icon/nav/user-nav.svg';
import { Button } from 'shared/ui/Button/Button';
import { AppLink } from 'shared/ui/Link/AppLink';
import { VStack } from 'shared/ui/Stack';
import { Items } from 'shared/ui/Stack/stackConfig';
import { type ReactElement, useState } from 'react';
import type { UserTp } from 'shared/types/entities/authTypes';
import { useRegistrationMutation } from 'shared/api/general/AuthRtqQueryApi';

interface RegisterFormProps {
  disableCls: boolean;
  setDisableCls: (disable: 'login' | 'register') => void;
}

export function RegistrationFrom({ disableCls, setDisableCls }: RegisterFormProps): ReactElement {
  const disable = disableCls ? 'disable' : '';
  const [registration, { data, isSuccess, isLoading, isError }] = useRegistrationMutation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleLogin = async (user: UserTp) => {
    try {
      await registration(user).unwrap();
      // Обработка успешного входа
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };
  return (
    <div className={joinClassName(cls.RegisterForm, {}, cls[disable])}>
      <form className={cls.form}>
        <h2 className={cls.title}>Регистрация</h2>
        <div className={joinClassName(cls.inputBox, {}, cls.animation)}>
          <input value={username} onChange={handleUsernameChange} required={true} className={cls.input} />
          <label className={cls.label}>Имя пользователя</label>
          <UserIcon className={cls.icon} />
        </div>

        <div className={joinClassName(cls.inputBox, {}, cls.animation)}>
          <input value={email} onChange={handleEmailChange} required={true} className={cls.input} />
          <label className={cls.label}>Почта</label>
          <UserIcon className={cls.icon} />
        </div>

        <div className={joinClassName(cls.inputBox, {}, cls.animation)}>
          <input value={password} onChange={handlePasswordChange} required={true} className={cls.input} />
          <label className={cls.label}>Пароль</label>
          <UserIcon className={cls.icon} />
        </div>

        <Button
          className={cls.btn}
          onClick={() => {
            void handleLogin({ username, password, email });
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
