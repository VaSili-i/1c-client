import { joinClassName } from 'shared/lib/joinClassName/joinClassName';
import cls from './Modal.module.scss';
import { type ReactElement, ReactNode } from 'react';
import { VStack } from 'shared/ui/Stack';
import { Gap } from 'shared/ui/Stack/stackConfig';
import { Button } from 'shared/ui/Button/Button';

interface AddLearnResourceProps {
  clsName?: string;
  isOpen: boolean;
  toggleOpen: (isOpen: boolean) => void;
  addAction: any;
  children: ReactNode;
}

export function Modal({ clsName, toggleOpen, isOpen, addAction, children }: AddLearnResourceProps): ReactElement {
  return (
    <>
      {isOpen && (
        <VStack className={joinClassName(cls.AddLearnResource, {}, clsName)}>
          <VStack gap={Gap.G8} className={cls.form}>
            {children}
            <Button onClick={() => addAction()}>ADD</Button>
            <Button
              onClick={() => {
                toggleOpen(!isOpen);
              }}>
              close
            </Button>
          </VStack>
        </VStack>
      )}
    </>
  );
}
