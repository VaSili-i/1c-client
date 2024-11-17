import { type StateSchema } from 'app/provider/store/config/StateSchema';

export const selectLearnName = (state: StateSchema): string => state.learn?.learn?.name ?? '';
