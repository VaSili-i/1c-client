import { type ReactElement, useEffect, useState } from 'react';
import cls from './Login.module.scss';
import { joinClassName } from 'shared/lib/joinClassName/joinClassName';
import UserIcon from 'shared/assets/icon/nav/user-nav.svg';
import { Button } from 'shared/ui/Button/Button';
import { AppLink } from 'shared/ui/Link/AppLink';
import { VStack } from 'shared/ui/Stack';
import { Items } from 'shared/ui/Stack/stackConfig';
import { useLoginMutation } from 'shared/api/general/AuthRtqQueryApi';
import { type UserLogTp } from 'shared/types/entities/authTypes';

interface LoginFormProps {
  disableCls: boolean;
  setDisableCls: (disable: 'login' | 'register') => void;
}

export function LoginForm({ disableCls, setDisableCls }: LoginFormProps): ReactElement {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const disable = disableCls ? 'disable' : '';

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };


  const [login, { data, isSuccess, isLoading, isError }] = useLoginMutation();

  const handleLogin = async (user: UserLogTp) => {
    try {
      await login(user).unwrap();
      // Обработка успешного входа
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  useEffect(() => {
    if (isSuccess && data?.access_token != null) {
      localStorage.setItem('token', data?.access_token as string); // Сохранение токена в localStorage
      // Перенаправление пользователя на защищённую страницу или обновление состояния
      window.location.href = '/dashboard';
    }
  }, [isSuccess, data]);

  return (
    <div className={joinClassName(cls.LoginFrom, {}, cls[disable])}>
      <div className={cls.form}>
        <h2 className={cls.title}>Авторизация</h2>
        <div className={joinClassName(cls.inputBox, {}, cls.animation)}>
          <input required={true} className={cls.input} value={username} onChange={handleUsernameChange} />
          <label className={cls.label}>Имя пользователя</label>
          <UserIcon className={cls.icon} />
        </div>

        <div className={joinClassName(cls.inputBox, {}, cls.animation)}>
          <input required={true} type="password" className={cls.input} value={password} onChange={handlePasswordChange} />
          <label className={cls.label}>Пароль</label>
          <UserIcon className={cls.icon} />
        </div>
        <Button
          className={cls.btn}
          onClick={() => {
            void handleLogin({ username, password });
          }}>
          Login
        </Button>
        <div className={cls.toggleText}>
          <p>
            Нет аккаунта?
            <AppLink
              onClick={() => {
                setDisableCls('register');
              }}
              className={cls.linkText}
              to={''}>
              Sign up
            </AppLink>
          </p>
        </div>
      </div>
      <VStack align={Items.END} className={joinClassName(cls.infoLogin)}>
        <h2>Welcome to login!</h2>
        <p></p>
      </VStack>
    </div>
  );
}
