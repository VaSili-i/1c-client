import { memo, type ReactElement, type SetStateAction, useState } from 'react';
import { VStack } from 'shared/ui/Stack';

import cls from './MainPage.module.scss';
import { JustItms } from 'shared/ui/Stack/stackConfig';

function MainPage(): ReactElement {
  const [value, setValue] = useState(`# Что такое function component?
Функциональные компоненты (function components) представляют собой один из способов создания компонентов, которые отвечают за отображение интерфейса пользователя и обработку логики в приложении. 

## props
Это объект, содержащий свойства (или параметры), передаваемые компоненту извне аргументами.

1. **props** позволяют передавать данные от родительского компонента к дочернему компоненту.

1. **props** являются неизменяемыми. Компонент не должен изменять свойства напрямую.

1. **react** не выполняет проверку типов данных для свойств (props).

1. Свойство **children** в props содержит все дочерние элементы компонента. 

1. Проверить, существует ли определённое свойство. Это можно сделать, используя различные методы, такие как hasOwnProperty или оператор in.

1. Родительский компонент может передавать функции для обновления своего состояния дочернему компоненту, позволяя ему взаимодействовать с состоянием родителя.

1. 

`);
  const act = setValue as SetStateAction<any>;

  return (
    <VStack max justIt={JustItms.START} className={cls.MainPage}>
      <></>
    </VStack>
  );
}

export default memo(MainPage);
