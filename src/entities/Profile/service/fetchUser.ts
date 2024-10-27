import { createAsyncThunk } from '@reduxjs/toolkit';
import { type UserTp } from 'shared/types/entities/profileTypes';
import { $api } from 'shared/api/config/apiAxios';

export const fetchUser = createAsyncThunk<UserTp, undefined>('user/fetchUser', async (_, thunkApi) => {
  try {
    const response = await $api.get<UserTp>('/user');

    if (response.data == null) {
      throw new Error();
    }
    return response.data;
  } catch (e) {
    console.log(e);
    return thunkApi.rejectWithValue('fds');
  }
});
