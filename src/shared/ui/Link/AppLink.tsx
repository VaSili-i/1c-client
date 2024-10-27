import { Link, type LinkProps } from 'react-router-dom';
import { type ReactElement } from 'react';
import { joinClassName } from 'shared/lib/joinClassName/joinClassName';
import cls from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
  className?: string;
}

export function AppLink(props: AppLinkProps): ReactElement {
  const { className, ...otherProps } = props;

  return (
    <Link {...otherProps} className={joinClassName(cls.AppLink, {}, className)} to={props.to} />
  );
}
