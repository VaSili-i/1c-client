import { type ResourceTvP } from 'shared/types/entities/learnTypes';

export interface ResourceSchema {
  isLoading: boolean;
  error?: string;
  learn?: ResourceTvP;
}
