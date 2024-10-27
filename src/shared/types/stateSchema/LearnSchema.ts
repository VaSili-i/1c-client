import { type LearnDeprecatedTp } from 'shared/types/entities/learnTypes';

export interface LearnSchema {
  isLoading: boolean;
  error?: string;
  learn?: LearnDeprecatedTp;
}
