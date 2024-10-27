import { type ReactElement, useState } from 'react';
import cls from './AuthForm.module.scss';
import { joinClassName } from 'shared/lib/joinClassName/joinClassName';
import { LoginForm } from 'entities/AuthForm/ui/LoginForm/LoginForm';
import { RegistrationFrom } from 'entities/AuthForm/ui/RegistrationForm/RegistrationFrom';

export function AuthForm(): ReactElement {
  const [activeForm, setActiveForm] = useState<'login' | 'register'>('register');

  return (
    <div className={joinClassName(cls.AuthForm, {}, cls[activeForm])}>
      <span className={cls.lineAnimation} />
      <span className={cls.lineAnimation2} />
      <LoginForm setDisableCls={setActiveForm} disableCls={activeForm === 'register'} />
      <RegistrationFrom setDisableCls={setActiveForm} disableCls={activeForm === 'login'} />
    </div>
  );
}
