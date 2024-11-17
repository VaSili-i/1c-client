import { joinClassName } from 'shared/lib/joinClassName/joinClassName';
import { VStack } from 'shared/ui/Stack';
import { Gap } from 'shared/ui/Stack/stackConfig';
import { type ReactElement, type ReactNode } from 'react';
import cls from './Modal.module.scss';
import { Box, Button, HStack } from '@chakra-ui/react';

interface AddLearnResourceProps {
  clsName?: string;
  isOpen: boolean;
  toggleOpen: (isOpen: boolean) => void;
  addAction: () => void;
  children: ReactNode;
}

export function Modal({ clsName, toggleOpen, isOpen, addAction, children }: AddLearnResourceProps): ReactElement {
  return (
    <>
      {isOpen && (
        <VStack className={joinClassName(cls.AddLearnResource, {}, clsName)}>
          <VStack gap={Gap.G8} className={cls.form}>
            {children}
            <HStack gap={Gap.G16}>
              <Box minHeight="100px" />
              <Button colorScheme="teal" onClick={addAction}>
                Сохранить
              </Button>
              <Button
                variant="ghost"
                color="main-color"
                onClick={() => {
                  toggleOpen(!isOpen);
                }}
                ml="2">
                Отмена
              </Button>
            </HStack>
          </VStack>
        </VStack>
      )}
    </>
  );
}
