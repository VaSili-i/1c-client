import { type ReactElement } from 'react';
import cls from './MainLayout.module.scss';
import { VStack } from 'shared/ui/Stack';

interface MainLayoutProps {
  header: ReactElement;
  sidebar: ReactElement;
  main: ReactElement;
  rightbar: ReactElement;
}

export function MainLayout(props: MainLayoutProps): ReactElement {
  const { header, sidebar, rightbar, main } = props;
  return (
    <div className={cls.MainLayout}>
      <div className={cls.header}>{header}</div>
      <div className={cls.sidebar}>{sidebar}</div>
      <VStack className={cls.main}>{main}</VStack>
      <div className={cls.rightbar}>{rightbar}</div>
    </div>
  );
}
