import { type StateSchema } from 'app/provider/store/config/StateSchema';

import { LearnDeprecatedTp } from 'shared/types/entities/learnTypes';

export const selectLearnName = (state: StateSchema): string => state.learn?.learn?.name ?? '';
export const selectLearnCode = (state: StateSchema): string => state.learn?.learn?.code ?? '';
export const selectLearn = (state: StateSchema): LearnDeprecatedTp | undefined =>
  state.learn?.learn;
