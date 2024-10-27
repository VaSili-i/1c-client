import React, { type ReactElement } from 'react';
import cls from './Icon.module.scss';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick' | 'className'>;

interface IconClickableProps extends SvgProps {
  clsName?: string;
  isClickable: true;
  SvgIcon: React.VFC<React.SVGProps<SVGSVGElement>>;
  onClickAct: () => void | Promise<void>;
}

interface IconUnClickableProps extends SvgProps {
  clsName?: string;
  isClickable?: null;
  SvgIcon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

type IconProps = IconClickableProps | IconUnClickableProps;

export function Icon(props: IconProps): ReactElement {
  const { clsName, SvgIcon, isClickable, width = 32, height = 32, ...other } = props;
  const icon = <SvgIcon className={clsName} width={width} height={height} {...other}></SvgIcon>;

  if (isClickable == null) {
    return icon;
  }

  return (
    <button className={cls.button} type="button" onClick={props.onClickAct}>
      {icon}
    </button>
  );
}
