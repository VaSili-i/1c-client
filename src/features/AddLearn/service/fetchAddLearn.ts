import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from 'shared/api/config/apiAxios';
import { LearnDeprecatedTp } from 'shared/types/entities/learnTypes';

export const addLearn = createAsyncThunk<LearnDeprecatedTp, LearnDeprecatedTp>(
  'addLearn',
  async (learn) => {
    const resource = await $api.post('learn', learn);

    return resource.data;
  }
);
