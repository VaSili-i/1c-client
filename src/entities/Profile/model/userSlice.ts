import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type UserSchema } from 'shared/types/stateSchema/UserSchema';
import { type UserTp } from 'shared/types/entities/profileTypes';
import { fetchUser } from 'entities/Profile/service/fetchUser';

const initialState: UserSchema = {
  isLoading: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    editUserForm: (state, action: PayloadAction<UserTp>) => {
      state.userInForm = {
        ...state.userInForm,
        ...action.payload
      };
    },
    cancelEditUserForm: (state) => {
      state.userInForm = state.user;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.userInForm = undefined;
        state.user = undefined;
        state.isLoading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action: PayloadAction<UserTp>) => {
        state.user = action.payload;
        state.userInForm = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.error = 're';
        state.isLoading = false;
      });
  }
});

export const { editUserForm, cancelEditUserForm } = userSlice.actions;
export const { reducer: userReducer } = userSlice;
