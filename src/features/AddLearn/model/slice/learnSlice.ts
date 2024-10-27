import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type LearnSchema } from 'shared/types/stateSchema/LearnSchema';
import { addLearn } from 'features/AddLearn/service/fetchAddLearn';
import { fetchUser } from 'entities/Profile/service/fetchUser';
import { LearnDeprecatedTp } from 'shared/types/entities/learnTypes';

const initialState: LearnSchema = {
  isLoading: false,
  learn: {
    name: '',
    code: ''
  }
};

export const learnSlice = createSlice({
  name: 'learns',
  initialState,
  reducers: {
    addLearn: (state, action: PayloadAction<LearnDeprecatedTp>) => {
      state.learn = action.payload;
    },
    updateName: (state, action: PayloadAction<string>) => {
      if (state.learn != null) {
        state.learn.name = action.payload;
      }
    },
    updateCode: (state, action: PayloadAction<string>) => {
      if (state.learn != null) {
        state.learn.code = action.payload;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addLearn.pending, (state) => {
        state.learn = undefined;
        state.isLoading = true;
      })
      .addCase(addLearn.fulfilled, (state, action: PayloadAction<LearnDeprecatedTp>) => {
        state.isLoading = false;
        state.learn = action.payload;
      })
      .addCase(addLearn.rejected, (state) => {
        state.error = 're';
        state.isLoading = false;
      });
  }
});

export const { updateCode, updateName } = learnSlice.actions;
export const { reducer: learnReducer } = learnSlice;
