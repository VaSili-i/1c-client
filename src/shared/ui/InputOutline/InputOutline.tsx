import { joinClassName } from 'shared/lib/joinClassName/joinClassName';
import cls from 'entities/AuthForm/ui/RegistrationForm/RegistrationFrom.module.scss';
import UserIcon from 'shared/assets/icon/nav/user-nav.svg';
import { type ReactElement } from 'react';

export function InputOutline(): ReactElement {
  return (
    <div className={joinClassName(cls.inputBox, {}, cls.animation)}>
      <input required={true} className={cls.input} />
      <label className={cls.label}>fdsfd</label>
      <UserIcon className={cls.icon} />
    </div>
  );
}
